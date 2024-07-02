// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: "http://45.135.234.37:80/api/v1",
    },
  },
  // devtools: { enabled: true },
  css: [
    "~/assets/styles/main.scss",
    "primevue/resources/themes/viva-light/theme.css",
  ],

  modules: [
    "@pinia/nuxt",
    "nuxt-primevue",
    "@nuxtjs/i18n",
    "@vee-validate/nuxt",
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
  primevue: {
    components: {
      include: ["Slider"],
    },
  },
  build: {
    transpile: ["gsap"],
  },
});
