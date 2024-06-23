<script setup></script>
<template>
  <buttom v-bind="$attrs" class="btn">Выйти</buttom>
</template>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 12px 20px;
  color: $textRed;
  border-radius: 8px;
  line-height: 100%;
  border: 1px solid $bgRed;
  cursor: pointer;
}
</style>
