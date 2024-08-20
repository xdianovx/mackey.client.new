import { appendResponseHeader } from "h3";
import { API_ROUTE } from "~/lib/constants";

export const fetchWithCookie = async (event: any) => {
  const res = await $fetch.raw(API_ROUTE + "/cart_no_reg/show");
  const cookies = res.headers.getSetCookie();
  for (const cookie of cookies) {
    appendResponseHeader(event, "set-cookie", cookie);
  }
  return res._data;
};
