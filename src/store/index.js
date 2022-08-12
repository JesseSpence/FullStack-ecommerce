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
		products: null,
		product: null,
		asc: true,
	},
	getters:{
		GetProducts(){
		  state.products
		}
	  },
	mutations: {
		setUser: (state, user) => {
			state.user = user;
			asc = true;
		},

		setProduct: (state, product) => {
			state.product = product;
		},
		setProducts: (state, products) => {
			state.products = products;
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
		login: async (context, payload) => {
			const { email, password } = payload;
			const response = await fetch("http://localhost:6969/users/login",{
					method:"POST",
					body:JSON.stringify({
						email:email,
						password:password
					}),  
					headers: {
						'Content-type': 'application/json',
					  },
						});
			const userData = await response.json();
			context.commit("setUser", userData[0]);
		},
		ShowProducts: async (context) => {
			const res = await fetch("https://classic-store.herokuapp.com/products", { mode: "cors" })
				.then(res => res.json())
				.then(data => context.commit("setProducts", data));
			console.log(res);
		},

		// create user
		signUp: async (context, data) => {
			const { full_name, email, password, role } = data;
			fetch("http://localhost:6969/users", {
				method: "POST",
				body: JSON.stringify({
					full_name: full_name,
					role: role,
					email: email,
					password: password,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then((json) => context.commit("setUser", json));
		},

		// open one card
		showProduct: async (context) => {
			fetch("https://classic-store.herokuapp.com/products" + id)
				.then((res) => res.json())
				.then((products) => context.commit("setProducts", products));
		},


		// create a product
		AddProduct: async (context,product) => {
			// const { name,price, descriptions, category,weight,sku,thumbnail,image,create_date,stock } =
			// 	payload;
					 fetch("http://localhost:6969/products", {
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
				.then((response) => response.json())
				.then((data) =>
				context.commit("setProducts",data)
				);
		},

		// edit products
		updateProduct: async (context, product,id) => {
			fetch(`http://localhost:6969/products/:${id}`, {
				method: "PUT",
				body: JSON.stringify(product),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then(() => context.dispatch("setProducts"));
		},

		// delete
		deleteProduct: async (context, id) => {
			fetch("http://localhost:3000/products/" + id, {
				method: "DELETE",
			})
				.then((response) => response.json())
				.then(() => context.dispatch("ShowProducts"));
		},
	},
});
