<template>
<router-link to="/ProductView"><button>Back</button></router-link>
<div v-if="product"></div>
   
<div v-for="item in product" :key="item.product_id" >

<h2>{{item.name}}</h2>
<div>
    <img :src="item.image" :alt="item.name">
</div>
<p>{{item.descriptions}}</p>
</div>

    
</template>
<script>

export default {
     props:["product_id"],
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
			active:false
        }
            },
   
    mounted(){
        this.$store.dispatch("getProduct",this.$route.params.id);
        
    },

    computed:{
        product(){
          return  this.$store.state.product
        }
    }
        	
}

</script>
<style lang="">
    
</style>