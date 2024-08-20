// import { defineStore } from "pinia";
// import { API_ROUTE } from "~/lib/constants";
// import { authStore } from "~/stores/auth.js";
// import { useCookies } from "@vueuse/integrations/useCookies";
// const cookies = useCookies();

// export const cartNewStore = defineStore("newCartStore", () => {
//   const fetchWithCookie = async (event) => {
//     /* Get the response from the server endpoint */
//     const res = await $fetch.raw(API_ROUTE + "/cart_no_reg/show", {});
//     /* Get the cookies from the response */
//     const cookies = res.headers.getSetCookie();
//     /* Attach each cookie to our incoming Request */
//     // for (const cookie of cookies) {
//     //   appendResponseHeader(event, "set-cookie", cookie);
//     // }
//     /* Return the data of the response */

//     console.log(cookies);

//     return res._data;
//   };

//   return { fetchWithCookie };
// });
