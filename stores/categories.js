import { defineStore } from "pinia";

export const useMyCategoriesStore = defineStore("myCategoriesStore", () => {
  const categories = ref([]);

  const getAll = async (genre = "") => {
    await $fetch(API_ROUTE + `/api/v1/categories/${genre}`).then(
      (res) => (categories.value = res)
    );
  };

  return { categories, getAll };
});
