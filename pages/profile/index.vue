<script setup>
definePageMeta({
  middleware: ["auth"],
});

const { isGray } = storeToRefs(useIsPageGrayStore());
const { userData } = storeToRefs(authStore());

const { getAll: getOrders } = ordersStore();
const { orders } = storeToRefs(ordersStore());

await getOrders();
</script>

<template>
  <main :class="{ gray: isGray }">
    <WidgetsProfileTop />
    <WidgetsProfileUserInfo :data="userData" />

    <section class="widgets">
      <div class="container">
        <div class="widgets__wrap">
          <WidgetsProfileWidget text="Постоянная скидка" />
          <WidgetsProfileWidget link="/profile/" text="Мои промокоды" />
          <WidgetsProfileWidget
            link="/profile/adreses"
            text="Мои адреса доставки"
          />
          <WidgetsProfileWidget link="/profile/" text="История заказов" />
        </div>
      </div>
    </section>

    <section class="orders-section">
      <div class="container">
        <div class="orders-wrap">
          <WidgetsProfileOrder
            :data="item"
            v-for="item in orders"
            :key="item.id"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.gray {
  background: #f5f5f5;
}

.top {
  margin-top: 120px;
}

.widgets {
  margin-top: 16px;
}

.widgets__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.orders-section {
  margin-top: 64px;
}

.orders-wrap {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

@media screen and (max-width: 1200px) {
  .widgets {
    margin-top: 8px;
  }
  .widgets__wrap {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
}

@media screen and (max-width: 550px) {
  .widgets {
    margin-top: 8px;
  }
  .widgets__wrap {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
