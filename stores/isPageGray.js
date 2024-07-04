import { defineStore } from "pinia";

export const useIsPageGrayStore = defineStore("myIsPageGrayStore", () => {
  const route = useRoute();
  const isGray = ref(false);

  const pagesList =
    route.path === "/profile" ||
    route.path === "/profile/edit" ||
    route.path === "/profile/adreses" ||
    route.path === "/register" ||
    route.path === "/checkout";

  function setIsGray() {
    isGray.value = true;
  }

  function setIsNotGray() {
    isGray.value = false;
  }

  if (pagesList) {
    setIsGray();
  } else {
    setIsNotGray();
  }

  watch(
    () => route.path,
    () => {
      if (pagesList) {
        setIsGray();
      } else {
        setIsNotGray();
      }
    }
  );
  return { isGray };
});
