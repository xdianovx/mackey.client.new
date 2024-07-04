import { defineStore } from "pinia";
import { API_ROUTE } from "~/lib/constants";
import { authStore } from "~/stores/auth.js";

export const cartStore = defineStore("myCartStore", () => {
  const token = useCookie("auth-token");
  const cart = ref([]);
  const loading = ref(false);
  const { userData } = storeToRefs(authStore());

  const getAll = async () => {};

  const showCart = async () => {
    if (userData.value.id) {
      await useFetch(API_ROUTE + `/cart/show`, {
        onResponse({ request, response, options }) {
          cart.value = response._data;
        },
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
    } else {
      console.log("notlogin");
    }
  };

  const addToCart = async (id, quantity = 1) => {
    if (userData.value.id) {
      await $fetch(API_ROUTE + `/cart/store_product`, {
        method: "POST",
        body: { product_id: id, quantity: quantity },
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }).then(() => {
        showCart();
      });
    } else {
      console.log("notlogin");
      // localStorage.setItem('token', response._data.token)
    }
  };

  const removeFormCart = async (productId) => {
    loading.value = true;
    if (userData.value.id) {
      await $fetch(API_ROUTE + `/cart/delete_product`, {
        method: "delete",
        body: { product_id: productId },
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }).then(() => {
        showCart();
      });
    } else {
      console.log("notlogin");
      // localStorage.setItem('token', response._data.token)
    }
  };

  const editProductCount = async (id, quantity) => {
    loading.value = true;
    if (userData.value.id) {
      await $fetch(API_ROUTE + `/cart/update_product?_method=PATCH`, {
        method: "POST",
        body: { product_id: id, quantity: quantity },
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }).then(() => {
        showCart();
        loading.value = false;
      });
    } else {
      console.log("notlogin");
      // localStorage.setItem('token', response._data.token)
    }
  };

  const createOrder = async (body) => {
    if (userData.value.id) {
      await $fetch(API_ROUTE + `/new-order/store`, {
        method: "POST",
        body: body,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }).then((res) => {
        navigateTo(res.data.redirectUrl, { external: true });
      });
    } else {
      console.log("notlogin");
      // localStorage.setItem('token', response._data.token)
    }
  };

  showCart();

  return {
    cart,
    getAll,
    showCart,
    addToCart,
    loading,
    removeFormCart,
    editProductCount,
    createOrder,
  };
});
