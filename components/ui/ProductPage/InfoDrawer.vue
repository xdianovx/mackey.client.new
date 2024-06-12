<script setup>
const { close } = useMyProductPageDrawerStore();
const { isOpen } = storeToRefs(useMyProductPageDrawerStore());

const props = defineProps(["data"]);
</script>

<template>
  <aside class="aside" :class="{ active: isOpen }" v-bind="$attrs">
    <div class="aside-inner">
      <div class="top">
        <h3 class="title">Описание и детали</h3>

        <UiFilterCloseBtn @click="close" />
      </div>

      <div class="description">
        <p>{{ data.description }}</p>
      </div>

      <div class="div"></div>

      <UiProductPageHandMadeLabel />

      <UiProductPageDimetions class="dimentions" :data="data" />

      <UiProductPageInfoDrawerList :data="data" class="list" />
    </div>
  </aside>
  <div class="overflow" :class="{ active: isOpen }" @click="close"></div>
</template>

<style lang="scss" scoped>
.overflow {
  position: fixed;
  z-index: 9;
  right: -100%;
  height: 100vh;
  width: 100%;
  transition: right 0.3s ease-in-out;
  background: rgba($bgBlack, 0.3);

  &.active {
    right: 0;
  }
}
.aside {
  position: fixed;
  z-index: 10;
  right: -100%;
  transition-delay: 0.5s;
  transition: right 0.3s ease-in-out;
  height: 100vh;
  max-width: 680px;
  width: 100%;
  background: $bgWhite;
  overflow-y: auto;

  &.active {
    right: 0;
  }
}

.div {
  margin: 24px 8px;
  height: 1px;
  background: rgba($bgBlack, 0.3);
}

.aside-inner {
  padding: 48px 80px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.description {
  margin-top: 32px;
  font-size: 14px;
}

.dimentions {
  margin-top: 24px;
}

.list {
  margin-top: 24px;
}

@media screen and (max-width: 768px) {
  .aside {
    max-width: none;
  }

  .aside-inner {
    padding: 48px 16px;
  }
}
</style>
