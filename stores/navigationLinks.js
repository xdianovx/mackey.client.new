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

    const getCategories = async () => {
      loading.value = true;
      await $fetch("http://45.135.234.37:80/api/v1/categories").then((res) => {
        links.value[0].categories = res;
        links.value[1].categories = res;
        loading.value = false;
      });
    };

    const getCollections = async () => {
      loading.value = true;
      await $fetch("http://45.135.234.37:80/api/v1/collections").then((res) => {
        links.value[0].collections = res;
        links.value[1].collections = res;
        loading.value = false;
      });
    };

    const getAll = async () => {
      await getCategories();
      await getCollections();
    };

    return {
      links,
      getCategories,
      getCollections,
      getMenu,
      getAll,
      loading,
    };
  }
);
