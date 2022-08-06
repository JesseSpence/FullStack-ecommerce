<!-- <template>
  <div class="flex">
    <div id="body" v-for="product of product" :key="product.id">
      <div class="everything">
        <div id="cards" class="card col-lg-4" style="width: 290px">
          <img v-bind:src="product.image" alt="" />
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p>
            <i class="fa-solid fa-bolt-lightning"></i>
            {{ product.category }}
          </p>
          <p><i class="fa-solid fa-horse-head"></i> {{ product.company }}</p>
          <p><i class="fa-solid fa-dollar-sign"></i> {{ product.price }}</p>
        </div>
      </div>
      </div>
    </div>
</template>
<script>
import Product from "@/components/Product.vue";
export default {
  components: { Card },
  mounted() {
    this.$store.dispatch("ShowProducts");
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
};
</script>

<style>
.flex {
  position: absolute;
  background-color: #000000;
  display: flex;
  top:90%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 25px;
}
#cards router-link {
  text-decoration: none;
}
.card-display {
  
  display: flex;
  position:relative;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 50px;
}
#cards {
  margin-top: 3%;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 1px 1px 2px rgb(0, 0, 0);
}
#cards2 {
  margin-right: auto;
  margin-left: auto;
}
h5 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 25px;
  text-shadow: 1px 1px 2px rgb(255, 255, 255);
}
#missing {
  padding-bottom: 5%;
}
option {
  font-family: "Racing Sans One", cursive;
}
#cards:hover {
  background-color: white;
  animation: gloski .5s linear infinite;
  transition: box-shadow 1s;
}
@keyframes gloski {
		0% {
			box-shadow: -2px -2px 10px 2px rgb(74, 50, 211), 2px 2px 10px 2px rgb(255, 0, 170);
		}
		50% {
			box-shadow: 2px 2px 10px 2px rgb(255, 166, 0), -2px -2px 10px 2px purple;
		}
		100% {
			box-shadow: -2px -2px 10px 2px rgb(0, 255, 34), 2px 2px 10px 2px rgb(0, 217, 255);
		}
	}
@keyframes gloTV {
  0% {
    box-shadow: -5px -5px 30px 5px crimson, 5px 5px 30px 5px blue;
  }
  50% {
    box-shadow: 5px 5px 30px 5px yellow, -5px -5px 30px 5px purple;
  }
  100% {
    box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue;
  }
}
  #sort {
    box-shadow: 20px 20px 60px #000000, -20px -20px 60px #000000;
    height: 20vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: -5%;
    margin-left: auto;
    margin-right: auto;
  }
  select {
    margin-top: 10%;
  }
  #profile {
    display: none;
  }










</style> -->