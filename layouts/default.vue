<script setup>
import Footer from "~/components/widgets/Footer.vue";
import Header from "../components/widgets/Header";
import { useAuth } from "~/composables/useAuth";
const { getMe } = authStore();
const { isOpen: isProductPadeDrawerOpen } = storeToRefs(
  useMyProductPageDrawerStore()
);
const { isOpen: isFilterOpen } = storeToRefs(useMyIsFilterOpenStore());
const { isOpen: isSearchOpen } = storeToRefs(useIsSearchBar());
const { isNavOpen } = storeToRefs(useNavOpen());

const isPageLoading = ref(true);

onBeforeMount(() => {
  isPageLoading.value = true;
  getMe();
});

useSeoMeta({});

onMounted(() => {
  const auth = useAuth();
  auth.checkAuth();
});

onMounted(() => {
  isPageLoading.value = false;
});

useHead({
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  bodyAttrs: {
    class: () => {
      if (
        isProductPadeDrawerOpen.value ||
        isFilterOpen.value ||
        isSearchOpen.value ||
        isNavOpen.value
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
  <!-- <YandexMetrikaInformer /> -->
  <WidgetsLoader v-if="isPageLoading" />
  <NuxtLoadingIndicator color="#000" />
  <div class="wrap-main">
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

.wrap-main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  main {
    flex-grow: 1;
  }
}
</style>
