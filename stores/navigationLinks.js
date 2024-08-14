import { defineStore } from "pinia";

export const useMyNavigationLinksStore = defineStore(
  "myNavigationLinksStore",
  () => {
    const links = ref([]);
    const loading = ref(false);

    const getMenu = async () => {
      loading.value = true;
      await $fetch(API_ROUTE + "/api/v1/get_menu/all").then((res) => {
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
