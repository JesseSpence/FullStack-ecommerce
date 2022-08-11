<template>
	<nav id="nav" class="navbar">
	<router-link @click="homeText()" to="/"><img id="nav-logo" src="https://i.ibb.co/3SV7mWn/mens-club-suit-removebg-preview.png" alt="mens-club-suit-removebg-preview"></router-link>
		        <ul
					class=""
				>
					
				</ul>
			
				<Searchbar/>

		      <AccountLinks/>
		
		<button><i  title="Your Packages" class="fa-solid fa-gift"></i></button>
		
	</nav>
	
</template>

<script>
import Searchbar from "../components/Searchbar.vue";
import AccountLinks from "../components/AccountLinks.vue";

	export default {
	components: {
    Searchbar,
    AccountLinks,
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
        background: linear-gradient(0deg, rgb(0, 0, 0) 2%, rgba(239, 205, 118, 0.955) 100%);
        height:60px;
		overflow-y: clip;
		z-index: 1000;
		display:flex;
        max-width: 100vw;
	}
	#nav-logo{
		height:200px;
		margin-top:-85px;
        margin-left:-20px;
		filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.516));
	}
	select{
		background:none;
		position: absolute;
		right:6.3%;
	}
ul{
	padding:0 !important;
       overflow: clip;
	margin:0 auto !important;
	display:flex;
	width: 100vw;
   justify-content: center;
}
li{
	margin-right:2%;
}
a, li{
	z-index: 10000;
		text-decoration: none;
		list-style: none;
		transition: all .2s;
		font-size: 1rem;
		font-weight: 900;
		color:rgba(0, 0, 0, 0.634);
	}
	a:hover, li:hover{
		color:black;
		text-shadow: 1px 1px 2px rgb(30, 30, 29);
		transform: scale(1.2);
	}
	a:active, li:active{
		color:black;
		transform:translateZ(20px);
	}
	a:focus, li:focus{
		color:black;
		text-shadow: 1px 1px 2px rgb(30, 30, 29);
		transform:scale(1.1)
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
