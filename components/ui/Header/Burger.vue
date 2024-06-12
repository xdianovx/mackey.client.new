<script setup>
const { isNavOpen } = storeToRefs(useNavOpen());
const { toggleNav } = useNavOpen();
const { isHome } = storeToRefs(useIsHomePageStore());
</script>

<template>
  <button
    class="burger"
    :class="{ active: isNavOpen, white: !isHome }"
    @click="toggleNav"
  >
    <span class="top"></span>
    <span class="bottom"></span>
  </button>
</template>

<style lang="scss" scoped>
.burger {
  width: 24px;
  height: 24px;
  position: relative;

  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 18px;
    height: 2px;
    background: $bgWhite;
    border-radius: 2px;
  }

  &.active {
    .top {
      top: 18px;
      transform: rotate(45deg) translateX(-50%);
    }

    .bottom {
      bottom: 17px;
      transform: rotate(-45deg) translateX(-50%);
    }

    &.white span {
      background: $bgWhite;
    }
  }

  &.white {
    span {
      background: $bgBlack;
    }
  }
}

.top {
  top: 7px;
  transition: all 0.2s ease-in-out;
}

.bottom {
  bottom: 7px;
  transition: all 0.2s ease-in-out;
}
</style>
