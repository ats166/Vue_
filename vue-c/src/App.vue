<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="box">
      <h2>props, emit을 활용한 데이터 전달</h2>
      <AChild 
      :msg="Amessage"
      @yes="Yes"
      @no="No"
      />
      <BChild 
      :msg="Bmessage"
      :mystate="mystate"
      />
    </div>

    <div id="box">
      <h2>EventBus를 활용한 데이터 전달</h2>
      <CChild/>

      <DChild/>
    </div>
  </div>
</template>

<script>
import AChild from './components/AChild'
import BChild from './components/BChild'
import CChild from './components/CChild'
import DChild from './components/DChild'

export default {
  name: 'App',
  components: {
    AChild,
    BChild,
    CChild,
    DChild,
  },
  data() {
    return {
      Amessage : "Props를 통해 A컴포넌트로 보낸 메세지",
      Bmessage : "Props를 통해 B컴포넌트로 보낸 메세지",
      mystate : '입력없음'
    }
  },
  methods: {
    Yes() {
      console.log('O버튼 요청보냄');
      this.mystate = 'yes'
    },
    No() {
      console.log('X버튼 요청보냄');
      this.mystate = 'no'
    }
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
  border : 1px solid gray;
}

</style>
