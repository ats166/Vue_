<template>
  <div>
    <h1>{{ msg }}</h1>

    <button @click="Yes">O</button>
    <button @click="No">X</button>
  </div>
</template>

<script>
export default {
  name: 'AChild',
  props: {
    msg: String
  },
  methods: {
    Yes() {
      this.$store.dispatch('send','yes')
    },
    No() {
      this.$store.dispatch('send','no')
    }
  },
}
</script>

<style>

</style>
