<template>
  <div>
    <div class="black-bg" v-if="ismodal" @click="ismodal = false">
      <MoDal :detailnum="detailnum" :data="data" />
      <!-- <div class="white-bg">
        <img :src="data[detailnum].image" />
        <h4>{{ data[detailnum].title }}</h4>
        <p>{{ data[detailnum].content }}</p>
      </div> -->
    </div>

    <div class="menu">
      <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
    </div>

    <DisCount />

    <p v-for="(dat, i) in data" :key="i">
      <CaRd 
      :dat="dat" 
      @openModal="ismodal=true; detailnum = $event"
      />
    </p>
  </div>
</template>

<script>
import datas from "./assets/oneroom";
import DisCount from "./components/DisCount";
import MoDal from "./components/MoDal";
import CaRd from "./components/CaRd";

export default {
  name: "App",
  data() {
    return {
      detailnum: 0,
      data: datas,
      ismodal: false,
      num: [0, 0, 0],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      menus: ["Home", "Shop", "About"],
    };
  },
  components: {
    DisCount: DisCount,
    MoDal: MoDal,
    CaRd: CaRd,
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
