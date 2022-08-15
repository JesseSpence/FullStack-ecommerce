<!-- <template>
	<button @click="toggleModal">Edit</button>
	<div v-if="active" class="mod">
		<form>
			<div>TITLE</div>
			<input type="text" v-model="product.title" />
			<div>CATEGORY</div>
			<input type="text" v-model="product.category" />
			<div>COMPANY</div>
			<input type="text" v-model="product.company" />
			<div>PRICE</div>
			<input type="text" v-model="product.price" />
		</form>
	</div>
</template>
<script>
	export default {
		props: ["product"],
		data() {
			return {
				active: false,
			};
		},
		methods: {
			toggleModal() {
				this.active = !this.active;
			},
		},
		mounted() {
			console.log(this.product);
		},
	};
</script>
<style scoped>
	.mod {
	
	}
</style> -->


<template >
<button @click="ToggleMav(product.product_id)">Update</button>
<div v-if="active" class="modal">
	    <form @submit.prevent="Updateproduct(product.product_id)">
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
</template>
<script>
export default {
	props:[ 'product'],
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
    },methods: {
		UpdateProduct(id){
			return this.$store.dispatch("Updateproduct",this.product,id)
		},
		ToggleMav(){
          this.active = !this.active
		}
	},
	
}
</script>
<style >
	/* .modal{
     	

	} */
</style>