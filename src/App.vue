<template>
<Navbar />
<button @click="changeTheme"><i class="fa-solid fa-egg"></i></button>
<div id="MyContainer">
  <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  data() {
    return {
      dark: false,
      color: "#fffefe",
    }
  },
  components: {
    Navbar,
  },
  methods:{
    changeTheme() {
      let cssVariables = document.querySelector(":root");
      this.dark = !this.dark;
      if (this.dark) {
        cssVariables.style.setProperty("--background-color", " rgb(19, 19, 18)");;
      } else {
        cssVariables.style.setProperty("--background-color", "#561D5E ");
      }
    },
  }
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap');
:root{
  --background-color: rgb(19, 19, 18);
}

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
/* background: rgb(125, 113, 113) */
body {
  overflow-x:clip;
background: var(--background-color);
}
#app {
  transition: all ease-in-out .5s;
  font-family: 'Cinzel', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body::-webkit-scrollbar {
  width: 12px;           /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: var(--background-color);       /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background: -webkit-linear-gradient(rgb(240, 219, 101) 50%, var(--background-color) );     /* color of the tracking area */
  border-radius: 20px;       /* roundness of the scroll thumb */
    /* creates padding around scroll thumb */
}
#MyContainer{
  margin:1%;
  padding:1%;
  height: fit-content ;
  overflow: hidden;
}
button{
  background: none;
  border:none;
  color:rgb(240, 219, 101);
}
</style>
