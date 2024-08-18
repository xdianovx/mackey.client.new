import { defineStore } from "pinia";
import { API_ROUTE } from "~/lib/constants";
import { authStore } from "~/stores/auth.js";
import { useCookies } from "@vueuse/integrations/useCookies";
const cookies = useCookies();

export const cartStore = defineStore("myCartStore", () => {
  const token = useCookie("auth-token");
  const thanksData = ref();
  const checkoutErrors = ref();
  const cart = ref({
    total_products_quantity: 0,
    total_products_price: 0,
    total_products_price_with_discount: 0,
    client_profile_id: 0,
    products: [],
  });
  const loading = ref(false);
  const { userData } = storeToRefs(authStore());

  const getTotalProductsQuantity = () => {
    cart.value.total_products_price_with_discount = cart.value.products.reduce(
      (sum, item) => sum + item.quantity * item.discounted_price,
      0
    );

    cart.value.total_products_price = cart.value.products.reduce(
      (sum, item) => sum + item.quantity * +item.price,
      0
    );
  };

  getTotalProductsQuantity();

  // Добавление в корзину
  const addToCart = async (product, quantity = 1) => {
    if (token.value) {
      addToCartServer(product.id, quantity);
    } else {
      addToCartLocal(product, quantity);
    }
  };

  const addToCartServer = async (id, quantity) => {
    await $fetch(API_ROUTE + `/cart/store_product`, {
      method: "POST",
      body: { product_id: id, quantity: quantity },
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then(() => {
      showCart();
    });
  };

  const addToCartLocal = async (product, quantity) => {
    await useFetch(API_ROUTE + `/cart_no_reg/store_product`, {
      method: "POST",
      params: { product_id: product.id, quantity: quantity },
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  // Получение корзины

  const showCart = async () => {
    if (token.value) {
      await getCartFromServer();
    } else {
      await useFetch(API_ROUTE + `/cart_no_reg/show`, {
        onResponse({ request, response, options }) {
          cart.value = response._data;
          console.log(response._data);
        },
      });
    }
  };

  const getCartFromServer = async () => {
    await useFetch(API_ROUTE + `/cart/show`, {
      onResponse({ request, response, options }) {
        cart.value = response._data;
      },
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  };

  // Очистка корзины
  const removeFormCart = async (productId) => {
    if (token.value) {
      loading.value = true;

      await $fetch(API_ROUTE + `/cart/delete_product`, {
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
      cart.value.products = cart.value.products.filter(
        (item) => item.id !== productId
      );

      saveCartCookie();
      getTotalProductsQuantity();
    }
  };

  // Изменение количества в корзине

  const editProductCount = async (id, quantity) => {
    if (token.value) {
      loading.value = true;
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
      const product = cart.value.products?.find((item) => item.id === id);
      if (product) {
        if (quantity > 0) {
          product.quantity = quantity;
        }
        saveCartCookie();
      }

      getTotalProductsQuantity();
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
      await $fetch(API_ROUTE + `/new-order/store-not-reg`, {
        method: "POST",
        body: {
          ...body,
          client_data: {
            ...body.client_data,
            phone: body.client_data.phone.replace(/[^\d+]/g, ""),
          },
        },
      })
        .then((res) => {
          if (res.type == "pri-poluchenii") {
            thanksData.value = res;

            // cookies.remove(CART_KEY, { path: "/" });
          } else {
            navigateTo(res.data.redirectUrl, { external: true });
          }
        })
        .catch((err) => {
          checkoutErrors.value = err;
        });
    }
  };

  showCart();

  // Сохранение корзины в localStorage

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
  };
});
