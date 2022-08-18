<template >

 <button type="button" class="btn btn-success " data-bs-toggle="modal" data-bs-target="#item" style="weight:fit-content;,height:fit-content;border-radius:25px;">
 <label class="fs-1" >+</label>
 
</button>

	<div v-if="products">
	<table class="table border">
		<tr class="bg-dark text-white">
        <th>sku</th>
		<th>image</th>
		<th>Name</th>
		<th>Price</th>
		<th>weight</th>
		<th>descriptions</th>
		<th>thumbnail</th>
		<th>category</th>
		<th>stock</th>
		</tr>
	 <tr v-for="product in products" :key="product.product_id" class="products">
	 <td>{{product.sku}}</td>
	 <td><img :src="product.image" :alt="product.name" style="height:20vh;"></td>
	 <td>{{product.name}}</td>
	 <td>{{product.price}}</td>
	 <td>{{product.weight}}</td>
	 <td>{{product.descriptions}}</td>
	 <td>{{product.thumbnail}}</td>
	 <td>{{product.category}}</td>
	 <td>{{product.stock}}</td>
	 <td><button @click="deleteProduct()">Delete</button></td>
	<td><UpdateModal></UpdateModal></td>
	 </tr>
		
	</table>



	<div v-if="users"></div>
     
	 


 

<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="item" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
	   <form @submit.prevent="Addproduct()">
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
    <button type="submit">Add</button>
    </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> 
	
		
	</div>
</template>
<script>
import UpdateModal from '@/components/UpdateModal.vue'
export default {
    data() {
        return {
            product: {
                sku: "",
                name: "",
                price: "",
                weight: "",
                descriptions: "",
                thumbnail: "",
                image: "",
                category: "",
                create_date: "",
                stock: ""
            }
        };
    },
    mounted() {
        this.$store.dispatch("ShowProducts");
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
		
        methods: {
			    Addproduct(){
            return this.$store.dispatch("AddProduct",this.product)
        },
            deleteProduct(id) {
                return this.$store.dispatch("deleteProduct", id);
            },
            Modal(id) {
                this.modal = true;
            }
        },
    },
    components: { UpdateModal }
}
</script>
<style scoped>
	body{
		color:silver;
	}
</style>