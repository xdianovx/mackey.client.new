<script setup></script>

<template>
  <div class="item">
    <h4 class="title">Способ доставки</h4>
    <div class="inner">
      <!-- item -->
      <label class="method">
        <input type="radio" name="2" checked />
        <div class="circle"></div>
        <div class="method-info">
          <h4 class="method-title">
            <span>Курьером по Минску</span>
            <span class="method-price">0 BYN</span>
          </h4>
          <p class="method-text">
            Доставка день в день при оформлении заказа до 13:00, на следующий
            день при оформлении заказа после 13:00
          </p>
        </div>
      </label>

      <!-- item -->
      <label class="method">
        <input type="radio" name="2" checked />
        <div class="circle"></div>
        <div class="method-info">
          <h4 class="method-title">
            <span>В отделение «Европочты»</span>
            <span class="method-price">0 BYN</span>
          </h4>
          <p class="method-text">Какой-то текст Срок доставки 3-4 дня</p>
        </div>
      </label>

      <!-- item -->
      <label class="method">
        <input type="radio" name="2" checked />
        <div class="circle"></div>
        <div class="method-info">
          <h4 class="method-title">
            <span>В отделение «Белпочты»</span>
            <span class="method-price">0 BYN</span>
          </h4>
          <p class="method-text">Какой-то текст Срок доставки 3-4 дня</p>
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
