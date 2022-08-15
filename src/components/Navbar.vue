<template>
	<nav id="nav" class="navbar">
	<router-link @click="homeText()" to="/"><img id="nav-logo" src="https://i.ibb.co/3SV7mWn/mens-club-suit-removebg-preview.png" alt="mens-club-suit-removebg-preview"></router-link>
	<div class="links">
				<Searchbar/>

		      <AccountLinks/>
		
		<button><i  title="Your Packages" class="fa-solid fa-gift"></i></button>
		</div>
	</nav>
	
</template>

<script>
import Searchbar from "../components/Searchbar.vue";
import AccountLinks from "../components/AccountLinks.vue";

	export default {
	components: {
    Searchbar,
    AccountLinks
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
	button{
		border:none;
		font-size:1.5rem;
		transition: all ease-in-out .2s;
	   margin-right:2% ;
	   color:rgba(0, 0, 0, 0.634);
		background: none ;
	}
	button:hover{
		color:black;
		text-shadow: 1px 1px 2px rgb(30, 30, 29);
		transform: scale(1.2);
	}
	button:active{
		color:black;
		transform:translateZ(20px);
	}
	button:focus{
		color:black;
		text-shadow: 1px 1px 2px rgb(30, 30, 29);
		transform:scale(1.1)
	}
	
</style>
