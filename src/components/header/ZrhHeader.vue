<template>
  <div class="header">
    <div class="logo-block">
      <img class="logo fade-in" src="@/assets/images/logo.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title?: string
}>()
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
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
}
</style>
