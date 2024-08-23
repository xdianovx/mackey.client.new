import { onMounted, onUnmounted } from "vue";

// Composable для управления прокруткой
export function useScrollControl() {
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
  };

  onMounted(() => {
    disableScroll();
  });

  onUnmounted(() => {
    enableScroll();
  });

  // Возвращаем функции для возможности включения/выключения прокрутки по необходимости
  return {
    disableScroll,
    enableScroll,
  };
}
