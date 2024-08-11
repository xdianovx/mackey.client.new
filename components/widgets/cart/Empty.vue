<script setup>
const links = [
  { id: 1, title: "Women", slug: "women" },
  { id: 2, title: "Men", slug: "men" },
  { id: 3, title: "Новинки", slug: "new" },
  { id: 4, title: "Sale", slug: "sale" },
];
</script>

<template>
  <section class="h-full">
    <div class="pt-[160px] flex flex-col items-center max-[1024px]:pt-[100px]">
      <h2 class="text-center text-[24px] font-semibold leading-[120%]">
        В вашей корзине пока <br />
        ничего нет
      </h2>

      <div
        class="flex mt-8 gap-6 max-[1024px]:flex-col max-[1024px]:items-center"
      >
        <NuxtLink
          v-for="link in links"
          class="underline"
          :key="link.id"
          :to="`/${link.slug}`"
          >{{ link.title }}</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
