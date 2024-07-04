<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="item">
    <div class="title">
      <h4>
        Заказ от {{ useDateFormat(data.created_at) }}
        <span>{{ data?.order_num }}</span>
      </h4>
    </div>

    <div class="inner">
      <div class="inner-top">
        <WidgetsProfileOrderStatus :status="data?.status_id" />
      </div>

      <div class="hr"></div>

      <div class="inner-cost">
        <h4 class="inner-cost-title">Стоимость заказа</h4>

        <p>{{ data?.total_price }} BYN</p>
      </div>

      <div class="hr"></div>

      <div class="deliver-wrap">
        <div>
          <h4 class="deliver-title">Доставка в отделение «Белпочты»</h4>
          <p class="deliver-address">Гродно, 246046, улица Дубко 20, кв. 39</p>
        </div>

        <div class="deliver-cost">0 BYN</div>
      </div>

      <div class="hr"></div>

      <div class="products">
        <div class="product" v-for="item in data.products">
          <div class="image">
            <img :src="item.product_files[0]?.file" alt="" />
          </div>

          <div>
            <h5 class="product-title">{{ item?.title }}</h5>
            <p class="product-sku">{{ item?.vendor_code }}</p>
          </div>

          <div class="product-price">{{ item?.discounted_price }} BYN</div>
        </div>
      </div>

      <div class="hr"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  h4 {
    span {
      font-weight: 400;
      color: rgba(#000, 0.5);
    }
  }
}

.inner {
  margin-top: 16px;
  background: $bgWhite;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.inner-cost {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
}

.hr {
  width: 100%;
  height: 1px;
  background: rgba(#000, 0.1);
}

.deliver-wrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.deliver-title {
  font-size: 14px;
}
.deliver-address {
  font-size: 14px;
}
.deliver-cost {
  font-size: 14px;
}

.products {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.product {
  display: flex;
  gap: 16px;
  .image {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
}

.product-title {
  font-size: 14px;
}

.product-sku {
  font-size: 14px;
}

.product-price {
  margin-left: auto;
  font-size: 14px;
}
</style>
