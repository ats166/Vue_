<template>
  <div>
    <div class="header">
      <ul class="header-button-left" @click="step -= 1">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step < 2" @click="step += 1">Next</li>
        <li v-else @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>
    <div v-if="step == 0" :step="step">
      <ContainerList :data="data" />
      <button v-if="num <= 1" @click="moredata(), (this.num += 1)">
        더 보기
      </button>
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div
        :class="`${filters} upload-image`"
        :style="`background-image:url(${this.url})`"
      ></div>
      <div class="filters">
        <FilterBox v-for="a in filter" :key="a" :filters="a" :url="url">
          {{ a }}
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div class="upload-image"></div>
      <div class="write">
        <textarea @input="hoho($event.target.value)" class="write-box">
write!</textarea
        >
      </div>
    </div>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import ContainerList from "./components/ContainerList";
import Mydata from "./assets/Mydata.js";
import axios from "axios";
import FilterBox from "./components/FilterBox";

export default {
  name: "App",
  data() {
    return {
      step: 0,
      data: Mydata,
      num: 0,
      url: null,
      content: null,
      filter: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      filters: null,
    };
  },
  components: {
    ContainerList,
    FilterBox,
  },
  mounted() {
    this.emitter.on("filters", (filters) => {
      this.filters = filters;
    });
  },
  methods: {
    moredata() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.num}.json`)
        .then((data) => {
          this.data.push(data.data);
        })
        .catch(() => {
          console.log(this.axiosurl);
        });
    },
    upload(e) {
      let file = e.target.files;
      console.log(file[0]);
      this.url = URL.createObjectURL(file[0]);
      console.log(this.url);
      this.step += 1;
    },
    publish() {
      let Article = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: `${this.url}`,
        likes: 36,
        date: "May 15",
        liked: false,
        content: `${this.content}`,
        filter: "perpetua",
      };
      this.data.unshift(Article);
      this.step = 0;
    },
    hoho(e) {
      this.content = e;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
