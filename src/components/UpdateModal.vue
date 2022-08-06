<template>
	<button @click="toggleModal">Edit</button>
	<div v-if="active" class="mod">
		<form>
			<div>TITLE</div>
			<input type="text" v-model="product.title" />
			<div>CATEGORY</div>
			<input type="text" v-model="product.category" />
			<div>COMPANY</div>
			<input type="text" v-model="product.company" />
			<div>PRICE</div>
			<input type="text" v-model="product.price" />
		</form>
	</div>
</template>
<script>
	export default {
		props: ["product"],
		data() {
			return {
				active: false,
			};
		},
		methods: {
			toggleModal() {
				this.active = !this.active;
			},
		},
		mounted() {
			console.log(this.product);
		},
	};
</script>
<style scoped>
	.mod {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		padding: 30px;
		border: 5px solid black;
		z-index: 100;
	}
</style>
