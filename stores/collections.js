import { defineStore } from "pinia";

export const useMyCollectionsStore = defineStore("myCollectionsStore", () => {
  const collections = ref();

  const getAll = async (genere = "") => {
    await $fetch(`http://45.135.234.37:80/api/v1/collections/${genere}`).then(
      (res) => (collections.value = res)
    );
  };

  const getWomen = async () => {
    await $fetch(`http://45.135.234.37:80/api/v1/collections/women`).then(
      (res) => (collections.value = res)
    );
  };

  return { collections, getAll, getWomen };
});
