<template>
	<div class="signUpPage">
		<form @submit.prevent="signUp">
			<div class="sign">
			
				<div class="user-box">
					<input type="text" v-model="full_name" />
					<label>Full Name</label>
				</div>
				<div class="user-box">
					<input type="text" v-model="email" />
					<label>Email</label>
				</div>
				<div class="user-box">
					<input type="text" v-model="password" />
					<label>Password</label>
				</div>

				<button id="signup" type="submit">Sign Up</button>

				<div class="signup-box">
					Please<router-link to="/Login"> login</router-link> after signing up
				</div>
				<router-link to="/Login">Already a member, Log in</router-link>
				<div id="newperson" v-if="user">
					{{ user.full_name }}
				</div>
			</div>
		</form>
	</div>
</template>

<!-- <script>

	export default {
		data() {
			return {
				email: "",
				password: "",
				role: "",
				full_name: "",
			};
		},
		computed: {
			user() {
				return this.$store.state.user;
			},
		},
		methods: {
			signUp() {
				return this.$store.dispatch("signUp", {
					full_name: this.full_name,
					email: this.email,
					password: this.password,
					role: this.role,
				});
			},
		},
	};
</script>
-->
<style scoped>
.signUpPage{
	border-radius: 20px;
border:solid 1px rgba(246, 203, 94, 0.755);
height:fit-content;
width:60vw;
margin:5% auto;
padding:.5%;
	}
	.sign{
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
	span{font-size: 1rem;color:rgba(246, 203, 94, 0.755)}
input{background-color:silver}

	#signup{
		transition:all ease-in-out .5s;
	background:rgba(246, 203, 94, 0.755);
	padding:1%;
  color:silver;
	background:rgb(0, 0, 0);
	font-size: 1.2rem;
  font-family: 'Cinzel', serif;
	border:solid 2px rgba(246, 203, 94, 0.755);
	border-radius: 20px;
	margin:1% 0 1.5% 0;
}
#signup:hover{
	color:black;
  background:rgba(246, 203, 94, 0.755);
}
#signup:active{
	font-size: small;
}

</style>
