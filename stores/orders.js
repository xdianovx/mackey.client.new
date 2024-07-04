import { defineStore } from "pinia";
import { API_ROUTE } from "~/lib/constants";

export const ordersStore = defineStore("myOrdersStore", () => {
  const loading = ref(false);
  const orders = ref([]);
  const token = useCookie("auth-token");

  const getAll = async () => {
    await useFetch(API_ROUTE + `/profile/orders/`, {
      onResponse({ request, response, options }) {
        orders.value = response._data;
      },
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  };

  return { loading, orders, getAll };
});
