<template>
  <div>
      <!-- @click="(ismodal = true), (detailnum = i)" -->
    <img
        :src="dat.image"
        class="room-img"
      />
      <h4 @click="$emit('openModal', dat.id)">{{ dat.title }}</h4>
      <p>{{ dat.price }} 원</p>
  </div>
</template>

<script>
export default {
    name : "CaRd",
    props : {
        dat : Object,
    }
}
</script>

<style>

.room-img {
  width: 100%;
  margin-top: 40px;
}

</style>