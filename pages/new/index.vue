<script setup>
import { seoData } from "~/lib/seo";

const { getWomen } = useMyCollectionsStore();
const { collections } = storeToRefs(useMyCollectionsStore());

getWomen();

const slug = "new";
const seo = seoData[slug];
useSeoMeta({
  title: seo?.title || "Makey.by",
  description: seo?.description || "Makey.by",
});
</script>
<template>
  <main>
    <section class="mt-[59px]">
      <div class="flex flex-col gap-20">
        <WidgetsCollectionSliderSection
          v-for="item in collections?.splice(0, 3)"
          :key="item.id"
          :data="item"
        />
      </div>
    </section>
    <WidgetsSeoText :title="seo?.text.title" :text="seo?.text.content" />
  </main>
</template>

<style lang="scss" scoped></style>
