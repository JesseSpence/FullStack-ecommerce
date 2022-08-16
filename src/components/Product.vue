<template>
<router-link :to="{name:'ProductOne', params:{id:product.product_id}}" product="product" >
    <div>
      <h1>{{product.name}}</h1>
      <img width="300" height="250" :src="product.image" :alt="product.product_id">
      <p>{{product.descriptions}}</p>
      <div class="productdetails">
<h4><span><i class="fa-solid fa-dollar-sign"></i></span> {{product.price}}</h4> 
<p>count = <span>{{product.stock}}</span></p> 
</div>
        
     </div>
  </router-link>
    
</template>
<script>
export default {
  props:['product'],
  
}
</script>
<style scoped>
  a{
    text-decoration: none; 
    color:silver
    }
   span{
        color:rgb(246, 203, 94, 0.655) ;
    }
    .productdetails{
        display:flex;
        width: 26vw;
        margin:5% 0 5% 0;
        position: absolute;
        bottom:0;
        justify-content: space-between;
    }
</style>
<!-- <h1>{{product.name}}</h1>
		<img :src="product.image" :alt="product.product_id">
		<div></div>
		<button @click="deleteProduct(product.product_id)">DEL</button>
		<p>R {{product.price}}</p> -->