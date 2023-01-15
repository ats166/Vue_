<template>
  <div>
    <div>
      <router-link to="/detail/0" >{{ data[0].title }}</router-link>
      <p>{{ data[0].content }}</p>
      <h6 class="mb-5">{{ data[0].date }}</h6>
    </div>
    <div>
      <router-link to="/detail/1" >{{ data[1].title }}</router-link>
      <p>{{ data[1].content }}</p>
      <h6 class="mb-5">{{ data[1].date }}</h6>
    </div>
    <div>
      <router-link to="/detail/2" >{{ data[2].title }}</router-link>
      <p>{{ data[2].content }}</p>
      <h6 class="mb-5">{{ data[2].date }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    data: Object,
  },
};
</script>

<style>
</style>