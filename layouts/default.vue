<script setup>
import Footer from "~/components/widgets/Footer.vue";
import Header from "../components/widgets/Header";
const { getMe } = authStore();
const { isOpen: isProductPadeDrawerOpen } = storeToRefs(
  useMyProductPageDrawerStore()
);
const { isOpen: isFilterOpen } = storeToRefs(useMyIsFilterOpenStore());
const { isOpen: isSearchOpen } = storeToRefs(useIsSearchBar());

getMe();
const isPageLoading = ref(true);

onBeforeMount(() => {
  isPageLoading.value = true;
});

onMounted(() => {
  console.log("created");
  isPageLoading.value = false;
});

useHead({
  bodyAttrs: {
    class: () => {
      if (
        isProductPadeDrawerOpen.value ||
        isFilterOpen.value ||
        isSearchOpen.value
      ) {
        return "active";
      } else {
        return "";
      }
    },
  },
});
</script>

<template>
  <WidgetsLoader v-if="isPageLoading" />
  <NuxtLoadingIndicator color="#000" />
  <div class="wrap">
    <Header />

    <WidgetsSearchBar />
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
