<template>
     <div id="box">

<img id= "plant" src="https://i.ibb.co/vz20HJf/5277509-removebg-preview.png"> 
		
<img id="watch"
     src="https://i.ibb.co/SKmV0FQ/gold-roly-removebg-preview.png">
  
  <img id= "man" src="https://i.ibb.co/3f3Xz3s/grigore-ricky-TVUUz6b-MFSQ-unsplash-removebg-preview.png">
    
</div>    

</template>

<style>

#man{
  position:absolute;
	right:0;
	top:100px;
  filter: drop-shadow(5px 2px 1px rgba(0, 0, 0, 0.458));
  transition: all ease-in-out .5s;
}
#man:hover{
  transform: scale(1.1) translateY(-20px) rotate(3deg);
}
#watch{
  position:absolute;
  height:350px;
  transition: all ease-in-out 1s;
  filter: drop-shadow(10px 2px 10px rgba(0, 0, 0, 0.7));
  transform:rotate(250deg);
  right:-3%;
  top:370px;
}

#plant{
  position:absolute;
 height:800px;
 top:-10%;
 right:-8%;  padding:1%;
  filter: drop-shadow(5px 0 0 rgba(0, 0, 0, 0.7));
}
#box{
  z-index: -1;
}
@media screen and (max-width:951px) {
    #plant{
        display:none;
    }
}
@media screen and (max-width:662px) {
    #box{
        display:none;
    }
}
</style>