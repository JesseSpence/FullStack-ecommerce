<template>
	<button  @click="toggleBar"><router-link to="/ProductView"><i class="fa-solid fa-magnifying-glass"></i></router-link></button>
	<div v-if="active" id="searchInput">
		<input  v-model="search" type="text" placeholder="Looking for something..."/>	
	</div>
</template>
<script>

	export default {
		props: [],
		data() {
			return {
				search:"",
				active: false,
			};
		},
		methods: {
			toggleBar() {
				this.active = !this.active;
			},
			hide () {
      this.active = false
    }
		},
	mounted() {
			this.popupItem = this.$el
	},
	computed: {
		filteredProducts() {
				return this.$store.state.products?.filter((product) => {
					let isMatch = true;
					if (!product.name
						.toLowerCase()
						.includes(this.search.toLowerCase()))
						isMatch = false;
					// if (this.category !== "all" && product.category !== this.category) isMatch = false;
					// if (this.company !== "all" && product.company !== this.company) isMatch = false;
					return isMatch;	
				});
			},
	},
	}


</script>
<style scoped>
	input{
		position: fixed;
		top: 2%;
		right:10%;
        width: 350px;
	border-radius: 20px;
		background:rgba(38, 37, 34, 0.812);
		padding:3px;
		z-index: 100;
	}
	a{color:rgba(0, 0, 0, 0.634) }
    .fa-solid{
		font-size:1.5rem;
	}
	button{
		border:none;
		font-size:1.5rem;
		transition: all ease-in-out .2s;
	   margin-right:2% ;
	   color:rgba(0, 0, 0, 0.634) !important;
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
	@media screen and (max-width:696px) {
		input{
			transform: scale(0.7);
			top:8%;
			right:0%
		}
	}
</style>
