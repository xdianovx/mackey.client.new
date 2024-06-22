<script setup>
const props = defineProps(["text", "link"]);
</script>

<template>
  <NuxtLink v-if="link" :to="link">{{ text }}</NuxtLink>
  <button class="button" v-else v-bind="$attrs">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  color: $textBlack;
  background: #fbfbfb;
  border-radius: 12px;
  padding: 15px 30px 14px;
  font-weight: 600;
  display: inline-block;
  border: 1px solid rgba($bgBlack, 0.5);
}
</style>
