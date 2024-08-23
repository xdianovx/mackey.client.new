<template>
  <div class="absolute w-full h-full bg-black/30 z-[100]">
    <div
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { useScrollControl } from "@/composables/useScrollControl"; // Импортируем composable

const props = defineProps({
  isLoading: Boolean,
});

const { disableScroll, enableScroll } = useScrollControl();

watch(
  () => props.isLoading,
  (newVal) => {
    if (newVal) {
      disableScroll(); // Блокируем прокрутку при показе прелоадера
    } else {
      enableScroll(); // Разблокируем прокрутку при скрытии прелоадера
    }
  }
);
</script>
