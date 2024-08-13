import { defineStore } from "pinia";

export const useMyProductsStore = defineStore("myProductsStore", () => {
  const products = ref([]);
  const filterParams = ref([]);

  const getAll = async (params) => {
    await $fetch("http://45.135.234.37:8000/api/v1/products", {
      params: {
        ...params,
        "categories[]": params?.categories,
      },
    })
      .then((res) => (products.value = res))
      .then(() => {});
  };

  const getSort = (opt) => {
    console.log(opt);
    $fetch("http://45.135.234.37:8000/api/v1/products", {
      params: opt,
    }).then((res) => (products.value = res));
  };

  return { products, getAll, getSort, filterParams };
});
