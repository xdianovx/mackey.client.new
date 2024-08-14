import { defineStore } from "pinia";
import { API_ROUTE } from "~/lib/constants";

export const useMyTypesStore = defineStore("myTypesStore", () => {
  const types = ref([]);

  const getAll = async () => {
    await $fetch(API_ROUTE + "/api/v1/types", {}).then(
      (res) => (types.value = res)
    );
  };

  return { types, getAll };
});
