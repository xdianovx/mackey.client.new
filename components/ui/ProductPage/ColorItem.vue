<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="item" :style="{ background: data.code }"></div>
</template>

<style lang="scss" scoped>
.item {
  width: 24px;
  height: 24px;
  border-radius: 100%;
}
</style>
