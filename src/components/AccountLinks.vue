<template>
	<button @click="toggleMenu"><i  class="fa-solid fa-user-tie"></i></button>
	<div v-if="linksactive" id="account-links">
		<li class="nav-item">
						<router-link @click="toggleMenu" to="/Login">LOGIN</router-link>
					</li>
					<li>
						<router-link @click="toggleMenu" to="/signUp">SIGNUP</router-link>
					</li>
                    <!-- <li>
						<router-link @click="toggleMenu" to="/Contact">CONTACT</router-link>
					</li>
					<li>
						<router-link @click="toggleMenu" to="/Admin"
							>ADMIN</router-link
						>
					</li> -->
	</div>
</template>
<script>
	export default {
		props: [],
		data() {
			return {
				linksactive: false,
			};
		},
		methods: {
			toggleMenu() {
				this.linksactive = !this.linksactive;
			},
		},
		mounted() {
		},
	};
</script>
<style scoped>
li{
    list-style: none;
    text-decoration: none !important;
}
a{
    color:rgba(0, 0, 0, 0.634);
    font-size: small;
}
	#account-links{
       display: flex;
       flex-direction: column;
		position: fixed;
		top: 7%;
		right:4%;
       padding:.7% .5% .7% .5%;
        height: fit-content;
        width:fit-content;
		background:rgba(246, 203, 94, 0.755);
		border: 1px solid silver;
		z-index: 100;
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
	button:hover, a:hover{
		color:black;
		text-shadow: 1px 1px 2px rgb(30, 30, 29);
		transform: scale(1.2);
	}
	button:active, a:hover{
		color:black;
		transform:translateZ(20px);
	}
	button:focus, a:hover{
		color:black;
		text-shadow: 1px 1px 2px rgb(30, 30, 29);
		transform:scale(1.1)
	}
</style>