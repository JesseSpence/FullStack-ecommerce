<template >
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

    methods:{
        Addproduct(){
            return this.$store.dispatch("AddProduct",this.product)
        },
    }
}
</script>
<style>
input{
    width: 80vw;
    padding: 1%;
    border-radius: 10px;
    
}
    
</style>