<template>
    <div>
      <h5>{{ msg }}</h5>
      <h3>현재 상태: {{ mystate }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BChild',
    props: {
      msg: String,
      mystate : String,
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
  
  </style>
  