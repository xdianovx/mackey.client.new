<script setup>
const props = defineProps({
  data: Array,
  checkedUserAddress: Number, // Значение выбранного метода доставки
});

const emit = defineEmits(["update:checkedUserAddress"]);
const model = ref(props.checkedUserAddress);

const updateModel = (value) => {
  model.value = value;
  emit("update:checkedUserAddress", value); // Передача выбранного значения родителю
};
</script>

<template>
  <div class="adress-wrap">
    <label class="adress-item" v-for="item in data" :key="item.id">
      <div class="circle"></div>

      <input
        type="radio"
        @change="updateModel(item.id)"
        name="adress"
        :value="item.id"
        v-model="model"
      />

      {{ item.locality }}, {{ item.index }}, {{ item.street }} {{ item.house }},
      кв. {{ item.flat }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.adress-item {
  background: $bgWhite;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;

  .circle {
    margin-top: 2px;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    border: 1px solid $bgBlack;
  }
  input {
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    &:before {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      background: #000;
      border-radius: 100%;
      top: 4px;
      left: 2px;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  }
}
</style>
