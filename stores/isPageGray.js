import { defineStore } from "pinia";

export const useIsPageGrayStore = defineStore("myIsPageGrayStore", () => {
  const route = useRoute();
  const isGray = ref(false);

  function setIsGray() {
    isGray.value = true;
  }

  function setIsNotGray() {
    isGray.value = false;
  }

  if (
    route.path === "/profile" ||
    route.path === "/profile/edit" ||
    route.path === "/register"
  ) {
    setIsGray();
  } else {
    setIsNotGray();
  }
  console.log(route.path);

  watch(
    () => route.path,
    () => {
      if (
        route.path === "/profile" ||
        route.path === "/profile/edit" ||
        route.path === "/register"
      ) {
        console.log(route.path);

        setIsGray();
      } else {
        setIsNotGray();
      }
    }
  );
  return { isGray };
});
