import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide(
    "fancybox",
    Fancybox.bind("[data-fancybox]", {
      Carousel: {
        Navigation: false,
        Panzoom: {
          decelFriction: 0.5,
        },
      },
      Toolbar: {
        display: {
          left: [],
          middle: ["prev", "next"],
          right: ["close"],
        },
      },
    })
  );
});
