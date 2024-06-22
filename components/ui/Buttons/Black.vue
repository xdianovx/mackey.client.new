<script setup>
const props = defineProps(["text", "link"]);
</script>

<template>
  <NuxtLink v-if="link" :to="link" class="button" v-bind="$attrs">{{
    text
  }}</NuxtLink>
  <button v-else class="button">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped v-bind="$attrs">
.button {
  color: $textWhite;
  background: $bgBlack;
  border-radius: 12px;
  padding: 15px 30px;
  font-weight: 600;
  display: inline-block;
  text-align: center;
}
</style>
