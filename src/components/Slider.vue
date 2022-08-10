<template>
<div class="outer"> 
  <div class="Slider">
<slot></slot>
  </div>
  <button @click="nex" class="nex"><i class="fa-solid fa-caret-right"></i></button>

<button @click="prev" class="prev"><i class="fa-solid fa-caret-left"></i></button>
</div>
</template>

<script>

export default {
    data() {

    },
    methods: {
        nex() {
        this.$emit('nex')
        },
     prev() {
        this.$emit('prev')
    }
}
}

</script>
<style scoped>
.Carousel{
    width: 400px;
    height:600px;
    overflow:hidden;
}
.outer{
position:relative;
display: flex;
justify-content: center;
width: 100vw;
height: 100vh;
}
button {
    position: absolute;
    top: calc(50% + 20px);
    height: 40px;
    width: 50px;
    background-color:var(--el-color);
    color:var(--text-color);
    border:none;
}
button:focus, button:hover {
    outline:none;
    cursor:pointer;
}
.nex {
    right:2%
}
.prev {
    left:2%
}
</style>