import { defineStore } from "pinia";
import { API_ROUTE } from "~/lib/constants";

export const adresesStore = defineStore("myAdresesStore", () => {
  const loading = ref(false);
  const adreses = ref([]);
  const token = useCookie("auth-token");
  const config = useRuntimeConfig();

  const getAll = async () => {
    await useFetch(config.public.API_URL + `/profile/аddresses/`, {
      onResponse({ request, response, options }) {
        adreses.value = response._data;
      },
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  };

  const create = async (data) => {
    await useFetch(config.public.API_URL + `/profile/аddresses/store`, {
      method: "post",
      body: data,
      onResponse({ request, response, options }) {
        adreses.value = response._data;
        getAll();
      },
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  };

  return { loading, adreses, getAll, create };
});
