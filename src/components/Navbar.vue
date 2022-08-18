<template>
	<nav id="nav" class="navbar">
	<router-link @click="homeText()" to="/"><img id="nav-logo" src="https://i.ibb.co/3SV7mWn/mens-club-suit-removebg-preview.png" alt="mens-club-suit-removebg-preview"></router-link>
	
	<div class="links">
				<!-- <Searchbar/> -->

		      <AccountLinks/>
		
		<Cart/>
		</div>
	</nav>
	
</template>

<script>
import Searchbar from "../components/Searchbar.vue";
import AccountLinks from "../components/AccountLinks.vue";
import Cart from "../components/Cart.vue";

	export default {
	components: {
    Searchbar,
	AccountLinks,
	Cart
},
mounted() {
	
	},
	methods: {
		homeText() {
			this.$store.commit("hometext");
		}
},
	};
</script>

<style scoped>

	/*Navbar*/
	
	.navbar {
		padding:1%;
		background: rgba(246, 203, 94, 0.955) 100%;
        background: linear-gradient(0deg, var(--background-color) 2%, rgba(239, 205, 118, 0.955) 100%);
        height:60px;
		overflow-y: clip;
		z-index: 1000;
		justify-content: space-between;
		display:flex;
        min-width: 100vw !important;
	}
	#nav-logo{
		height:200px;
		margin-top:-85px;
        margin-left:-20px;
		filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.516));
	}
	
.links{
	display:flex;
	width:120px;
	justify-content: space-around;
}

	.fa-solid{
		font-size:1.5rem;
	}
	@media screen and (max-width:600px) {
		#nav-logo{
		margin-top:-75px;
		}
	}
</style>
