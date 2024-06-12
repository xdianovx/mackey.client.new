import { defineStore } from "pinia";

export const useIsHomePageStore = defineStore("myIsHomePageStore", () => {
  const route = useRoute();
  const isHome = ref(false);

  if (route.path === "/") {
    setIsHome();
  } else {
    isHome.value === false;
    setIsNotHome();
  }

  function setIsHome() {
    isHome.value = true;
  }

  function setIsNotHome() {
    isHome.value = false;
  }

  watch(
    () => route.path,
    () => {
      if (route.path === "/") {
        setIsHome();
      } else {
        setIsNotHome();
      }
    }
  );

  return { isHome, setIsHome, setIsNotHome };
});
