<template>
  <div>
    heghgllo-{{ name }}
    <li>
      <RouterLink to="/home">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/about">About</RouterLink>
    </li>
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('zs')
</script>

<style lang="less" scoped>
div {
  color: red;
}
</style>