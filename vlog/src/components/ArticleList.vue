<template>
  <div>
    <div v-for="(dat,i) in data" :key = "i">
      <h5 @click="$router.push(`/detail/${i}`)">{{ dat.title }}</h5>
      <p>{{ dat.content }}</p>
      <h6 class="mb-5">{{ dat.date }}</h6>
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