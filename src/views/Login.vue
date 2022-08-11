<template>
	<div class="loginPage">
		<form @submit.prevent="login">
			<div class="log">
				<div class="login-box">
					
					<div class="user-box">
						<input type="text" v-model="email" />
						<label>Email</label>
					</div>
					<div class="user-box">
						<input type="text" v-model="password" />
						<label>Password</label>
					</div>
					<button id="login" type="submit">Login</button>
					<div class="blank">kerbkerberbkebrk</div>

					<router-link to="/signUp">Don't have an account, Sign up</router-link>
<div id="person" v-if="user">Welcome {{ user.full_name }}</div>
					
				</div>
			</div>
		</form>
	</div>
</template>
<!-- <script>
	export default {
		computed: {
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
			},
		},
	};
</script>

<style scoped>
	body {
		background-color: rgb(0, 0, 0);
		background-image: radial-gradient(
				at 75% 27%,
				rgb(12, 74, 110) 0,
				transparent 18%
			),
			radial-gradient(at 50% 71%, rgb(88, 28, 135) 0, transparent 19%);
	}
	.loginPage {
		background-color: rgba(0, 0, 0, 0.205);
		display: flex;
		height: 100vh;
	}
	.log {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 700px;
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
	#login {
		margin-top: 20px;
		width: 200px;
	}
	.blank {
		color: transparent;
	}
	#login:hover {
		background-color: black;
		color: white;
	}
	.login-box {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 400px;
		padding: 40px;
		transform: translate(-50%, -50%);
		background: rgba(0, 0, 0, 0.06);
		box-sizing: border-box;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6), 2px 1px 4px rgba(0, 0, 0, 0.3),
			2px 4px 3px rgba(134, 6, 167, 0.881), 0 0 7px 2px rgba(40, 4, 65, 0.6),
			inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 2px 1px 4px rgba(0, 0, 0, 0.3),
			inset 2px 4px 3px rgb(79, 16, 92), inset 0 0 7px 2px rgb(175, 12, 180);
		animation: flickering 5s infinite;
		border-radius: 12px;
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
		font-size: 25px;
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
	#person {
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
