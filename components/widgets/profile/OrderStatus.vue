<script setup>
const props = defineProps(["status"]);
</script>

<template>
  <div v-if="status == 1" class="status red">Ошибка оплаты</div>
  <div v-if="status == 3" class="status green">Оплачен</div>
</template>

<style lang="scss" scoped>
.status {
  border-radius: 8px;
  display: inline-block;
  padding: 8px 24px 7px;
  border: 1px solid #000;

  &.red {
    border-color: $bgRed;
    color: $textRed;
    background: #ffeae9;
  }

  &.green {
    border-color: #b2eecc;
    color: #17663a;
    background: #eefbf4;
  }
}
</style>
