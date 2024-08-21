<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";

const isOpenState = useNavOpen();
const { isNavOpen } = storeToRefs(useNavOpen());
const { links } = storeToRefs(useMyNavigationLinksStore());
const { cart } = storeToRefs(cartStore());
const { token } = storeToRefs(authStore());

let ctx;
let tl;
const nav = ref();

onMounted(() => {
  ctx = gsap.context((self) => {
    const menu = self.selector(".mobile-nav");
    tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.2,
      },
    });

    tl.to(menu, {
      top: 0,
    });
  }, nav.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="mobile-nav" :class="{ active: isNavOpen }" ref="nav">
    <div class="container">
      <div class="menu">
        <nav class="menu-wrap">
          <UiHeaderMobileLinkGroup
            :key="item.id"
            v-for="item in links"
            :data="item"
          />
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile-nav {
  overflow-x: hidden;
  padding-top: 120px;
  padding-bottom: 40px;
  display: block;
  position: absolute;
  width: 100%;
  height: 100vh;
  height: webkit-fill-available;
  background: $bgBlack;
  top: -100vh;
  z-index: -1;
  transition: all 0.3s ease-in-out;
  color: $textWhite;

  &.active {
    top: 0;
    background: #000;
  }
}

.menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 48px;
}

.menu-wrap {
  display: flex;
  gap: 8px;
  flex-direction: column;
}

.menu-bottom {
  margin-top: auto;
  display: flex;
  flex-direction: column;
}

.cart-btn {
  display: flex;
  align-items: center;
  background: $bgWhite;
  color: $textBlack;
  justify-content: center;
  padding: 15px;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  font-weight: 600;

  svg {
    margin-right: 8px;
  }

  p {
    margin-right: 6px;
  }
}

.div {
  height: 1px;
  background: $bgWhite;
  opacity: 0.5;
  margin: 24px 8px;
}

.profile-btn {
  display: flex;
  padding: 14px;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  color: $textWhite;
  font-weight: 600;
  border: 1px solid $bgWhite;
  justify-content: center;
  gap: 8px;
}

.favorites-btn {
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  font-weight: 600;
}
</style>
