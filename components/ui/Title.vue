<template>
  <h1 v-if="tag === 'h1'" v-bind="$attrs" class="h1"><slot /></h1>
  <h2 v-if="tag === 'h2'" v-bind="$attrs" class="h2"><slot /></h2>
  <h3 v-if="tag === 'h3'" v-bind="$attrs" class="h3"><slot /></h3>
  <h4 v-if="tag === 'h4'" v-bind="$attrs" class="h4"><slot /></h4>
</template>

<script setup>
const props = defineProps(["tag"]);
</script>

<style lang="scss" scoped>
.h1 {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.h2 {
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
}

@media screen and (max-width: 1200px) {
  .h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 130%;
  }
}
</style>
