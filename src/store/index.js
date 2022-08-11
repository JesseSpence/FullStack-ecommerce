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
