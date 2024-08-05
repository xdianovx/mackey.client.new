<script setup>
const props = defineProps(["data"]);
const route = useRoute();
</script>

<template>
  <NuxtLink
    class="item"
    :to="`/product/${data.slug}`"
    :class="{
      active: route.path.includes(data.slug),
      iswhite: data.color[0].code === '#ffffff',
    }"
    :style="{ background: data.color[0].code }"
  >
    <div
      class="split"
      :style="{ background: item.code }"
      v-for="item in data.color"
    ></div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.item {
  width: 18px;
  height: 18px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.split {
  height: 100%;
  width: 100%;
}

.active {
  border: 1px solid #000;
}

.iswhite {
  border: 1px solid rgba($color: #000000, $alpha: 0.3);
}
</style>
