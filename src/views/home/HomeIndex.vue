<template>
  <div class="home">
    <ZrhHeader></ZrhHeader>
    <div class="banner">
      <TopBanner :images="[slider1, slider2]"></TopBanner>
    </div>
    <div class="content">
      <div class="our-resources">
        <div class="title">OUR RESOURCES</div>
        <h3 class="title-2">We Live & Work Globally</h3>
        <div class="line">
          <span class="elementor-divider-separator"></span>
        </div>
        <div class="list">
          <div class="list-item" v-for="(item, index) in ourResources" :key="index">
            <div class="value-unit">
              <span class="value">
                {{ arr[index] }}
              </span>
              <span class="unit">{{ item.unit }}</span>
            </div>
            <span class="label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import ZrhHeader from '@/components/header/ZrhHeader.vue'
import TopBanner from './components/TopBanner.vue'
import slider1 from '@/assets/images/home/law-slider-1.jpg'
import slider2 from '@/assets/images/home/law-slider-2.jpg'

import gsap from 'gsap'

const arr = ref([0, 0, 0, 0, 0, 0])

const ourResources = ref([
  {
    value: 3200,
    unit: '+',
    label: 'LAWYERS ACROSS OUR GLOBAL PLATFORM'
  },
  {
    value: 100,
    unit: '%',
    label: 'ON HUMAN RIGHTS CAMPAIGN FOUNDATION’S 2023'
  },
  {
    value: 92,
    unit: '%',
    label: 'LATHAM LAWYERS PARTICIPATE IN PRO BONO WORK'
  },
  {
    value: 60,
    unit: '+',
    label: 'NUMBER OF NATIVE SPEAKERS LANGUAGES SPOKEN'
  },
  {
    value: 239,
    unit: 'k',
    label: 'ENCOURAGES LAWYERS TO ENGAGE IN AT LEAST 50 HOURS'
  },
  {
    value: 14,
    unit: '%',
    label: 'COUNTRIES IN WHICH THE FIRM IS LOCATED'
  }
])

const updateNum = (index: number, max: number) => {
  gsap.to(arr.value, {
    duration: 2.5,
    [index]: max,
    onUpdate: () => {
      arr.value[index] = Number(arr.value[index].toFixed(0))
    }
  })
}

onMounted(() => {
  startAni()
})

/**
 * 检查是否开始播放OUR RESOURCES里面的动画
 */
const startAni = () => {
  const eleZrh = document.querySelector('.value-unit')
  const docHeight = document.documentElement.clientHeight / 2
  document?.addEventListener('scroll', () => {
    const { y } = eleZrh?.getBoundingClientRect() as any
    if (docHeight + 100 > y) {
      ourResources.value.forEach((ele, index) => {
        updateNum(index, ele.value)
      })
    }
  })
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  z-index: 1;
  width: 100%;
}

.content {
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;

  .our-resources {
    padding: 20px;
    text-align: center;

    .title {
      position: relative;
      display: inline-block;
      margin-bottom: 10px;
      color: #b8967e;
      text-align: center;

      &::before,
      &::after {
        position: absolute;
        top: 50%;
        width: 20px;
        height: 13px;
        content: '';
        border-top-right-radius: 7px;
        border-bottom-left-radius: 7px;
        transition: 0.4s;
        transform: translateY(-50%);
      }

      &::before {
        left: -29px;
        background: linear-gradient(to right, #b8967e, rgb(184 151 128 / 6%));
      }

      &::after {
        right: -29px;
        background: linear-gradient(to left, #b8967e, rgb(184 151 128 / 6%));
      }
    }

    .title-2 {
      font-family: $font-family-marcellus;
      font-size: 40px;
      color: #262626;
      letter-spacing: 0.5px;
    }

    .line {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;

      .elementor-divider-separator {
        width: 10%;
        margin: 0 auto;
        border-top: 2px solid;
        border-image: linear-gradient(to right, #b8967e, rgb(58 123 213 / 0%));
        border-image-slice: 1;
      }
    }

    .list {
      display: flex;
      flex-wrap: wrap;

      .list-item:nth-child(1) {
        border-width: 0 0 1px;
      }

      .list-item:nth-child(2) {
        border-width: 0 1px 1px;
      }

      .list-item:nth-child(3) {
        border-width: 0 0 1px;
      }

      .list-item:nth-child(5) {
        border-width: 0 1px;
      }

      .list-item {
        flex-basis: 33.33%;
        padding: 40px;
        border-color: #eaeaea;
        border-style: solid;
        border-width: 0;

        .value-unit {
          margin-bottom: 10px;
        }

        .value {
          display: inline-block;
          max-width: 150px;
          overflow: hidden;
        }

        .value,
        .unit {
          font-family: $font-family-marcellus;
          font-size: 56px;
          line-height: 1em;
          color: #b8967e;
          white-space: nowrap;
        }

        .label {
          font-size: 15px;
          font-weight: 700;
          color: #00192c;
          letter-spacing: 0.5px;
        }
      }
    }
  }

  .num {
    padding: 10px;
    border: 1px;
  }
}

@keyframes show-zrh {
  from {
    transform: scale(0.2);
  }

  to {
    transform: scale(1.2);
  }
}
</style>
