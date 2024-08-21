import { defineStore } from "pinia";

export const useMyNavigationLinksStore = defineStore(
  "myNavigationLinksStore",
  () => {
    const config = useRuntimeConfig();
    const links = ref([]);
    const loading = ref(false);

    const getMenu = async () => {
      loading.value = true;
      await $fetch(config.public.API_URL + "/get_menu/all").then((res) => {
        links.value = res;
        loading.value = false;
      });
    };

    return {
      links,
      getMenu,
      loading,
    };
  }
);
