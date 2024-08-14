import { defineStore } from "pinia";
import { API_ROUTE } from "~/lib/constants";

export const useMyProductsStore = defineStore("myProductsStore", () => {
  const products = ref([]);
  const filterParams = ref([]);

  const getAll = async (params) => {
    await $fetch(API_ROUTE + "/products", {
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
    $fetch(API_ROUTE + "/products", {
      params: opt,
    }).then((res) => (products.value = res));
  };

  return { products, getAll, getSort, filterParams };
});
