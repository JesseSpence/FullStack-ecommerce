<template >
    <div v-if="order">
    <div v-for="product in order" :key="product.product_id">
    <div class="card">
        <h1>{{product.name}}</h1>
        <img :src="product.image" :alt="product.name">

    </div>

    </div>

        
    </div>
</template>
<script>
export default {
    mounted(){
        this.$store.dispatch("getPackages")
    },
    computed:{
        order(){
            return this.$store.state.order
        }
    }
}
</script>

<style lang="">
    
</style>