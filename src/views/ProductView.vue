<template>
	<section style="background-color:whitesmoke;width:90vw;">	
	<h1>Fallout Kings</h1>
	<div v-if="products"></div>
		<Product v-for="product in products" :key="product.product_id" :product="product" class="products">
		</Product>	
	
	</section>




</template>
<script>
import UpdateModal from '@/components/UpdateModal.vue';

import Product from '@/components/Product.vue';
export default {
		components:{
    UpdateModal,
    Product
},
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
    
            },
			modal:false
        }
    },
	
	mounted(){
		this.$store.dispatch("ShowProducts");

		
		},
		computed:{
			products(){
             return this.$store.state.products
			
			},
	},

	
    }
			
	</script>
	<style scoped>
	section{
		padding-top:15vh;
	}

		
	</style>


