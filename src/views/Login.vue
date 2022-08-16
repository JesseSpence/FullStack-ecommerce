<template>
	<div class="loginPage">
		<form @submit.prevent="login">
			<div class="log">
					
					<div class="user-box">
						<label>Email</label>
						<input type="text" v-model="email" />
					</div>
					<div class="user-box">
						<label>Password</label>
						<input type="text" v-model="password" />
					</div>
					<button id="login" type="submit">Login</button>
					<div v-if="token">
					<button @click="Verify()">
                     Browse
					</button>
					
					</div>

				<div class="login-box">
					<router-link to="/signUp"><span>
						Don't have an account ? </span> Sign up</router-link>
<div v-if="user" id="person" >

<h1>
	Welcome {{ user.full_name }}
</h1>


</div>
					
				</div>
			</div>
		</form>
	</div>
</template>
<script>
export default {
	mounted() {
			this.$store.dispatch("GetUser")
		},
	computed: {
			token() {
				return this.$store.state.token
			},
			user() {
				return this.$store.state.user;
			},
	},
		
		data() {
			return {
				
				email: "",
				password: "",
			};
		},
		methods: {
			login() {
				console.log("Hello");
				this.$store.dispatch("login", {
					email: this.email,
					password: this.password,
				});
				console.log("bro");
				if (this.$store.state.token) {
					this.$store.dispatch("verify", this.token)
				}
			},
			Verify() {
				this.$store.dispatch("verify",this.token)
			}
		},
	};
</script>
<style scoped>
	.loginPage{
	border-radius: 20px;
border:solid 1px rgba(246, 203, 94, 0.755);
height:fit-content;
width:60vw;
margin:5% auto;
padding:.5%;
	}
	.log{
		color:silver;
		background:var(--background-color);
		outline: 1px rgba(192, 192, 192, 0.197) solid;
		padding:1%;
	border-radius: 20px;
	}
	.user-box{
		display: flex;
		margin: 2%;
		flex-direction:column ;
	}
	a{text-decoration: none; color:rgba(246, 203, 94, 0.755)}
	span{font-size: .8rem;color:rgba(246, 203, 94, 0.755)}
input{background-color:silver}

	#login{
		transition:all ease-in-out .5s;
	background:rgba(246, 203, 94, 0.755);
	padding:1%;
  color:black;
	font-size: 1.2rem;
  font-family: 'Cinzel', serif;
	border-radius: 20px;
	margin:1% 0 1.5% 0;
}
#login:hover{
	color:silver;
	border:solid 2px rgba(246, 203, 94, 0.755);
  background:var(--background-color);
}
#login:active{
	font-size: small;
}

	</style>

