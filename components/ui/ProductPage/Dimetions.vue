<template>
  <div class="items">
    <div class="item">
      <p>{{ data.height }} мм</p>
      <span>(Высота)</span>
    </div>
    x
    <div class="item">
      <p>{{ data.width }} мм</p>
      <span>(Ширина)</span>
    </div>
    x
    <div class="item">
      <p>{{ data.depth }} мм</p>
      <span>(Глубина)</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style lang="scss" scoped>
.items {
  background: #f5f5f5;
  padding: 24px 34px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
  }

  span {
    color: rgba($bgBlack, 0.3);
    font-size: 12px;
  }
}
</style>
