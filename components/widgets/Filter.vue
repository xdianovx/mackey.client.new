<script setup>
const { open, close } = useMyIsFilterOpenStore();
const { isOpen } = storeToRefs(useMyIsFilterOpenStore());
</script>

<template>
  <div class="filter" :class="{ active: isOpen }">
    <div class="filter__top">
      <h3 class="title">Фильтры</h3>
      <UiFilterCloseBtn @click="close" />
    </div>
  </div>
  <div class="overflow" @click="close" :class="{ active: isOpen }"></div>
</template>

<style lang="scss" scoped>
.filter {
  position: fixed;
  height: 100vh;
  right: -100%;
  max-width: 680px;
  width: 100%;
  top: 0;
  z-index: 20;
  background: $bgWhite;
  padding: 40px 80px;
  transition: all 0.4s ease-in-out;
  animation-delay: 0.3s;
  &.active {
    right: 0;
  }
}

.overflow {
  transition: all 0.2s ease-in-out;
  position: fixed;
  top: 0;
  right: -100vw;
  z-index: 19;
  width: 100vw;
  height: 100vh;
  background: rgba($bgBlack, 0.2);

  &.active {
    right: 0;
  }
}

.filter__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
