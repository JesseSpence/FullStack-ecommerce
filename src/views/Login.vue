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
 -->
<style scoped>
	
	</style>

