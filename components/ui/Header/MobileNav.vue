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

        <div class="menu-bottom">
          <NuxtLink to="/cart" @click="isOpenState.closeNav()" class="cart-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_3001_29014"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#000" />
              </mask>
              <g mask="url(#mask0_3001_29014)">
                <path
                  d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V8C4 7.45 4.19583 6.97917 4.5875 6.5875C4.97917 6.19583 5.45 6 6 6H8C8 4.9 8.39167 3.95833 9.175 3.175C9.95833 2.39167 10.9 2 12 2C13.1 2 14.0417 2.39167 14.825 3.175C15.6083 3.95833 16 4.9 16 6H18C18.55 6 19.0208 6.19583 19.4125 6.5875C19.8042 6.97917 20 7.45 20 8V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM6 20H18V8H16V10C16 10.2833 15.9042 10.5208 15.7125 10.7125C15.5208 10.9042 15.2833 11 15 11C14.7167 11 14.4792 10.9042 14.2875 10.7125C14.0958 10.5208 14 10.2833 14 10V8H10V10C10 10.2833 9.90417 10.5208 9.7125 10.7125C9.52083 10.9042 9.28333 11 9 11C8.71667 11 8.47917 10.9042 8.2875 10.7125C8.09583 10.5208 8 10.2833 8 10V8H6V20ZM10 6H14C14 5.45 13.8042 4.97917 13.4125 4.5875C13.0208 4.19583 12.55 4 12 4C11.45 4 10.9792 4.19583 10.5875 4.5875C10.1958 4.97917 10 5.45 10 6Z"
                  fill="#000"
                />
              </g>
            </svg>
            <p>Корзина:</p>
            <p>{{ token ? cart.products.length : cart.products?.length }}</p>
          </NuxtLink>
          <div class="div"></div>

          <NuxtLink to="/profile" class="profile-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 18V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z"
              />
            </svg>
            <p>Личный кабинет</p>
          </NuxtLink>

          <NuxtLink to="/favorites" class="favorites-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20.3254C11.7667 20.3254 11.5292 20.2837 11.2875 20.2004C11.0458 20.1171 10.8333 19.9837 10.65 19.8004L8.925 18.2254C7.15833 16.6087 5.5625 15.0046 4.1375 13.4129C2.7125 11.8212 2 10.0671 2 8.15039C2 6.58372 2.525 5.27539 3.575 4.22539C4.625 3.17539 5.93333 2.65039 7.5 2.65039C8.38333 2.65039 9.21667 2.83789 10 3.21289C10.7833 3.58789 11.45 4.10039 12 4.75039C12.55 4.10039 13.2167 3.58789 14 3.21289C14.7833 2.83789 15.6167 2.65039 16.5 2.65039C18.0667 2.65039 19.375 3.17539 20.425 4.22539C21.475 5.27539 22 6.58372 22 8.15039C22 10.0671 21.2917 11.8254 19.875 13.4254C18.4583 15.0254 16.85 16.6337 15.05 18.2504L13.35 19.8004C13.1667 19.9837 12.9542 20.1171 12.7125 20.2004C12.4708 20.2837 12.2333 20.3254 12 20.3254ZM11.05 6.75039C10.5667 6.06706 10.05 5.54622 9.5 5.18789C8.95 4.82956 8.28333 4.65039 7.5 4.65039C6.5 4.65039 5.66667 4.98372 5 5.65039C4.33333 6.31706 4 7.15039 4 8.15039C4 9.01706 4.30833 9.93789 4.925 10.9129C5.54167 11.8879 6.27917 12.8337 7.1375 13.7504C7.99583 14.6671 8.87917 15.5254 9.7875 16.3254C10.6958 17.1254 11.4333 17.7837 12 18.3004C12.5667 17.7837 13.3042 17.1254 14.2125 16.3254C15.1208 15.5254 16.0042 14.6671 16.8625 13.7504C17.7208 12.8337 18.4583 11.8879 19.075 10.9129C19.6917 9.93789 20 9.01706 20 8.15039C20 7.15039 19.6667 6.31706 19 5.65039C18.3333 4.98372 17.5 4.65039 16.5 4.65039C15.7167 4.65039 15.05 4.82956 14.5 5.18789C13.95 5.54622 13.4333 6.06706 12.95 6.75039C12.8333 6.91706 12.6917 7.04206 12.525 7.12539C12.3583 7.20872 12.1833 7.25039 12 7.25039C11.8167 7.25039 11.6417 7.20872 11.475 7.12539C11.3083 7.04206 11.1667 6.91706 11.05 6.75039Z"
              />
            </svg>
            <p>Избранное</p></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile-nav {
  overflow-x: hidden;
  padding-top: 88px;
  padding-bottom: 40px;
  display: block;
  position: absolute;
  width: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
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
