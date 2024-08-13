import { defineStore } from "pinia";

export const useMyCategoriesStore = defineStore("myCategoriesStore", () => {
  const categories = ref([]);

  const getAll = async (genre = "") => {
    await $fetch(`http://45.135.234.37:8000/api/v1/categories/${genre}`).then(
      (res) => (categories.value = res)
    );
  };

  return { categories, getAll };
});
