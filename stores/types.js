import { defineStore } from "pinia";

export const useMyTypesStore = defineStore("myTypesStore", () => {
  const types = ref([]);

  const getAll = async () => {
    await $fetch("http://45.135.234.37:80/api/v1/types", {}).then(
      (res) => (types.value = res)
    );
  };

  return { types, getAll };
});
