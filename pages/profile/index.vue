<script setup>
const { isGray } = storeToRefs(useIsPageGrayStore());
const { userData } = storeToRefs(authStore());

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <main :class="{ gray: isGray }">
    <WidgetsProfileTop />
    <WidgetsProfileUserInfo :data="userData" />

    <section class="widgets">
      <div class="container">
        <div class="widgets__wrap">
          <WidgetsProfileWidget text="Постоянная скидка" />
          <WidgetsProfileWidget link="/profie/" text="Мои промокоды" />
          <WidgetsProfileWidget link="/profie/" text="Мои адреса доставки" />
          <WidgetsProfileWidget link="/profie/" text="История заказов" />
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
