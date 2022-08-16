<template>
<button @click="toggleCart"><i  title="Your Packages" class="fa-solid fa-gift"></i></button>
  <div v-if="cartActive" class="cart">
    <div class="cartbox">
<h4>Your Package :</h4> 
    </div>
  </div>
</template>

<script>
export default {
		props: [],
		data() {
			return {
				cartActive: false,
			};
    },
    methods: {
        toggleCart() {
            this.cartActive = !this.cartActive;
        },
    }
		}
</script>

<style scoped>
a{color:black}
    .fa-solid{
		font-size:1.5rem;
	}
.cart{
    position: fixed;
    z-index: 10000;
    top:8%;
    right:0;
    width:40vw;
    height:80vh;
    display:flex;
    justify-content: center;
    background-color:rgba(246, 203, 94, 0.755);
}
.cartbox{
    align-self: center;
    background-color:var(--background-color);
    width:40vw;
    border-left: solid 2px rgba(246, 203, 94, 0.755);
    height:70vh;

}
h4{margin: 2% 0 2% 0;
color:silver;
border-bottom: 2px solid rgba(246, 203, 94, 0.755)}
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
</style>