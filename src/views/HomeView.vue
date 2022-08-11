<template>
<section id="home">
	
<div class="middle">
	<div class="home-text">
  <div class="container">
  <h2>Gentlemen's Club</h2>
  <div class="mask"><div><div><h2>Gentlemen's Club</h2></div></div></div>
</div>
   </div>
    <div
          class="txt-rotate"
          data-period="2000"
          data-rotate='[ "Class", "Business", "and Pleasure"]'></div>
		  <div class="shopbox">
			<router-link class="shop" to="/ProductView">Browse</router-link>
		  
		  </div>
 </div>

 <div id="box">

<img id= "plant" src="https://i.ibb.co/vz20HJf/5277509-removebg-preview.png"> 
		
<img id="watch"
     src="https://i.ibb.co/SKmV0FQ/gold-roly-removebg-preview.png">
  
  <img id= "man" src="https://i.ibb.co/3f3Xz3s/grigore-ricky-TVUUz6b-MFSQ-unsplash-removebg-preview.png">
    
</div>

 
 </section>
<div id="productbody">
	<div class="products" v-for="product in products" :key="product.id"
				:property="product" > 
				
	<img width="200"
	height="200"
	 :src="product.image"/>
	<h5>{{ product.title }}</h5>
<p>{{ product.brand }}</p>
	
	</div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          "id": "1",
          "category": "Suits",
          "title": "SUPER-FLEX",
          "image": "https://i.ibb.co/1nCBDGM/purple-suite.png",
          "price": "7 100",
          "description": "REGULAR-FIT SUIT IN SUPER-FLEX WOOL-BLEND CLOTH",
          "brand": "Hugoboss"
        },
        {
          "id": "2",
          "category": "Suits",
          "title": " Bogart exclusive",
          "image": "https://i.ibb.co/rws0xz1/black-taylored-suit.png",
          "price": "5 900",
          "description": "Bogart Man Exclusive Premium Suit",
          "brand": "Bogart"
        },
        {
          "id": "3",
          "category": "Suits",
          "title": "Signoria Suit",
          "image": "https://i.ibb.co/9s33vbG/light-brown-talored-suit.png",
          "price": "19 458",
          "description": "Gucci Men's 2 Button 1 Vent Wool Signoria Suit Gray",
          "brand": "Gucci"
        },
        {
          "id": "4",
          "category": "Suit",
          "title": "Sicilia-fit",
          "image": "https://i.ibb.co/TqTmfDk/green-taylored-suit.png",
          "price": "42 300",
          "description": "Dolce & Gabbana Sicilia-fit leopard-print tuxedo suit",
          "brand": "Dolce & Gabbana"
        },
        {
          "id": "5",
          "category": "Watch",
          "title": "Rolex Daytona",
          "image": "https://i.ibb.co/bKp5D9v/red-russian-suite.png",
          "price": "925 000",
          "description": "Rolex Daytona Chronograph Automatic Chronometer Diamond Black Dial Unisex Watch",
          "brand": "Rolex"
        },
        {
          "id": "6",
          "category": "Watch",
          "title": "GMT-Master",
          "image": "https://i.ibb.co/rws0xz1/black-taylored-suit.png",
          "price": "1 626 033",
          "description": "customised Rolex GMT-Master II 50th Anniversary Batman 40m",
          "brand": "Rolex"
        },
        {
          "id": "7",
          "category": "drink",
          "title": "Dom Perignon Vintage",
          "image": "https://i.ibb.co/XkTs816/white-suite.png",
          "price": "27 598",
          "description": "Dom Perignon Vintage cured by the hand of angels",
          "brand": "Wine"
        },
        {
          "id": "8",
          "category": "drink",
          "title": "Mouton Rothschild, Pauillac",
          "image": "https://i.ibb.co/X7mcFC4/light-grey-taylored-suit.png",
          "price": "44 950",
          "description": "Mouton Rothschild, Pauillac cured by the demons of hell",
          "brand": "Wine"
        },
        {
          "id": "9",
          "category": "drink",
          "title": "Perignon Rose",
          "image": "https://i.ibb.co/2MjhXsc/black-suit.png",
          "price": "5 169",
          "description": "French Champagne Dom Perignon Rose 2008 Vintage Box",
          "brand": "Champaign"
        },
      ]
    };
  },

  methods: {
		homeText() {
			this.$store.commit("hometext");
		}
}}
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 100) || 3000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 1000;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid rgba(246, 203, 94, 0.755) }";
  document.body.appendChild(css);
}</script>

<style scoped>
#box{
  z-index: -1;
}
#home{
  display:flex;
}
#productbody{
	height:fit-content;
	width:15vw;
	margin: 5% 0 0 27.5%;
	overflow: scroll;
  background-color: black;
	display:flex;

}
p{
  font-size: 15px;
}
.products{
	margin-right: 10%;
	color:silver;
	width: 450px;
}

#productbody::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.21);
}

#productbody::-webkit-scrollbar {
  width: 0px;
}

#productbody::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background: -webkit-linear-gradient( rgb(0, 0, 0)50%, rgb(227, 227, 112));
}

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
  right:-2%;
  top:400px;
}

#plant{
  position:absolute;
 height:800px;
 top:-10%;
 right:-10%;  padding:1%;
  filter: drop-shadow(5px 0 0 rgba(0, 0, 0, 0.7));
}
div.middle{
  height:fit-content;
  width:80vw;
  margin-top:8%;
  margin-left:-8%;
  text-align:center;
}
.home-text{
  color:rgba(246, 203, 94, 0.755);
  text-transform:uppercase;
  font-size:60px;
  
}
.txt-rotate{
	font-size: 2rem;
  color:silver;
}
.shopbox{
	margin-top:10%;
}
.shop{
	transition:all ease-in-out .5s;
	text-decoration: none !important;
	background:rgba(246, 203, 94, 0.755);
	padding:1%;
	color:black;
	font-size: 1.2rem;
	border-radius: 20px;
}
.shop:hover{
	color:silver;
	border:solid 2px rgba(246, 203, 94, 0.755);
	background:rgb(0, 0, 0);
}
.shop:focus{
	font-size: small;
}

.container {
  position: relative;
  display: inline-block;
}

.container h2 {
  color:rgba(246, 203, 94, 0.755);
  display: inline-block;
  white-space: nowrap;
  font-size: 70px;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: mask 3s linear infinite;
}

.mask > div {
  width: 20px;

  overflow: hidden;
  transform: skewX(-30deg);
}

.mask > div > div {
  transform: skewX(30deg);
}

.mask h2 {
  color: #fff;
  text-shadow: 0px 0 2px #fff;
  transform: skewX(30deg);
  animation: text 3s linear infinite;
}

@keyframes mask {
  0% { transform: translateX(-30px); }
  50% { transform: translateX(110%); }
  100% { transform: translateX(110%); }
}

@keyframes text {
  0% { transform: translateX(30px); }
  50% { transform: translateX(-110%); }
  100% { transform: translateX(-110%); }
}
</style>
