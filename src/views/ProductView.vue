<template>
	<h1>This Months Selected products . . . </h1>
	<section>	
	<div v-if="!products" class="loader loader--style3" title="2">
 <img src="https://i.ibb.co/xC5pby0/giphy-5.gif">
</div>
		<Product v-for="product in products" :key="product.product_id" class="products" :product="product">
		
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
h1{color:rgb(246, 203, 94, 0.655)}
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