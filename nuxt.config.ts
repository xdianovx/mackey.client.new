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
    "@nuxtjs/tailwindcss",
    "@weareheavy/nuxt-cookie-consent",
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
  cookieConsent: {
    provider: "cookieinformation",
    culture: "RU", // Replace with the culture you want to apply
  },

  build: {
    transpile: ["gsap"],
  },
});
