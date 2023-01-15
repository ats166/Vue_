<template>
  <div>
    <div class="white-bg">
      <img :src="data[detailnum].image" />
      <h4>{{ data[detailnum].title }}</h4>
      <p>{{ data[detailnum].content }}</p>
      <input v-model="month" />
      <p>{{ month }} 개월 선택</p>
      <p>{{ data[detailnum].price * month }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoDal",
  props: {
    detailnum: Number,
    data: Array,
  },
  data() {
    return {
      month: 0,
    };
  },
  watch: {
    month(afterinput, beforeinput) {
      if (isNaN(afterinput)) {
        alert('zz')
        this.month = 0
      }
      if (afterinput >= 13) {
        alert('13개월 이상은 입력할 수 없습니다')
        this.month = beforeinput
      }
    },
  },
  beforeUpdate() {
    if (this.month == 2) {
      alert('3이상 입력해주세요')
    }
  }
};
</script>

<style>
</style>