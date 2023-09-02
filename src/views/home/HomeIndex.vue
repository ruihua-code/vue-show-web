<template>
  <div class="home">
    <ZrhHeader></ZrhHeader>
    <div class="banner">
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="text-block">
              <div class="text">
                <span>The Legal Advice</span>
                <span>Need Phone Call</span>
                <span>Away</span>
              </div>
            </div>
            <img :src="slider1" class="d-block w-100 carousel-img" />
          </div>
          <div class="carousel-item">
            <div class="text-block">
              <div class="text">
                <span>We are Specialise In</span>
                <span>All Criminal & Civil</span>
                <span>Laws.</span>
              </div>
            </div>
            <img :src="slider2" class="d-block w-100 carousel-img" />
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <span class="num">{{ num }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ZrhHeader from '@/components/header/ZrhHeader.vue'
import slider1 from '@/assets/images/home/law-slider-1.jpg'
import slider2 from '@/assets/images/home/law-slider-2.jpg'
import { onMounted, ref } from 'vue'
import * as bootstrap from 'bootstrap'

const num = ref(0)

onMounted(() => {
  const myCarousel = document.getElementById('carouselExampleCaptions') as HTMLElement

  myCarousel.addEventListener('click', () => {
    const carousel = new bootstrap.Carousel(myCarousel, {
      interval: 10000,
      touch: false
    })
    carousel.next()
  })
  const timeFlag = setInterval(() => {
    num.value++
    if (num.value === 100) {
      clearInterval(timeFlag)
    }
  }, 20)
})
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  margin-top: 100px;

  .carousel-img {
    height: calc(100vh - 100px);
  }

  .carousel-item {
    position: relative;
    z-index: 9999;
    transition-duration: 1s;
  }

  .text-block {
    position: absolute;
    top: 200px;
    left: 200px;
    color: transparent;
    opacity: 0;
    transform: translateX(-100px);
    animation: show-text 1s 1s linear forwards;

    .text {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      font-size: 80px;
      -webkit-text-stroke: 1px #b8967e;
    }
  }
}

.content {
  .num {
    padding: 10px;
    border: 1px;
  }
}

@keyframes show-text {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(170px);
  }
}
</style>
