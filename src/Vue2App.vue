<template>
  <div>
    <span>{{ name }}--{{ age }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'zsdsds',
      age: 12,
    }
  }
}
</script>

<style lang="less" scoped>
div {
  span {
    color: red;
  }
}
</style>