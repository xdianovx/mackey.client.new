<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <ul class="items" v-bind="$attrs">
    <li v-if="data.materials.length > 0">
      <h5>Материал</h5>
      <p>{{ data.materials[0]?.title }}</p>
    </li>
    <li v-if="data.linings.length > 0">
      <h5>Подкладка</h5>
      <p></p>
    </li>
    <li v-if="data.clasps.length > 0">
      <h5>Застежка</h5>
      <p></p>
    </li>
    <!-- <li>
      <h5>Отделений</h5>
      <p></p>
    </li>
    <li>
      <h5>Наплечный ремень</h5>
      <p></p>
    </li>
    <li>
      <h5>Длинна наплечного ремня</h5>
      <p></p>
    </li> -->

    <li>
      <h5>Вес</h5>
      <p>{{ data.weight }} гр</p>
    </li>
    <li v-if="data.type">
      <h5>Тип</h5>
      <p>{{ data.type?.title }}</p>
    </li>
    <li>
      <h5>Артикул</h5>
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

    h5 {
      font-size: 14px;
    }

    p {
      color: $textGray;
      font-size: 14px;
    }
  }
}
</style>
