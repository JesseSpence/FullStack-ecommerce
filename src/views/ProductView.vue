<template>
	<h1>This Months Selected products . . . </h1>
	<div class="filters">
		<input  v-model="search" type="text" placeholder="Looking for something..."/>
		<button class="btn p-1" @click="sortPrices">Sort</button>
	</div>
	<section>	
	<div v-if="!products" class="loader loader--style3" title="2">
 <div class="loader loader--style2" title="1">
  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
  <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
    <animateTransform attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 25 25"
      to="360 25 25"
      dur="0.6s"
      repeatCount="indefinite"/>
    </path>
  </svg>
</div>
</div>
		<Product v-for="product of filteredProducts" :key="product.product_id" class="products" :product="product">
		
		</Product>	
	
	</section>
</template>
<script>
import Product from '@/components/Product.vue';
export default {
	components:{
    Product
},
	    data(){
			return {
			search:"",
            product:{
             sku:"",
             name:"",
             price: "",
             weight:"",
             descriptions:"",
             thumbnail:"",
             image:"",
             category:"",
             create_date:"",  
             stock:""
    
            }
        }
    },
	
	mounted(){
		this.$store.dispatch("ShowProducts");
		
		},
	computed: {
		products() {
			return this.$store.state.products;
		},
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
	methods: {
		deleteProduct(id){
			return this.$store.dispatch("deleteProduct",id)
		},
		UpdateProduct(id){
           return this.$store.dispatch("UpdateProduct",this.product,id)
		},
		sortPrices() {
				this.$store.commit("sortProductsByPrice");
			},
	},
		}
</script>
<style scoped>
h1{color:rgb(246, 203, 94, 0.655)}
section{
	display: flex;
	justify-content: center;
	color:silver;
	flex-wrap:wrap ;
	background-color: none;
}
.filters{
	display:flex;
	margin-bottom: 5%;
	flex-direction: column;
}

.products{
	margin:4% 8%;
	border: 2px solid rgba(246, 203, 94, 0.655);
	border-radius: 10px;
	width:30vw;
	max-height:75vh;
	min-height:65vh;
	background-color: rgba(0, 0, 0, 0.334);
	box-shadow: 0px 10px 13px -7px #34390b, 5px 5px 15px 5px rgba(0, 0, 0, 0);
	padding:2%;
	position: relative;
}
	input{
		 width: 350px;
	border-radius: 20px;
	margin:3% auto;
		background:rgba(49, 48, 48, 0.421);
		padding:3px;
		z-index: 100
	}
	svg path,
svg rect{
  fill: rgba(246, 203, 94, 0.655);
}
	@media screen and (max-width:370px) {
  input{
    width:290px;
  }
}

</style>