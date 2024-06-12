<template>
  <h1 v-if="tag === 'h1'" class="h1"><slot /></h1>
  <h2 v-if="tag === 'h2'" class=""><slot /></h2>
  <h3 v-if="tag === 'h3'" class=""><slot /></h3>
  <h4 v-if="tag === 'h4'" class=""><slot /></h4>
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
  text-transform: capitalize;
}
</style>
