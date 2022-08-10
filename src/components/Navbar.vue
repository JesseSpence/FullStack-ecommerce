<template>
	<nav id="nav" class="navbar">
		        <ul
					class=""
				>
					<li class="nav-item">
						<router-link class="nav-link active" to="/">HOME</router-link>
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
				<Searchbar/>
		<button><i  class="fa-solid fa-user-tie"></i></button>
		<button><i  title="Your Packages" class="fa-solid fa-gift"></i></button>
	</nav>
</template>

<script>
import Searchbar from "../components/Searchbar.vue";
	export default {
	components: {
    Searchbar,
    
},
	};
</script>

<style scoped>

	/*Navbar*/
	.navbar {
		padding:1%;
		background: rgba(246, 203, 94, 0.955) 100%;
        background: linear-gradient(0deg, rgb(0, 0, 0) 2%, rgba(239, 205, 118, 0.955) 100%);
        height:fit-content;
		z-index: 1000;
		display:flex;
        max-width: 100vw;
	}
ul{
	padding:0 !important;
       overflow: clip;
	margin:0 !important;
	display:flex;
	width: 100vw;
   justify-content: center;
}
li{
	margin-right:2%;
}
a, li{
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
