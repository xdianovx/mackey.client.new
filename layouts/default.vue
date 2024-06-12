<script setup>
import Footer from "~/components/widgets/Footer.vue";
import Header from "../components/widgets/Header";

const route = useRoute();
const isHomePageStore = useIsHomePageStore();
const { isHome } = storeToRefs(useIsHomePageStore());

const linksStore = useMyNavigationLinksStore();
const { links } = storeToRefs(linksStore);
const { isOpen: isProductPadeDrawerOpen } = storeToRefs(
  useMyProductPageDrawerStore()
);

const { isOpen: isFilterOpen } = storeToRefs(useMyIsFilterOpenStore());

useHead({
  bodyAttrs: {
    class: () => {
      if (isProductPadeDrawerOpen.value || isFilterOpen.value) {
        return "active";
      } else {
        return "";
      }
    },
  },
});
</script>

<template>
  <NuxtLoadingIndicator color="#000" />
  <div class="wrap">
    <Header />

    <slot />

    <Footer />
  </div>
</template>

<style lang="scss">
body {
  overflow-x: hidden;
}

.wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  main {
    flex-grow: 1;
  }
}
</style>
