<template>
  <div>
    <div>
      <PostVue v-for="(dat,i) in data" :key="i"
      :data = dat
      />
    </div>
  </div>
</template>

<script>
import PostVue from './PostVue'

export default {
  name:"ContainerList",
  components : {
    PostVue
  },
  props : {
    data : Array,
    step : Number
  }

};
</script>

<style>
</style>