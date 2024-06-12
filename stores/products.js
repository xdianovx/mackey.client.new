import { defineStore } from "pinia";

export const useMyProductsStore = defineStore("myProductsStore", () => {
  const products = ref([]);

  const getAll = async (params) => {
    await $fetch("http://45.135.234.37:80/api/v1/products", {
      params: {
        ...params,
        "categories[]": params?.categories,
      },
    }).then((res) => (products.value = res));
  };

  return { products, getAll };
});
