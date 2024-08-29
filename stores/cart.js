import { defineStore } from "pinia";

export const cartStore = defineStore("myCartStore", () => {
  const config = useRuntimeConfig();
  const token = useCookie("auth-token");
  const thanksData = ref();
  const checkoutErrors = ref();
  const checkoutResponce = ref();
  const cart = ref({
    total_products_quantity: 0,
    total_products_price: 0,
    total_products_price_with_discount: 0,
    client_profile_id: 0,
    products: [],
  });
  const loading = ref(false);

  // Add to cart
  const addToCart = async (product, quantity = 1) => {
    if (token.value) {
      await $fetch(config.public.API_URL + `/cart/store_product`, {
        method: "POST",
        body: { product_id: product.id, quantity: quantity },
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }).then(() => {
        showCart();
      });
    } else {
      $fetch(
        config.public.API_URL +
          `/cart_no_reg/store_product?product_id=${product.id}&quantity=1`,
        {
          method: "POST",
          credentials: "include",
        }
      ).then(() => {
        showCart();
      });
    }
  };

  // Получение корзины
  const showCart = async () => {
    loading.value = true;
    if (token.value) {
      await $fetch(config.public.API_URL + `/cart/show`, {
        onResponse({ request, response, options }) {
          cart.value = response._data;
          loading.value = false;
        },
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
    } else {
      $fetch(config.public.API_URL + "/cart_no_reg/show", {
        credentials: "include",
      }).then((res) => {
        cart.value = res;
        loading.value = false;
      });
    }
  };

  // Очистка корзины
  const removeFormCart = async (productId) => {
    if (token.value) {
      loading.value = true;

      await $fetch(config.public.API_URL + `/cart/delete_product`, {
        method: "delete",
        body: { product_id: productId },
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }).then(() => {
        loading.value = false;
        showCart();
      });
    } else {
      await $fetch(config.public.API_URL + `/cart_no_reg/delete_product`, {
        method: "delete",
        body: { product_id: productId },
        credentials: "include",

        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }).then(() => {
        loading.value = false;
        showCart();
      });
    }
  };

  // Изменение количества в корзине

  const editProductCount = async (id, quantity) => {
    loading.value = true;
    if (token.value) {
      await $fetch(
        config.public.API_URL + `/cart/update_product?_method=PATCH`,
        {
          method: "POST",

          body: { product_id: id, quantity: quantity },
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      ).then(() => {
        showCart().then(() => {
          loading.value = false;
        });
      });
    } else {
      await $fetch(
        config.public.API_URL + `/cart_no_reg/update_product?_method=PATCH`,
        {
          method: "POST",
          credentials: "include",
          body: { product_id: id, quantity: quantity },
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      ).then(() => {
        showCart().then(() => {
          loading.value = false;
        });
      });
    }
  };

  const createOrder = async (body, pay_type, delivery_type) => {
    console.log(pay_type, delivery_type);

    loading.value = true;
    if (token.value) {
      await $fetch(config.public.API_URL + `/new-order/store`, {
        method: "POST",
        body: body,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        onResponse({ request, response, options }) {
          checkoutResponce.value = response._data;
          loading.value = false;

          if (pay_type == 1 && response._data.status != "error") {
            navigateTo(response._data.data.redirectUrl, { external: true });
            checkoutResponce.value = response._data;
            checkoutErrors.value = response._data;
          } else {
            checkoutErrors.value = response._data;
            // navigateTo("/", { external: true });
          }
        },

        onResponseError({ request, response, options }) {
          loading.value = false;
        },
      });
    } else {
      await $fetch(config.public.API_URL + `/new-order/store-not-reg`, {
        method: "POST",
        body: body,
        onResponse({ request, response, options }) {
          checkoutResponce.value = response._data;
          loading.value = false;

          if (pay_type == 1 && response._data.status != "error") {
            navigateTo(response._data.data.redirectUrl, { external: true });
            checkoutResponce.value = response._data;
            checkoutErrors.value = response._data;
          } else {
            checkoutErrors.value = response._data;

            // navigateTo("/", { external: true });
          }
        },

        onResponseError({ request, response, options }) {
          checkoutErrors.value = response._data;
          loading.value = false;
        },
      });
    }
  };

  return {
    cart,
    showCart,
    addToCart,
    loading,
    thanksData,
    removeFormCart,
    editProductCount,
    createOrder,
    checkoutErrors,
    checkoutResponce,
  };
});
