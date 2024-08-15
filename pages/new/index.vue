<script setup>
const { getAll } = useMyCollectionsStore();
const { collections } = storeToRefs(useMyCollectionsStore());

await getAll("women");
</script>
<template>
  <main>
    <section class="mt-[59px]">
      <div class="flex flex-col gap-20">
        <WidgetsCollectionSliderSection
          v-for="item in collections.splice(0, 3)"
          :key="item.id"
          :data="item"
        />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
