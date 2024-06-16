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
  color: $textBlack;
  background: #fbfbfb;
  border-radius: 12px;
  padding: 15px 30px;
  font-weight: 600;
  display: inline-block;
  border: 1px solid rgba($bgBlack, 0.5);
}
</style>
