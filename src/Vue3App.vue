<template>
  <div>
    heghgllo-{{ name }}
    <el-button type="primary">按钮</el-button>
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
import { ElButton } from 'element-plus';
import { ref } from 'vue'
const name = ref('zs')
</script>

<style lang="less" scoped>
div {
  color: red;
}
</style>