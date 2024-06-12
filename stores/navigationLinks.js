import { defineStore } from "pinia";

export const useMyNavigationLinksStore = defineStore(
  "myNavigationLinksStore",
  () => {
    const links = ref([
      {
        id: 1,
        slug: "women",
        title: "Women",
        categories: [],
        collections: [],
      },
      {
        id: 2,
        slug: "men",
        title: "Men",
        categories: [],
        collections: [],
      },
      {
        id: 3,
        slug: "new",
        title: "New",
        categories: [],
        collections: [],
      },
      {
        id: 4,
        slug: "gifts",
        title: "Gifts",
        categories: [],
        collections: [],
      },
      {
        id: 5,
        slug: "sale",
        title: "Sale",
        categories: [],
        collections: [],
      },
    ]);

    const getCategories = async () => {
      await $fetch("http://45.135.234.37:80/api/v1/categories").then((res) => {
        links.value[0].categories = res;
        links.value[1].categories = res;
      });
    };

    const getCollections = async () => {
      await $fetch("http://45.135.234.37:80/api/v1/collections").then((res) => {
        links.value[0].collections = res;
        links.value[1].collections = res;
      });
    };

    getCategories();
    getCollections();

    return { links };
  }
);
