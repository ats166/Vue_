<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <router-link to="/">홈으로</router-link>
      <router-link to="/ArticleList">글목록</router-link>
    </nav>

    <router-view :data="data"></router-view>
  </div>
</template>

<script>
// import ArticleList from "./components/ArticleList";
import data from "./assets/blog";

export default {
  name: "App",
  data() {
    return {
      data: data,
    };
  },
  components: {
    // ArticleList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
