import { createStore } from "vuex";

export default createStore({
	state: {
		user: null,
		products: null,
		product: null,
		asc: true,
	},getters:{
      GetProducts(){
		state.products
	  }
	},
	mutations: {
		setUser: (state, user) => {
			state.user = user;
			asc = true;
		},

		// setProduct: (state, product) => {
		// 	state.product = product;
		// },
		setProducts(state, products){
			state.products = products;
		},

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
		const res =	await fetch("http://localhost:6969/products")
		.then(res => res.json())
		.then(data => context.commit("setProducts",data) );	
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
			fetch("http://localhost:6969/products" + id)
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
			fetch(`http://localhost:6969/products/:${id}`, {
				method: "DELETE",
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then(() => context.commit("setProducts"));
		},
	},
});
