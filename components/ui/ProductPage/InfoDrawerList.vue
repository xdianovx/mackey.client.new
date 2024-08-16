<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <ul class="items" v-bind="$attrs">
    <li v-if="data.materials.length > 0">
      <p>Материал</p>
      <p>{{ data.materials[0]?.title }}</p>
    </li>
    <li v-if="data.linings.length > 0">
      <p>Подкладка</p>
      <p></p>
    </li>
    <li v-if="data.clasps.length > 0">
      <p>Застежка</p>
      <p></p>
    </li>
    <li>
      <p>Вес</p>
      <p>{{ data.weight }} гр</p>
    </li>
    <li v-if="data.type">
      <p>Тип</p>
      <p>{{ data.type?.title }}</p>
    </li>
    <li>
      <p>Артикул</p>
      <p>{{ data.vendor_code }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 14px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p:first-of-type {
      font-size: 14px;
      font-weight: 500;
      color: #000;
    }

    p {
      color: $textGray;
      font-size: 14px;
    }
  }
}
</style>
