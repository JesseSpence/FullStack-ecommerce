<template >
    <div v-if="order">

    <div v-for="(item,index) in order" :key="index">

    <div class="card">
        <h1>{{item.name}}</h1>
        <img :src="item.image" :alt="item.name">
        <button @click="deleteOrder">delete</button>

    </div>
    </div>

    </div>

        
  <button @click="Clear">Clean</button>
</template>
<script>
export default {
    mounted(){
        this.$store.dispatch("getPackage");
        this.$store.dispatch("ShowProducts")
    },
    computed:{
        order(){
            return this.$store.state.order
        },
        numberoforder(){
            return this.order.length
        },
        total(){
            return this.order.reduce((acc,cur)=> acc + cur.price, 0)
        },
        
     products(){
        return this.$store.state.products
     }

    },
 
   
    methods:{
        Clear(){
            this.$store.dispatch("checkout")
        },
        deleteOrder(item){
         this.$store.commit('deleteInOrder',item)
        }
    }
}
</script>

<style lang="">
    
</style>