<script setup>
const { getWomen } = useMyCollectionsStore();
const { collections } = storeToRefs(useMyCollectionsStore());

await getWomen();
</script>

<template>
  <main>
    <WidgetsFilterSectionCollections :enable-filter="false" />

    <div class="collection-sliders">
      <WidgetsCollectionSliderSection
        v-for="item in collections"
        :key="item.id"
        :data="item"
      />
    </div>

    <WidgetsSeoText />
  </main>
</template>

<style lang="scss" scoped>
.collection-sliders {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 100px;
}

@media screen and (max-width: 1200px) {
  .collection-sliders {
    margin-top: 16px;
  }
}
</style>
