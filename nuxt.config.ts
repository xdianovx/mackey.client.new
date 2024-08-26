// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  optimization: {},
  css: ["~/assets/styles/main.scss"],
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  app: {
    head: {
      meta: [{ name: "yandex-verification", content: "024593913d1bd3d6" }],
      script: [
        {
          type: "text/javascript",
          innerHTML:
            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5WF2C8R6');",
        },
      ],
      // noscript: [
      //   {
      //     innerHTML:
      //       "<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-5WF2C8R6' height='0' width='0' style='display:none;visibility:hidden'></iframe>",
      //   },
      // ],
    },
  },
  // ssr: false,
  modules: [
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@fullpage/nuxt-fullpage",
    "nuxt-yandex-metrika",
    "@nuxtjs/tailwindcss",
    "nuxt-gtag",
    [
      "yandex-metrika-module-nuxt3",
      {
        id: "88212734",
        eccommerce: true,
      },
    ],
    "@nuxtjs/sitemap",
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

  site: {
    url: "https://makey.by",
    name: "Makey",
  },

  sitemap: {
    urls: async () => {
      const res = await $fetch("https://api.makey.by/api/v1/products");
      const products = res.data;
      return products.map((product) => ({
        url: `/product/${product.slug}`,
        lastmod: product.updated_at,
      }));
    },
    sources: [
      //     async fetch() {
      //       const res = await $fetch("https://api.makey.by/api/v1/products");
      //       const products = res.data;
      //       return products.map((product) => ({
      //         url: `/product/${product.slug}`,
      //         lastmod: product.updated_at,
      //       }));
      //     },
    ],

    // sources: ["https://api.makey.by/api/v1/products/data"],
  },
  build: {
    transpile: ["gsap", "vue-sonner"],
  },
});
