<script setup>
const model = defineModel();
const props = defineProps(["data", "deliveryMethodData"]);

const setDeliveryRef = (item) => {
  props.deliveryMethodData = item;
};
</script>

<template>
  <div class="item">
    <h4 class="title">Способ доставки</h4>

    <div class="inner">
      <label class="method" v-for="item in data">
        <input
          type="radio"
          @change="setDeliveryRef(item)"
          v-model="model"
          :value="item.id"
          name="2"
          checked
        />
        <div class="circle"></div>
        <div class="method-info grow">
          <h4 class="method-title w-full">
            <span>{{ item.title }}</span>
            <span class="method-price ml-auto">{{ item.price }} BYN</span>
          </h4>
          <div class="method-text" v-html="item.description"></div>
        </div>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.title {
  font-size: 16px;
}

.inner {
  background: $bgWhite;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

//

.method {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  cursor: pointer;

  input {
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    // left: -9999px;
    // opacity: 0;

    &:before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background: #000;
      border-radius: 100%;
      top: 5px;
      left: 3px;
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

.method-title {
  display: flex;
  align-items: center;
  gap: 4px;
}

.circle {
  margin-top: 2px;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  border: 1px solid $bgBlack;
}

.method-text {
  margin-top: 12px;
  font-size: 14px;
  color: rgba($textBlack, $alpha: 0.5);
}

.method-cards {
  margin-top: 8px;
  display: flex;
  gap: 4px;
}

.method-price {
  margin-left: auto;
  color: rgba($textBlack, $alpha: 0.5);
  font-weight: normal;
}
</style>
