import { defineStore } from "pinia";
import { API_ROUTE } from "~/lib/constants";

export const useMyCategoriesStore = defineStore("myCategoriesStore", () => {
  const categories = ref([]);

  const getAll = async (genre = "") => {
    await $fetch(API_ROUTE + `/categories/${genre}`).then(
      (res) => (categories.value = res)
    );
  };

  return { categories, getAll };
});
