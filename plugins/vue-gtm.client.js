import { defineNuxtPlugin } from "#app";
import { createGtm } from "@gtm-support/vue-gtm";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createGtm({
      id: "GTM-5WF2C8R6",
      defer: false,
      compatibility: false,
      enabled: true,
      debug: true,
      loadScript: true,
      vueRouter: useRouter(),
      trackOnNextTick: false,
    })
  );
});
