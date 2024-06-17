// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: [
    "~/assets/styles/main.scss",
    "primevue/resources/themes/viva-light/theme.css",
  ],

  modules: ["@pinia/nuxt", "nuxt-primevue", "@nuxtjs/i18n"],

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
  // auth: {
  //   provider: {
  //     type: "local",
  //   },
  // },
});