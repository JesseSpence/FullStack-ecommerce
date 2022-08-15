import router from "@/router";
import { createStore } from "vuex";

var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 100) || 3000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	var that = this;
	var delta = 150 - Math.random() * 100;
  
	if (this.isDeleting) { delta /= 2; }
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 1000;
	}
  
	setTimeout(function() {
	  that.tick();
	}, delta);
  };
export default createStore({
	state: {
		user: null,
		token:null,
		products: null,
		product: null,
		orders:[],
	
	},
	getters:{
		GetProducts(){
		  state.products
		}
	  },
	mutations: {
		setToken:(state,token)=>{
            state.token = token
		},

		setUser: (state, user) => {
			state.user = user;
		},

		setProduct: (state, product) => {
			state.product = product;
		},
		setProducts: (state, products) => {
			state.products = products;
		},
		setOrders(state,orders){
			state.orders = orders
		  },

		sortProductsByPrice: (state) => {
			state.products = state.products.sort((a, b) => {
				return a.price - b.price;
			});
			if (!state.asc) {
				state.products.reverse();
			}
			state.asc = !state.asc;
		},
		
		hometext: () => {
			var elements = document.getElementsByClassName('txt-rotate');
			for (var i=0; i<elements.length; i++) {
			  var toRotate = elements[i].getAttribute('data-rotate');
			  var period = elements[i].getAttribute('data-period');
			  if (toRotate) {
				new TxtRotate(elements[i], JSON.parse(toRotate), period);
			  }
			}
			// INJECT CSS
			var css = document.createElement("style");
			css.type = "text/css";
			css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid rgba(246, 203, 94, 0.755) }";
			document.body.appendChild(css);
			
		  }
	},

	actions: {
		GetUser: async (context,state)=> {
			const res = await fetch("https://classic-store.herokuapp.com/users" + state.user.user_id)
				.then(res => res.json())
				.then(data => {
				context.commit("setUser",data)
				})
			console.log(res);
		},
		ShowProducts: async (context) => {
			const res =	await fetch("https://classic-store.herokuapp.com/products")
			.then(res => res.json())
			.then(data => context.commit("setProducts",data) );	
		},
		login: async (context,payload) => {
			 const {email,password} = payload
			const response = await fetch("https://classic-store.herokuapp.com/users/login",{
	    	method:"POST",
			body:JSON.stringify({
			email:payload.email,
			password:payload.password
			}),  
			headers: {
			'Content-type': 'application/json',
		    },
			})
			.then(res => res.json())
			.then(data =>{
				context.commit("setToken",data), 
				console.log(data)
			})
			
		},
		
	verify: async (context, state)=>{
       const res = await fetch("https://classic-store.herokuapp.com/users/users/verify",{
		method:"GET",
			headers: {
			'Content-type': 'application/json',
			'x-auth-token': `${state.token}`
		    },
	   })
	   .then(res => res.json())
	   .then(data =>{
        context.commit('setUser',data.user),
		console.log(data.user);
	   })
	//    router.push({
	// 	name: 'ProductView'
	//    })
		},

		// create user
		signUp: async (context, payload) => {
			// const { full_name, email, password, phone,country } = payload;
			console.log( payload);
			const res = await fetch("https://classic-store.herokuapp.com/users/register", {
				mode:"no-cors",
				
				method: "POST",
				body:JSON.stringify({
					full_name: payload.full_name,
                    email: payload.email,
					billing_address: "Address",
					default_shipping_address:"ALl no",
                    password: payload.password,
                    phone: payload.phone,
                    country: payload.country
				}),
				headers: {
					"Content-type": "application/json;",
				}
			})
			.then((res) => res.json())
			.then((data) => {

					console.log(data);
				});
				console.log(res);
		},

		// open one card
		getProduct: async (context,id) => {
			fetch("https://classic-store.herokuapp.com/products/" + id)
				.then((res) => res.json())
				.then((product) => context.commit("setProduct", product));
		},

		// create a product
		AddProduct: async (context,product) => {
			// const { name,price, descriptions, category,weight,sku,thumbnail,image,create_date,stock } =
			// 	payload;
					 const response = await fetch("https://classic-store.herokuapp.com/products", {
						mode:"no-cors",
				method: "POST",
				body: JSON.stringify({
					sku:product.sku,
					name:product.name,
					price: product.price,
					weight:product.weight,
					descriptions:product.descriptions,
					thumbnail:product.thumbnail,
					image:product.image,
					category:product.category,
					create_date:product.create_date,  
					stock:product.stock
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((res) => res.json())
				.then((data) =>
				context.commit("setProducts",data)
				);
				console.log(response);
		},

		// edit products
		UpdateProduct: async (context, product,id) => {
			const response = await fetch('https://classic-store.herokuapp.com/products' + id, {
				method: "PATCH",
				body: JSON.stringify({
					sku:product.sku,
					name:product.name,
					price: product.price,
					weight:product.weight,
					descriptions:product.descriptions,
					thumbnail:product.thumbnail,
					image:product.image,
					category:product.category,
					create_date:product.create_date,  
					stock:product.stock
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then(() => context.dispatch("setProducts",product));
				console.log(response);
		},

		// delete
		deleteProduct: async (context, id) => {
			const res = await fetch('https://classic-store.herokuapp.com/products' +  id, {
				method: "DELETE",
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then(() => context.dispatch("ShowProducts"));
			console.log(res);
		},
		addToPackage: async (context,order) => {
			const res = await fetch("http://classic-store.herokuapp.com",{
             method:"POST",
			 body:JSON.stringify({
				product:order.product,
			   quantity:order.quantity
			 }),
			 headers:{
				"Content-type": "application/json; charset=UTF-8",
			 }
			})
			const data = res.json();
			console.log(data);
		},
		getPackage:async (context)=>{
			const res = await fetch("https://classic-store.herokuapp.com/users/" + id,{
				method:"GET"
			});
			const data = res.json();
			console.log();
		}

	},
});
