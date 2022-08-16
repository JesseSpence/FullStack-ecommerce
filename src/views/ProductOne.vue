<template>

<div v-if="product"></div>
   
<div class="product-box" v-for="item in product" :key="item.product_id" >
<router-link to="/ProductView"><button><i class="fa-solid fa-arrow-left-long"></i></button></router-link>
<div>
    <img :src="item.image" width="300" :alt="item.name">
</div>
<div class="item">
  <h2>{{item.name}}</h2>
<p>{{item.descriptions}}</p>

<div class="itemdeets">
  <p><span>In Stock = </span>{{item.stock}}</p>
  <p><span>Price = </span> <i class="fa-solid fa-dollar-sign"></i>{{item.price}}</p>
  <p><span>Category = </span>{{item.category}}</p>
  <p><span><i class="fa-solid fa-dumbbell"></i>Weight = </span>{{item.weight}}</p>
</div>
</div>

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
<style scoped>
a{
  position: absolute;
  top:0;
  left:0;
}
.fa-arrow-left-long{
  color: rgb(246, 203, 94, 0.755);
  font-size: 2rem;
}
.fa-arrow-left-long{
  transform: scale(1.1);
}

.fa-arrow-left-long:active, .fa-arrow-left-long:focus {
  color: silver;
}

.product-box{
  color:silver;
  background:rgba(0, 0, 0, 0.141);
  display:flex;
  position: relative;
  padding:5%;
  justify-content: space-around;
}

h2{
  color: rgb(246, 203, 94, 0.755);
  margin-bottom:5%
}

.itemdeets{
display:flex;
flex-wrap:wrap;
justify-content: space-between;
position: absolute;
right: 10%;
bottom:20%;
width: 50vw;

}
span{
  color: rgb(246, 203, 94, 0.755);
}
@media screen and (max-width:1000px) {
  .itemdeets{
    width:40vw;
  }
}
@media screen and (max-width:805px) {
  .itemdeets{
    width:30vw;
  }
}
@media screen and (max-width:629px) {
  img{
    width:200px;
  }
  .itemdeets{
    position: initial;
    margin: 5% 0 0 10%;
  }
}
@media screen and (max-width:475px) {
  img{
    width:150px;
  }
  a{
  top:-2%;
}
  .itemdeets{
    position: initial;
    margin: 5% 0 0 10%;
  }
}
</style>