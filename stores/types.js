import { defineStore } from "pinia";

export const useMyTypesStore = defineStore("myTypesStore", () => {
  const types = ref([]);

  const getAll = async () => {
    await $fetch(API_ROUTE + "/api/v1/types", {}).then(
      (res) => (types.value = res)
    );
  };

  return { types, getAll };
});
