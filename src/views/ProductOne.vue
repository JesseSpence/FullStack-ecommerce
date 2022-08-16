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
<button @click="AddToOrder(item)">
  Add to Package
</button>

    
</template>
<script>

export default {
     props:["product_id"],  
    mounted(){
        this.$store.dispatch("getProduct",this.$route.params.id);
        
    },
    computed:{
        product(){
          return  this.$store.state.product
        }
    },
    methods:{
      AddToOrder(product){
        this.$store.commit("AddOrder",product)
      }
    }
        	
}

</script>
<style lang="">
    
</style>