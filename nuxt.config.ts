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
        // {
        //   hid: "gtm-script",
        //   innerHTML: `(function(w,d,s,l,i){
        //     w[l]=w[l]||[];
        //     w[l].push({'gtm.start':
        //     new Date().getTime(),event:'gtm.js'});
        //     var f=d.getElementsByTagName(s)[0],
        //         j=d.createElement(s),
        //         dl=l!='dataLayer'?'&l='+l:'';
        //     j.async=true;
        //     j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        //     f.parentNode.insertBefore(j,f);
        //   })(window,document,'script','dataLayer','GTM-5WF2C8R6');`,
        //   type: "text/javascript",
        // },
        //   {
        //     innerHTML: `<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11414669347"></script>
        //       <script>
        //         window.dataLayer = window.dataLayer || [];
        //         function gtag(){dataLayer.push(arguments);}
        //         gtag('js', new Date());gtag('config', 'AW-11414669347');
        //       </script>
        //     `,
        //     type: "text/javascript",
        //   },
        // ],
        // noscript: [
        //   {
        //     innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WF2C8R6" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        //   },
      ],
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
    "@zadigetvoltaire/nuxt-gtm",
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
    id: "AW-11414669347",
  },

  site: {
    url: "https://makey.by",
    name: "Makey",
  },

  sitemap: {
    sources: ["/api/sitemap"],
  },

  gtm: {
    id: "GTM-5WF2C8R6", // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']

    defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
    compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
    trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
    devtools: true, // (optional)
  },

  build: {
    transpile: ["gsap", "vue-sonner"],
  },
});
