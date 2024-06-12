import { defineStore } from "pinia";

export const useMyIsFilterOpenStore = defineStore("myIsFilterOpenStore", () => {
  const isOpen = ref(false);

  const open = () => {
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
  };

  return { isOpen, open, close };
});
