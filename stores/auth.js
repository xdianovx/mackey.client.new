import { defineStore } from "pinia";

export const useMyAuthStore = defineStore("myAuthStore", () => {
  const jwt = ref();

  return { jwt };
});
