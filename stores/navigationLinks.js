import { defineStore } from "pinia";

export const useMyNavigationLinksStore = defineStore(
  "myNavigationLinksStore",
  () => {
    const links = ref([]);
    const loading = ref(false);

    const getMenu = async () => {
      loading.value = true;
      await $fetch("http://45.135.234.37:80/api/v1/get_menu/all").then(
        (res) => {
          links.value = res;
          loading.value = false;
        }
      );
    };

    return {
      links,
      getMenu,
      loading,
    };
  }
);
