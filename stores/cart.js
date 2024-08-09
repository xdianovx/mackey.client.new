import { defineStore } from "pinia";
import { API_ROUTE } from "~/lib/constants";
import { authStore } from "~/stores/auth.js";
import { useCookies } from "@vueuse/integrations/useCookies";
const cookies = useCookies();

export const cartStore = defineStore("myCartStore", () => {
  const token = useCookie("auth-token");
  const cart = ref([]);
  const cartGuest = ref([]);
  const loading = ref(false);
  const { userData } = storeToRefs(authStore());
  const CART_KEY = "cart";

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

  const addToCartLocal = (product, quantity) => {
    const existingItemIndex = cart.value?.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      cart.value[existingItemIndex].quantity += quantity;
    } else {
      cart.value.push({
        id: product.id,
        quantity: quantity,
        product_files: product.product_files,
        title: product.title,
        slug: product.slug,
        vendor_code: product.vendor_code,
        colors: product.colors,
        price: product.price,
        discounted_price: product.discounted_price,
      });
    }

    saveCartCookie();
  };

  const saveCartCookie = async () => {
    await cookies.set(CART_KEY, JSON.stringify(cart.value), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  };

  // Получение корзины

  const showCart = async () => {
    if (token.value) {
      await getCartFromServer();
    } else {
      const cartData = (await cookies.get(CART_KEY)) || [];
      cart.value = cartData;
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
      cart.value = cart.value.filter((item) => item.id !== productId);

      saveCartCookie();
    }
  };

  // Изменение количества в корзине

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

  // Сохранение корзины в localStorage

  return {
    cart,
    showCart,
    cartGuest,
    addToCart,
    loading,
    removeFormCart,
    editProductCount,
    createOrder,
  };
});
