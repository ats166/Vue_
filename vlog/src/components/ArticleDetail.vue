<template>
  <div>
    <h2>여긴 상세페이지</h2>
    <h4>{{ data[$route.params.id].title }}</h4>
    <p> {{ data[$route.params.id].content }} </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name : "ArticleDetail",
    props : {
      data : Array
    }
}
</script>

<style>

</style>