<script setup>
import Footer from "~/components/widgets/Footer.vue";
import Header from "../components/widgets/Header";
import { useAuth } from "~/composables/useAuth";
import { Toaster } from "vue-sonner";
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
  htmlAttrs: { lang: "ru" },
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
  <noscript
    ><iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-5WF2C8R6"
      height="0"
      width="0"
      style="display: none; visibility: hidden"
    ></iframe
  ></noscript>

  <WidgetsLoader v-if="isPageLoading" />
  <Toaster
    position="top-center"
    offset="120px"
    :toastOptions="{
      unstyled: true,
      classes: {
        toast: 'bg-white top-10 p-1 shadow-xl rounded-xl',
      },
    }"
  />
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
