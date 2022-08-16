<template>
	<div class="signUpPage">
		<form method="POST" @submit="userSignup">
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
				<div class="user-box">
					<input type="text" v-model="country" />
					<label>Country</label>
				</div>
				<div class="user-box">
					<label>contact number</label>
					<input type="text" v-model="phone" />
				</div>
				<div class="user-box">
					<label> user type</label>
					<select v-model="user_type"  name="user type" id="">
						<option value="user"> Customer </option>
					</select>
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

<script>

	export default {
		data() {
			return {
				full_name: null,
				email: null,
				password: null,
				country:null,
				phone: null,
				user_type: null,
			};
		},
		// computed: {
		// 	user() {
		// 		return this.$store.state.user;
		// 	},
		// },
		methods:{
    userSignup(event){
      event.preventDefault();
      const user = {
        full_name: this.full_name,
        country: this.country,
        phone: this.phone,
        email:this.email,
		  password: this.password,
		user_type: this.user_type
      }
      this.$store.dispatch('userSignup',user);
    }
  }
}
</script>

<style scoped>
.signUpPage{
	border-radius: 20px;
border:solid 1px rgba(246, 203, 94, 0.755);
height:fit-content;
width:60vw;
margin:5% auto;
padding:.5%;
	}
	select{
		background: none;
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
  color:black;
	font-size: 1.2rem;
  font-family: 'Cinzel', serif;
	border-radius: 20px;
	margin:1% 0 1.5% 0;
}
#signup:hover{
	color:silver !important;
	border:solid 2px rgba(246, 203, 94, 0.755);
  background:var(--background-color);
}
#signup:active{
	font-size: small;
}

</style>
