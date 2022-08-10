<template>
<Navbar />
<div id="MyContainer">
  <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body {
background: rgb(0, 0, 0);
}
#app {
  font-family: 'Cinzel', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body::-webkit-scrollbar {
  width: 12px;           /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: black;       /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background: -webkit-linear-gradient( rgb(227, 227, 112),silver);     /* color of the tracking area */
  border-radius: 20px;       /* roundness of the scroll thumb */
    /* creates padding around scroll thumb */
}
#MyContainer{
  margin:1%;
  padding:1%;
  min-height:100vh;
  overflow: hidden;
  position:relative;
}
</style>
