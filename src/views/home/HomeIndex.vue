<template>
  <div class="home">
    <ZrhHeader></ZrhHeader>
    <div class="banner">
      <div class="slider">
        <img class="slider-img" :src="currentImage" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ZrhHeader from '@/components/header/ZrhHeader.vue'
import slider1 from '@/assets/images/home/law-slider-1.jpg'
import slider2 from '@/assets/images/home/law-slider-2.jpg'
import slider3 from '@/assets/images/home/law-slider-3.jpg'

const currentImage = ref(slider1)
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  border: 1px solid #fff;

  .slider-img {
    width: 100%;
  }
}
</style>
