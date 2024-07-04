import { defineStore } from "pinia";
import { API_ROUTE } from "~/lib/constants";

export const colorsStore = defineStore("myColorsStore", () => {
  const colors = ref([]);

  const getAll = async () => {
    await $fetch(API_ROUTE + "/colors", {}).then((res) => {
      colors.value = res;
    });
  };

  getAll();

  return { colors, getAll };
});
