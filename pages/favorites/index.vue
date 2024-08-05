<script setup>
const { items } = storeToRefs(useFavoritesStore());
</script>

<template>
  <main>
    <section class="mt-[100px] max-[1200px]:mt-[80px]">
      <div class="container">
        <UiTitle tag="h2"
          >Избранное
          <span class="text-neutral-400">({{ items.length }})</span></UiTitle
        >
      </div>
    </section>
    <section class="mt-8 mb-10 h-full max-[1200px]:mt-[20px]">
      <div class="container h-full">
        <div
          v-if="items.length > 0"
          class="grid grid-cols-4 gap-y-10 gap-x-4 max-[1200px]:grid-cols-3 max-[768px]:grid-cols-2 max-[768px]:gap-x-2"
        >
          <WidgetsProductCard
            v-for="item in items"
            :key="item.id"
            :data="item"
          />
        </div>

        <div class="h-full flex items-center justify-center" v-else>
          <UiTitle tag="h2" class="mt-10 text-center"
            >В избранном пока ничего нет</UiTitle
          >
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
