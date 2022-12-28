<template>
  <div>
    <h5>{{ msg }}</h5>
    <button @click="yes">O</button>
    <button @click="no">X</button>
  </div>
</template>

<script>
export default {
  name: 'AChild',
  props: {
    msg: String
  },
  methods: {
    yes() {
      this.$emit('yes')
    },
    no() {
      this.$emit('no')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
