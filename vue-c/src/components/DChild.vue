<template>
  <div>
    <h4>하위 D 컴포넌트</h4>
    <h3>현재 상태 : {{ mystate }}</h3>
  </div>
</template>

<script>
export default {
  name : 'DChild',
  data() {
    return {
      mystate : '입력없음'
    }
  },
  created() {
    this.$EventBus.$on('send-yes', this.Yes),
    this.$EventBus.$on('send-no', this.No)
  },
  methods: {
    Yes() {
      this.mystate = 'yes'
    },
    No() {
      this.mystate = 'no'
    }
  },
}
</script>

<style>

</style>