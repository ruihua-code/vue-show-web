<template>
  <div class="header">
    <div class="logo-block">
      <img class="logo fade-in" src="@/assets/images/logo.png" alt="" />
    </div>
    <ul class="menus">
      <li
        class="menus-item"
        :style="{ '--show-menu-time': index }"
        v-for="(menu, index) in menus"
        :Key="menu.id">
        <a class="link" href="">{{ menu.name }}</a>
      </li>
    </ul>

    <div class="contact fade-in">
      <a href="tel:(528) 456-7592" class="tel-block">
        <i class="bi bi-telephone-forward-fill"></i>
        <span class="tel">+(528) 456-7592</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const menus = [
  {
    name: 'HOME',
    id: 1
  },
  {
    name: 'PAGES',
    id: 2
  },
  {
    name: 'PRACTICE AREAS',
    id: 3
  },
  {
    name: 'FEATURES',
    id: 4
  },

  {
    name: 'BLOG',
    id: 5
  },
  {
    name: 'CONTACT US',
    id: 2
  }
]
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  height: 100px;
  line-height: 100px;
  color: #fff;
  background-color: #1c1c1c;

  .logo-block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 215px;
    height: 100%;
    border-right: 1px solid rgb(255 255 255 / 20%);
  }

  .logo {
    width: 149px;
    height: auto;
  }

  .menus {
    display: flex;
    list-style: none;

    .menus-item {
      padding: 0 24px;
      cursor: pointer;
      opacity: 0;
      animation: show-menu-item 0.4s calc(var(--show-menu-time) / 8 * 1s) ease-in forwards;

      .link {
        position: relative;
        font-weight: 500;
        color: #fff;
        text-decoration: none;
        transition: color 0.4s;

        &::before {
          position: absolute;
          top: -3px;
          left: -5px;
          z-index: -1;
          width: 20px;
          height: 18px;
          content: '';
          border-top-right-radius: 7px;
          border-bottom-left-radius: 7px;
          opacity: 0;
          transition: opacity 0.4s;
        }
      }

      &:hover {
        .link {
          color: #b8967e;

          &::before {
            background-color: #b8967e;
            opacity: 0.4;
          }
        }
      }
    }
  }

  .contact {
    position: absolute;
    right: 20px;
    float: right;

    .tel-block {
      position: relative;
      padding: 4px;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.4s;

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        content: '';
        background-color: #b8967e;
        transition: width 0.4s;
      }
    }

    .tel-block:hover {
      color: #b8967e;

      &::after {
        width: 100%;
      }
    }

    .bi-telephone-forward-fill {
      margin-right: 10px;
    }

    .tel {
      font-weight: 500;
    }
  }
}
</style>
