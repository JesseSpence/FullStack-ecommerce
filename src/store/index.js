import router from "@/router";
import { createStore } from "vuex";

export default createStore({
	state: {
		user: null,
		token:null,
		products: null,
		product: null,
		orders:[],
	
	},getters:{
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
		setProducts(state, products){
			state.products = products;
		},
		setOrders(state,orders){
          state.orders = orders
		}

		// sortProductsByPrice: (state) => {
		// 	state.products = state.products.sort((a, b) => {
		// 		return a.price - b.price;
		// 	});
		// 	if (!state.asc) {
		// 		state.products.reverse();
		// 	}
		// 	state.asc = !state.asc;
		// },
	},

	actions: {
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
		ShowProducts: async (context) => {
		const res =	await fetch("https://classic-store.herokuapp.com/products")
		.then(res => res.json())
		.then(data => context.commit("setProducts",data) );	
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
        context.commit('setUser',data),
		console.log(data);
	   })
	   router.push({
		name: 'ProductView'
	   })
		},

		// create user
		signUp: async (context, payload) => {
			// const { full_name, email, password, phone,country } = payload;
			console.log( payload);
			const res = await fetch("https://classic-store.herokuapp.com/users/register", {
				mode:"cors",
				method: "POST",
				body:JSON.stringify({
					full_name: payload.full_name,
                    email: payload.email,
                    password: payload.password,
                    phone: payload.phone,
                    country: payload.country,
					user_type:payload.user_type
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
