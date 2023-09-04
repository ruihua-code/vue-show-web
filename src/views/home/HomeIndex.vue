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
              <div></div>
              <div class="loop"></div>
              <div class="slde-1">LEAVE COURT TO US</div>
              <div class="slde-2">
                <div>The Legal Advice</div>
                <div>
                  <span>Need</span>
                  <span class="phone-call">Phone Call</span>
                </div>
                <span class="last-block">Away.</span>
                <div class="slde-3">
                  <span>Lorem Ipsum generators on the Internet tend to</span>
                  <span>predefined chunks as necessary making.</span>
                </div>
              </div>
            </div>
            <img :src="slider2" class="d-block w-100 carousel-img" />
          </div>
          <div class="carousel-item">
            <div class="text-block">
              <div></div>
              <div class="loop"></div>
              <div class="slde-1">WELLCOM TO IGUAL</div>
              <div class="slde-2">
                <div>We are Specialise In</div>
                <div>
                  <span>ALL</span>
                  <span class="phone-call">Criminal & Civil</span>
                </div>
                <span class="last-block">Laws.</span>
                <div class="slde-3">
                  <span>Lorem Ipsum generators on the Internet tend to</span>
                  <span>predefined chunks as necessary making.</span>
                </div>
              </div>
            </div>
            <img :src="slider1" class="d-block w-100 carousel-img" />
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
  position: relative;
  z-index: 1;
  width: 100%;

  .carousel-img {
    height: calc(100vh - 100px);
    object-fit: cover;
  }

  .carousel-item {
    position: relative;
    z-index: 1;
    transition-duration: 1s;
  }

  .text-block {
    position: absolute;
    top: calc(50% - 150px);
    left: 0;
    color: #fff;
  }

  .loop {
    position: absolute;
    top: -20px;
    left: 80px;
    width: 141px;
    height: 141px;
    background-color: rgb(184 150 126 / 17%);
    border-radius: 0% 50%;
    animation: show-loop 3s 1s linear alternate-reverse infinite;
  }

  .slde-1 {
    font-size: 18px;
    color: rgb(184 150 126);
    opacity: 0;
    animation: show-text 0.8s 0.5s ease-in forwards;
  }

  .slde-2 {
    font-size: 80px;
    opacity: 0;
    animation: show-text 0.8s 1s ease-in forwards;

    .phone-call {
      margin-left: 8px;
      color: transparent;
      -webkit-text-stroke: 1px rgb(184 150 126);
    }

    .last-block {
      background-color: #0d111a;
    }

    .slde-3 {
      position: absolute;
      bottom: 25px;
      z-index: -1;
      display: flex;
      flex-direction: column;
      padding-left: 15px;
      margin-left: 15px;
      font-size: 16px;
      border-left: 2px solid rgb(184 150 126);
      opacity: 0;
      animation: show-text-1 0.8s 2s ease-in forwards;
    }
  }
}

.content {
  .num {
    padding: 10px;
    border: 1px;
  }
}

@keyframes show-loop {
  from {
    transform: rotateY(-15deg);
  }

  to {
    transform: rotateY(55deg);
  }
}

@keyframes show-text {
  from {
    opacity: 0;
    transform: translateX(0);
  }

  to {
    opacity: 1;
    transform: translateX(100px);
  }
}

@keyframes show-text-1 {
  from {
    opacity: 0;
    transform: translateX(0);
  }

  to {
    opacity: 1;
    transform: translateX(220px);
  }
}
</style>
