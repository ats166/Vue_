<template>
    <div>
      <h1>{{ msg }}</h1>
      <h3>현재상태 : {{ change }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BChild',
    props: {
      msg: String
    },
    computed: {
      change() {
         return this.$store.state.mystate
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  