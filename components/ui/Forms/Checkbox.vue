<script setup>
const model = defineModel();
const props = defineProps(["label", "id", "name"]);
</script>

<template>
  <div class="checkbox">
    <input type="checkbox" :v-model="model" class="input" v-bind="$attrs" />
    <label v-if="label" :for="id" class="label">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped></style>
