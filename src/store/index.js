import { createStore } from "vuex";

export default createStore({
	state: {
		user: null,
		products: null,
		product: null,
		asc: true,
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
	},

	actions: {
		login: async (context, payload) => {
			const { email, password } = payload;
			const response = await fetch(
				`http://localhost:3000/users?email=${email}&password=${password}`
			);
			const userData = await response.json();
			context.commit("setUser", userData[0]);
		},
		ShowProducts: async (context) => {
			fetch("http://localhost:3000/products")
				.then((response) => response.json())
				.then((products) => context.commit("setProducts", products));
		},

		// create user
		signUp: async (context, data) => {
			const { full_name, email, password, role } = data;
			fetch("http://localhost:3000/users", {
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
			fetch("http://localhost:3000/products" + id)
				.then((res) => res.json())
				.then((products) => context.commit("setProducts", products));
		},

		// create a product
		createProduct: async (context, payload) => {
			const { artistName, artName, price, imgURL, description, category } =
				payload;
			fetch("http://localhost:3000/products", {
				method: "POST",
				body: JSON.stringify({
					artistName: artistName,
					artName: artName,
					price: price,
					imgURL: imgURL,
					description: description,
					category: category,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then(() => context.dispatch("ShowProducts"));
		},

		// edit products
		updateProduct: async (context, product) => {
			fetch("http://localhost:3000/products" + piece.id, {
				method: "PUT",
				body: JSON.stringify(product),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then(() => context.dispatch("ShowProducts"));
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
