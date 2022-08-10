<template>
	<section style="background-color:whitesmoke;width:90vw;">	
	<h1>Fallout Kings</h1>
	<div v-if="products"></div>
		<div v-for="product in products" :key="product.product_id" class="products">
		<h1>{{product.name}}</h1>
		<img :src="product.image" :alt="product.product_id">
		<button @click="deleteProduct(product.product_id)">DEL</button>
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
			products(){
             return this.$store.state.products;
			console.log(products);
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
	padding-top:15vh;
}

	
</style>


