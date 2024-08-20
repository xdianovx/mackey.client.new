// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  optimization: {},
  css: ["~/assets/styles/main.scss"],
  // ssr: false,
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@fullpage/nuxt-fullpage",
    "nuxt-yandex-metrika",
    "@nuxtjs/tailwindcss",
    "nuxt-gtag",
  ],
  plugins: ["~/plugins/vue-the-mask.js"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_vars.scss" as *;',
        },
      },
    },
  },
  gtag: {
    id: "G-0WLYQFS3S4",
  },
  yandexMetrika: {
    id: "88212734",
    // debug: process.env.NODE_ENV !== "production",
    // delay: 0,
    // cdn: false,
    // verification: null, // Verification in Yandex Webmaster
    options: {
      webvisor: true,
    },
  },
  build: {
    transpile: ["gsap"],
  },
});
