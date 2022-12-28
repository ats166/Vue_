<template>
  <div>
    <h3>하위 C 컴포넌트</h3>
    <button @click="Eventyes">O</button>
    <button @click="Eventno">X</button>
  </div>
</template>

<script>
export default {
  name : 'CChild',
  methods: {
    Eventyes () {
      this.$EventBus.$emit('send-yes')
    },
    Eventno () {
      this.$EventBus.$emit('send-no')
    },
  },
}
</script>

<style>

</style>