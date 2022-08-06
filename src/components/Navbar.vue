<template>
	<nav id="nav" class="navbar navbar-dark navbar-expand-lg">
		<div class="container-fluid">
			<div class="brand">
				<a href="./index.html"
					><img
					style="background:black"
						id="navlogo"
						src="https://i.ibb.co/LvBgYgD/max-tutak-NOXMXHch-Eo-unsplash-removebg-preview.png"
				/></a>
			</div>
			

			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarScroll"
				aria-controls="navbarScroll"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarScroll">
				<ul
					class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll p-3 mb-5 rounded me-5 ms-5"
					style="--bs-scroll-height: 100px"
				>
					<li class="nav-item">
						<router-link class="nav-link active" to="/">HOME</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/ProductView">PRODUCTS</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/Login">LOGIN</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/signUp">SIGNUP</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/Contact">CONTACT</router-link>
					</li>
					<li class="list-unstyled">
						<router-link id="admin" class="nav-link" to="/Admin"
							>ADMIN</router-link
						>
					</li>
				</ul>
				<!-- <li class="list-unstyled">
					<router-link id="admin" class="nav-link" to="/Admin"
						>ADMIN</router-link
					>
				</li> -->
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		components: {},
	};
</script>

<style>
body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: -webkit-linear-gradient(rgb(5, 202, 156), rgb(184, 14, 184));       /* color of the tracking area */
}
ul::-webkit-scrollbar-track {
  background: -webkit-linear-gradient(rgb(5, 202, 156), rgb(184, 14, 184));       /* color of the tracking area */
}
body::-webkit-scrollbar-thumb {
  background-color: rgb(0, 0, 0);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 2px solid rgb(255, 255, 255);  /* creates padding around scroll thumb */
}
	/*Navbar*/
	.navbar {
		z-index: 1000;
		height: 80px;
		background-color: rgb(0, 0, 0);
	}

	.nav-link:hover {
		text-decoration: none;
		color: linear-gradient(rgb(5, 202, 156), rgb(184, 14, 184));
	}
	#navlogo {
		color: black;
		margin-bottom: 15px;
		height: 50px;
		width: 55px;
	}
	
	#navbrand {
		margin-top: -30px;
	}
	/* #logo3 {
  color: white;
   
    font-style: italic;
    font-weight: bold;
} */
	#bar {
		width: 20rem;
	}
	a {
		text-decoration: none;
	}
</style>
