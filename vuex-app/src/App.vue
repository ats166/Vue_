<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="box">
      <AChild msg="하위 A 컴포넌트"/>
      <BChild msg="하위 B 컴포넌트"/>
    </div>
    
  </div>
</template>

<script>
import AChild from './components/AChild'
import BChild from './components/BChild'

export default {
  name: 'App',
  components: {
    AChild,
    BChild
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

#box {
  border : solid 1px gray;
}
</style>
