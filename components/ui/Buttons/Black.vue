<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  color: $textWhite;
  background: $bgBlack;
  border-radius: 12px;
  padding: 15px 30px;
  font-weight: 600;
  display: inline-block;
}
</style>
