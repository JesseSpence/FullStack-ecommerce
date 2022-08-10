<template>
	<button @click="toggleBar"><i class="fa-solid fa-magnifying-glass"></i></button>
	<div v-if="active" id="searchInput">
		<input v-model="search" type="text" placeholder="Looking for something..."/>	
	</div>
</template>
<script>
	export default {
		props: [],
		data() {
			return {
				active: false,
			};
		},
		methods: {
			toggleBar() {
				this.active = !this.active;
			},
		},
		mounted() {
		},
	};
</script>
<style scoped>
	#searchInput{
		position: fixed;
		top: 13.5%;
		left: 50%;
        width: 350px;
        transition: transform 4000ms ease-in-out;
		transform: translate(-50%, -50%);
		background:rgba(246, 203, 94, 0.755);
		padding: 30px;
		border: 5px solid black;
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
