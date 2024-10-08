import { defineStore } from "pinia";
import { API_ROUTE } from "~/lib/constants";

export const useMyCollectionsStore = defineStore("myCollectionsStore", () => {
  const collections = ref();

  const getAll = async (genere = "") => {
    await $fetch(API_ROUTE + `/collections/${genere}`).then(
      (res) => (collections.value = res)
    );
  };

  const getWomen = async () => {
    await $fetch(API_ROUTE + `/collections/women`).then(
      (res) => (collections.value = res)
    );
  };

  return { collections, getAll, getWomen };
});
