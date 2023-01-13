<template>
  <div>
    <div class="black-bg" v-if="ismodal" @click="ismodal = false">
      <div class="white-bg">
        <h4>{{ data[detailnum].title}}</h4>
        <p>{{ data[detailnum].content}}</p>
      </div>
    </div>
    <div class="menu">
      <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
    </div>

    <h4 v-for="(dat, i) in data" :key="i">
      <img @click="ismodal = true, detailnum = i" :src="dat.image" class="room-img" />
      <p>{{ dat.title }}</p>
      <p>{{ dat.price }} 원</p>
    </h4>
  </div>
</template>

<script>
import datas from "./assets/oneroom";

export default {
  name: "App",
  data() {
    return {
      detailnum : 0,
      data: datas,
      ismodal: false,
      num: [0, 0, 0],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      menus: ["Home", "Shop", "About"],
    };
  },
  components: {
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

.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
