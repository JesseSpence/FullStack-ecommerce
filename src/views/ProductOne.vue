<template>
<router-link to="/ProductView"><button>Backx``</button></router-link>
<div v-if="product"></div>
   
<div v-for="item in product" :key="item.product_id" >

<h2>{{item.name}}</h2>
<div>
    <img :src="item.image" :alt="item.name">
</div>
<p>{{item.descriptions}}</p>
</div>
 <div v-if="user">
<button @click="deleteProduct(product.product_id)">DEL</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#item">
 Update
</button>
</div>

<!-- Button trigger modal -->


<!-- Modal -->
<!-- <div class="modal fade" id="item" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
	    <form @submit.prevent="Updateproduct()">
     <input type="text" name="Product_name" id="name" v-model="product.sku" placeholder="sku">
    {{product.sku}}
     <input type="text" name="Product_name" id="name" v-model="product.weight" placeholder="weight">
    {{product.weight}}
     <input type="text" name="Product_name" id="name" v-model="product.descriptions" placeholder="descriptions">
    {{product.descriptions}}
    <input type="text" name="Product_name" id="name" v-model="product.name" placeholder="name">
    {{product.name}}
       <input type="text" name="Product_name" id="name" v-model="product.thumbnail" placeholder="thumbnail">
    {{product.thumbnail}}
    <input type="text" name="Product_price" id="price" v-model="product.price" placeholder="price">
    {{product.price}}
        <input type="text" name="Product_price" id="price" v-model="product.create_date"  placeholder="create_date">
    {{product.create_date}}
    <input type="text" name="Product_image" id="image" v-model="product.image" placeholder="image_Url">
    {{product.image}}
      <input type="text" name="Product_image" id="image" v-model="product.stock" placeholder="stock">
    {{product.stock}}
   <input type="text" name="Product_category" id="category" v-model="product.category" placeholder="category">
    {{product.category}}
    <button type="submit">Update</button>
    </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->

    
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
    },	methods: {
		deleteProduct(id){
				return this.$store.dispatch("deleteProduct",id)
			},
			Modal(id){
				this.modal=true;
			}
		},
        	
}
</script>
<style lang="">
    
</style>