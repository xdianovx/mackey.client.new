// stores/favorites.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { API_ROUTE } from "~/lib/constants";

// Хранилище для избранных товаров с использованием ref
export const useFavoritesStore = defineStore("favorites", () => {
  // Состояние хранилища, хранящее избранные товары
  // const items = ref(JSON.parse(localStorage.getItem("favorites") || "[]"));
  const items = ref([]);

  const loadFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("favorites");
      if (storedItems) {
        items.value = JSON.parse(storedItems);
      }
    }
  };

  onMounted(() => {
    loadFromLocalStorage();
  });

  // Геттеры
  const isFavorite = (item: any) =>
    items.value.some((fav: any) => fav.id === item.id);
  const favoritesCount = () => items.value.length;

  // Действия
  const addItem = (item: any) => {
    if (!isFavorite(item)) {
      items.value.push(item);
      saveToLocalStorage();
    }
  };

  const removeItem = (item: any) => {
    items.value = items.value.filter((i: any) => i.id !== item.id);
    saveToLocalStorage();
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(items.value));
  };

  const clearFavorites = () => {
    items.value = [];
    saveToLocalStorage();
  };

  return {
    items,
    isFavorite,
    favoritesCount,
    addItem,
    removeItem,
    clearFavorites,
  };
});
