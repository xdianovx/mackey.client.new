<script setup>
const props = defineProps(["text", "icon"]);
</script>

<template>
  <div class="tag">
    <img v-if="icon" :src="icon" />
    <p>{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.tag {
  display: flex;
  padding: 8px 16px;
  align-items: center;
  background: #f5f5f5;
  border-radius: 8px;
  line-height: 100%;
  gap: 8px;

  p {
    margin-top: 3px;
  }
  img {
    display: block;
  }
}
</style>
