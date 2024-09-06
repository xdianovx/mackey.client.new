import { defineStore } from "pinia";
import { API_ROUTE } from "~/lib/constants";

export const useMyProductsStore = defineStore("myProductsStore", () => {
  const products = ref([]);
  const filterParams = ref([]);
  const config = useRuntimeConfig();

  const getAll = async (params) => {
    await $fetch(config.public.API_URL + "/products", {
      params: {
        ...params,
        "categories[]": params?.categories,
      },
    })
      .then((res) => (products.value = res))
      .then(() => {});
  };

  const getSort = (opt) => {
    $fetch(API_ROUTE + "/products", {
      params: opt,
    }).then((res) => (products.value = res));
  };

  return { products, getAll, getSort, filterParams };
});
