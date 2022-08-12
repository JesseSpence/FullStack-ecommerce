<template>
	<h1>Fallout Kings</h1>
	<section>	
	<div v-if="!products" class="loader loader--style3" title="2">
  idk
</div>
		<div v-for="product in products" :key="product.product_id" class="products">
		<h1>{{product.name}}</h1>
		<img :src="product.image" :alt="product.product_id">
		<div></div>
		<button @click="deleteProduct(product.product_id)">DEL</button>
		<p>R {{product.price}}</p>
		</div>	
	
	</section>
</template>
<script>
export default {
	    data(){
        return{
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
		computed:{
			products() {
				return this.$store.state.products;
			
			},
	},
	methods: {
		deleteProduct(id){
			return this.$store.dispatch("deleteProduct",id)
		},
		UpdateProduct(id){
           return this.$store.dispatch("UpdateProduct",this.product,id)
		}
	},
		}
</script>
<style scoped>

section{
	display: flex;
	justify-content: center;
	color:silver;
	flex-wrap:wrap ;
	background-color: none;
}
.products{
	margin:4% 8%;
	border: 2px solid rgba(246, 203, 94, 0.655);
	border-radius: 10px;
	padding:2%;
}
	
</style>