// const { $api } = useNuxtApp();

export const cartService = {
  async getCart() {
    await $api("/cart/show", {
      onResponse({ request, response, options }) {
        cart.value = response._data;
      },
    });
  },
};
