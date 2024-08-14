<script setup>
import { API_ROUTE } from "~/lib/constants";
import CloseBtn from "../ui/Filter/CloseBtn.vue";

const { close } = useIsSearchBar();
const { isOpen } = storeToRefs(useIsSearchBar());

const { isHome } = storeToRefs(useIsHomePageStore());

const searchStr = ref("");
const searchResults = ref({
  notFound: false,
  data: {},
});
const isLoading = ref(false);

const searchHandler = () => {
  isLoading.value = true;
  $fetch(API_ROUTE + "/products", {
    params: {
      search: searchStr.value,
    },
  }).then((res) => {
    searchResults.value.data = [];
    searchResults.value.notFound = false;

    if (res.data.length > 0) {
      searchResults.value.data = res.data;
    } else {
      searchResults.value.notFound = true;
    }
    isLoading.value = false;
  });
};

const clearSearch = () => {
  searchStr.value = "";
  searchResults.value.data = "";
  searchResults.value.notFound = false;
  close();
};
</script>

<template>
  <div class="search-item" :class="{ active: isOpen, black: isHome }">
    <div class="container">
      <div class="search-top">
        <div class="search-input">
          <IconsLoupe />
          <input
            type="text"
            v-model="searchStr"
            placeholder="Поиск по makey.by"
          />
        </div>
        <div class="search-btns" :class="{ black: isHome }">
          <CloseBtn @click="clearSearch" />
          <button
            class="search-submit"
            @click="searchHandler"
            v-if="searchStr.length > 0"
          >
            Искать
          </button>
        </div>
      </div>

      <div class="search-results">
        <!-- {{ isLoading }} -->
        <div
          class="search-results-products"
          v-if="searchResults.data.length > 0"
        >
          <UiSearchProductCard
            v-for="item in searchResults.data"
            :key="item.id"
            :data="item"
          />
        </div>

        <div class="search-not-found" v-if="searchResults.notFound">
          Извините, по вашему запросу ничего не найдено.
        </div>
      </div>
    </div>
  </div>

  <div class="overflow" :class="{ active: isOpen }" @click="close"></div>
</template>

<style lang="scss" scoped>
.overflow {
  position: fixed;
  height: 100vh;
  width: 100%;
  background: rgba($bgBlack, 0.3);
  z-index: 3;
  transition: transform 0.3s ease-in-out;
  transform: translateY(-100%);
  &.active {
    transform: translateY(56px);
  }
}
.search-item {
  background: $bgWhite;
  padding: 88px 0 80px;
  position: fixed;
  transform: translateY(-100%);
  left: 0;
  width: 100%;
  z-index: 4;
  transition: transform 0.3s ease-in-out;

  &.black {
    background: $bgBlack;
    color: $textWhite;

    input {
      color: $textWhite;
    }
    svg {
      fill: white;
      fill-opacity: 1;
    }
  }
  &.active {
    transform: translateY(0);
  }
}

.search-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-input {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  svg {
    display: block;
  }

  input {
    width: 100%;
  }
}

.search-btns {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
  svg {
    display: block;
  }
  &.black {
    background: $bgBlack;
    color: $textWhite;

    svg {
      fill: white;
      fill-opacity: 1;
    }

    .search-submit {
      &::before {
        background: $textWhite;
      }
    }
  }
}

.search-submit {
  display: block;
  position: relative;
  margin-bottom: 3px;
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    background: $textBlack;
    width: 100%;
    bottom: 0;
  }
}

.search-results {
  margin-top: 24px;
  max-height: calc(100vh - 180px);
  overflow-y: auto;
}

.search-results-products {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
}

@media screen and (max-width: 1024px) {
  .search-item {
    padding: 64px 0 40px;
  }
}
</style>
