<script setup>
const { links, loading } = storeToRefs(useMyNavigationLinksStore());
const { getAll, getMenu } = useMyNavigationLinksStore();
const { isHome } = storeToRefs(useIsHomePageStore());

import HeaderCart from "../ui/Header/HeaderCart.vue";
import FavoriteBtn from "../ui/Header/FavoriteBtn.vue";
import SearchBtn from "../ui/Header/SearchBtn.vue";
import Burger from "../ui/Header/Burger.vue";
import MobileNav from "../ui/Header/MobileNav.vue";
import UserLogin from "../ui/Header/UserLogin.vue";

await getMenu();
</script>

<template>
  <header class="header" :class="{ black: !isHome }">
    <MobileNav />
    <div class="container">
      <div class="header__wrap">
        <UiHeaderLogo />
        <nav class="header__nav">
          <UiHeaderLink
            v-if="!loading"
            v-for="item in links"
            :key="item.id"
            :data="item"
          />
        </nav>

        <div class="header__btns">
          <SearchBtn />
          <HeaderCart />
          <div class="div" :class="{ black: !isHome }"></div>
          <FavoriteBtn />
          <UserLogin />
        </div>

        <div class="header__btns-mob">
          <SearchBtn />
          <Burger />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 8px 0;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  color: $textWhite;
  z-index: 20;

  &.black {
    color: $textBlack;
    background: $bgWhite;
  }

  .container {
    // z-index: 2;
    // position: relative;
  }
}

.header__wrap {
  display: flex;
  align-items: center;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 56px;
  margin-left: 10%;
}

.header__btns {
  margin-left: auto;
  display: flex;
  gap: 24px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.header__btns-mob {
  display: none;
}

.div {
  width: 1px;
  height: 24px;
  background: $bgGray;

  &.black {
    background: $bgBlack;
  }
}

@media screen and (max-width: 1280px) {
  .header {
    padding: 14px 0;
  }
  .header__nav {
    display: none;
  }

  .header__btns {
    display: none;
  }

  .header__btns-mob {
    display: flex;
    margin-left: auto;
    gap: 24px;
  }
}
</style>
