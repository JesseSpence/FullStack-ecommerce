<!-- <template>
	<div class="signUpPage">
		<form @submit.prevent="signUp">
			<div class="login-box">
			
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

				<button id="signUp" type="submit">Sign Up</button>
				<div class="blank">kerbkerberbkebrk</div>

				<p class="text-light">
					Please<router-link to="/Login"> login</router-link> after signing up
				</p>
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

<style scoped>
	.signUpPage {
		background-color: rgba(0, 0, 0, 0.205);
		display: flex;
		height: 100vh;
	}
	.box {
		position: relative;
		display: flex;
		justify-content: center;
		margin: 10% auto 0;
		width: 50%;
		height: 300px;
		background-color: rgba(0, 0, 0, 0.342);
	}
	.sign {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 700px;
	}
	.blank {
		color: transparent;
	}
	#logo2 {
		background: -webkit-linear-gradient(rgb(5, 202, 156), rgb(184, 14, 184));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		display: flex;
		letter-spacing: 20px;
		justify-content: center;
		border-color: black;
		border-width: 10px;
		font-size: 50px;
		color: white;
		text-shadow: 3px 3px 15px black;
		margin-top: -35px;
	}
	#signUp {
		margin-top: 20px;
		width: 200px;
	}
	#signUp:hover {
		background-color: black;
		color: white;
	}
	.login-box {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 400px;
		padding: 30px;
		transform: translate(-50%, -50%);
		background: rgba(0, 0, 0, 0.5);
		box-sizing: border-box;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6), 2px 1px 4px rgba(0, 0, 0, 0.3),
			2px 4px 3px rgba(134, 6, 167, 0.881), 0 0 7px 2px rgba(40, 4, 65, 0.6),
			inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 2px 1px 4px rgba(0, 0, 0, 0.3),
			inset 2px 4px 3px rgb(79, 16, 92), inset 0 0 7px 2px rgb(175, 12, 180);
		animation: flickering 5s infinite;
		border-radius: 10px;
		margin-top: 3%;
	}

	.login-box h2 {
		margin: 0 0 30px;
		padding: 0;
		color: #fff;
		text-align: center;
	}

	.login-box .user-box {
		position: relative;
	}

	.login-box .user-box input {
		width: 100%;
		padding: 10px 0;
		font-size: 16px;
		color: #fff;
		margin-bottom: 30px;
		border: none;
		border-bottom: 1px solid #fff;
		outline: none;
		background: transparent;
	}
	.login-box .user-box label {
		position: absolute;
		top: 0;
		left: 0;
		padding: 10px 0;
		font-size: 14px;
		color: #fff;
		pointer-events: none;
		transition: 0.5s;
	}

	.login-box .user-box input:focus ~ label,
	.login-box .user-box input:valid ~ label {
		top: -20px;
		left: 0;
		color: #03e9f4;
		font-size: 17px;
	}

	.login-box form button {
		position: relative;
		display: inline-block;
		padding: 10px 20px;
		color: #03e9f4;
		font-size: 16px;
		text-decoration: none;
		text-transform: uppercase;
		overflow: hidden;
		transition: 0.5s;
		margin-top: 40px;
		letter-spacing: 4px;
	}

	.login-box a:hover {
		background: #03e9f4;
		color: #fff;
		border-radius: 5px;
		box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
			0 0 100px #03e9f4;
		transition: 5s;
	}

	.login-box a span {
		position: absolute;
		display: block;
	}

	.login-box a span:nth-child(1) {
		top: 0;
		left: -100%;
		width: 100%;
		height: 2px;
		background: linear-gradient(90deg, transparent, #03e9f4);
		animation: btn-anim1 1s linear infinite;
	}

	@keyframes btn-anim1 {
		0% {
			left: -100%;
		}
		50%,
		100% {
			left: 100%;
		}
	}
	@keyframes flickering {
		0% {
			border-color: transparent;
			opacity: 0.2;
		}

		2% {
			border-color: #8c00ff;
			opacity: 1;
		}

		4% {
			border-color: transparent;
			opacity: 0.2;
		}

		8% {
			border-color: #8c00ff;
			opacity: 1;
		}

		28% {
			border-color: #8c00ff;
			opacity: 1;
		}

		30% {
			border-color: transparent;
			opacity: 0.2;
		}

		36% {
			border-color: #8c00ff;
			opacity: 1;
		}

		100% {
			border-color: #8c00ff;
			opacity: 1;
		}
	}
	.login-box a span:nth-child(2) {
		top: -100%;
		right: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(180deg, transparent, #03e9f4);
		animation: btn-anim2 1s linear infinite;
		animation-delay: 0.25s;
	}

	@keyframes btn-anim2 {
		0% {
			top: -100%;
		}
		50%,
		100% {
			top: 100%;
		}
	}

	.login-box a span:nth-child(3) {
		bottom: 0;
		right: -100%;
		width: 100%;
		height: 2px;
		background: linear-gradient(270deg, transparent, #03e9f4);
		animation: btn-anim3 1s linear infinite;
		animation-delay: 0.5s;
	}

	@keyframes btn-anim3 {
		0% {
			right: -100%;
		}
		50%,
		100% {
			right: 100%;
		}
	}

	.login-box a span:nth-child(4) {
		bottom: -100%;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(360deg, transparent, #03e9f4);
		animation: btn-anim4 1s linear infinite;
		animation-delay: 0.75s;
	}

	@keyframes btn-anim4 {
		0% {
			bottom: -100%;
		}
		50%,
		100% {
			bottom: 100%;
		}
	}
	@keyframes animate {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 400% 0;
		}
		100% {
			background-position: 0 0;
		}
	}
	.glow::after {
		filter: blur(80px);
	}
	#newperson {
		margin-top: 10px;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		display: flex;
		justify-content: center;
		border-color: black;
		border-width: 10px;
		font-size: 30px;
		color: white;
		text-shadow: 3px 3px 15px black;
	}
</style> -->



<template >
 <form @submit.prevent="signUp()">
	 <div>
		<input type="email" name="email" id="email" v-model="email" placeholder="email">
		{{email}}
		<input type="text" name="password" id="password" v-model="password" placeholder="password">
		{{password}}
		<input type="text" name="Full_Name" id="Full_Name" v-model="full_name" placeholder="Full Name">
	      {{full_name}}
    	<input type="text" name="country" id="country" v-model="country" placeholder="Country">
		{{country}}
		<input type="number" name="phone" id="phone" v-model="phone" placeholder="Phone">
		{{phone}}
	 </div>
	 <button type="submit">Register</button>
   
 </form>
</template>
<script>
export default {
	data(){
		return {
			data:{
				email:"",
				password:"",
				full_name:"",
				country:"",
				phone:"",
				user_type:"user"
			}
		}
	},
	methods:{
		signUp(){
			this.$store.dispatch("signUp", {
				email:this.email,
				password:this.password,
				full_name:this.full_name,
				country:this.country,
				phone:this.phone,
				user_type:this.user_type
			});
		},
	},
};
</script>
<style scoped>

div{
	display: flex;
	flex-direction: column;
}
input{
	width: 10vw;
	margin:auto;
}
</style>