// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: "http://45.135.234.37:80/api/v1",
    },
  },

  optimization: {},
  // spaLoadingTemplate:
  // devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  extends: ["nuxt-modal"],
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@fullpage/nuxt-fullpage",
    "@nuxtjs/tailwindcss"
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_vars.scss" as *;',
        },
      },
    },
  },

  build: {
    transpile: ["gsap"],
  },
});