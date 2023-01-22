<template>
  <div :class="`${filters} filter-item`" :style="`background-image : url(${url})`">
    <slot></slot>
    <button @click="fire">ddd</button>
  </div>
</template>

<script>
export default {
  name: "FitlerBox",
  methods : {
    fire() {
      this.emitter.emit('filters', this.filters)
    }
  },
  props: {
    url : String,
    filters : String,
  }
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>