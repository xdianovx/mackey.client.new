<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="item">
    <h4 class="title">Способ оплаты</h4>
    <div class="inner">
      <!-- item -->
      <label class="method">
        <input type="radio" name="1" checked />
        <div class="circle"></div>
        <div class="method-info">
          <h4 class="method-title">
            <img src="@/assets/icons/checkout/card.svg" alt="1" />
            <span>Банковской картой онлайн</span>
          </h4>
          <p class="method-text">
            Платеж осуществляется через стороннюю, защищенную систему «Name»
          </p>

          <div class="method-cards">
            <img src="@/assets/icons/checkout/visa.svg" alt="1" />
            <img src="@/assets/icons/checkout/mc.svg" alt="1" />
            <img src="@/assets/icons/checkout/mir.svg" alt="1" />
            <img src="@/assets/icons/checkout/bc.svg" alt="1" />
          </div>
        </div>
      </label>

      <!-- item -->
      <label class="method">
        <input type="radio" name="1" checked />
        <div class="circle"></div>
        <div class="method-info">
          <h4 class="method-title">
            <img src="@/assets/icons/checkout/applepay.svg" alt="1" />
          </h4>
          <p class="method-text">
            Платеж осуществляется c помощью системы Apple Pay
          </p>
        </div>
      </label>

      <!-- item -->
      <label class="method">
        <input type="radio" name="1" checked />
        <div class="circle"></div>
        <div class="method-info">
          <h4 class="method-title">
            <img src="@/assets/icons/checkout/oplati.svg" alt="1" />
            <span>Приложение «Оплати»</span>
          </h4>
          <p class="method-text">
            Оплата с помощью баланса кошелька в приложении «Оплати»
          </p>
        </div>
      </label>

      <!-- item -->
      <label class="method">
        <input type="radio" name="1" checked />
        <div class="circle"></div>
        <div class="method-info">
          <h4 class="method-title">
            <img src="@/assets/icons/checkout/timer.svg" alt="1" />
            <span>Карты рассрочек</span>
          </h4>
          <p class="method-text">
            Платеж осуществляется через стороннюю, защищенную систему «Name»
          </p>

          <div class="method-cards">
            <img src="@/assets/icons/checkout/halva.svg" alt="1" />
            <img src="@/assets/icons/checkout/kp.svg" alt="1" />
          </div>
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
</style>
