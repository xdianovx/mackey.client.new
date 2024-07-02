<template>
  <div class="item">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.item {
  border: 1px solid #ff3b30;
  background: #fec9c63c;
  padding: 10px 12px 8px;
  color: #ff3b30;
  border-radius: 8px;
  line-height: 100%;
  margin-top: 16px;
}
</style>
