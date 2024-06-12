import { defineStore } from "pinia";

export const useMyCategoriesStore = defineStore("myCategoriesStore", () => {
  const categories = ref([]);

  const getAll = async () => {
    await $fetch("http://45.135.234.37:80/api/v1/categories").then(
      (res) => (categories.value = res)
    );
  };

  getAll();

  return { categories, getAll };
});
