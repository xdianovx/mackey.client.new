<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
const props = defineProps(["data"]);
const isActive = ref(false);
const isHover = ref(false);
const { isHome } = storeToRefs(useIsHomePageStore());
const header = ref();

let ctx;
let tl;

const showMenu = () => {
  isHover.value = true;
  isActive.value = true;
  tl.play();
};
const hideMenu = () => {
  isHover.value = false;
  isActive.value = false;
  tl.reverse();
};

onMounted(() => {
  ctx = gsap.context((self) => {
    const menu = self.selector(".sub-links");
    const link = self.selector(".link-anim");

    const linkCollection = self.selector(".link-collection-anim");

    tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.3,
      },
    });

    tl.to(menu, {
      y: 0,
    })
      .from(link, {
        y: -20,
        opacity: 0,
        stagger: 0.02,
      })
      .from(
        linkCollection,
        {
          y: -20,
          opacity: 0,
          stagger: 0.02,
        },
        "<"
      );
  }, header.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="link" ref="header" @mouseleave="hideMenu" @mouseenter="showMenu">
    <NuxtLink
      :to="`/${data.slug}`"
      v-if="data.slug === 'women' || data.slug === 'men'"
      class="parent-link"
    >
      {{ data.title }}
    </NuxtLink>

    <NuxtLink :to="`/${data.slug}`" v-else class="parent-link cursor-pointer">
      {{ data.title }}
    </NuxtLink>

    <div
      class="sub-links"
      :class="{ white: !isHome }"
      v-if="data.slug === 'women' || data.slug === 'men'"
    >
      <div class="container">
        <div class="sub-links-wrap">
          <div class="categories">
            <NuxtLink
              @click="hideMenu"
              class="link-anim"
              :to="`/${data.slug}/${item.slug}`"
              :key="item.id"
              v-for="item in data.categories"
            >
              {{ item.title }}
            </NuxtLink>
          </div>

          <div class="collections" v-if="data.collections">
            <NuxtLink
              @click="hideMenu"
              :to="`/kolliektsiia/${data.slug}`"
              class="collections-title link-collection-anim"
              >Коллекции</NuxtLink
            >

            <div class="collections-wrap">
              <NuxtLink
                @click="hideMenu"
                :to="`/kolliektsiia/${item.slug}`"
                class="collections-link link-collection-anim"
                v-for="item in data?.collections"
              >
                {{ item.title }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sub-links" :class="{ white: !isHome }" v-else>
      <div class="container">
        <div class="sub-links-wrap gap-2">
          <NuxtLink
            @click="hideMenu"
            class="link-anim"
            :to="`/${data.slug}/women`"
          >
            Women
          </NuxtLink>

          <NuxtLink
            @click="hideMenu"
            class="link-anim"
            :to="`/${data.slug}/men`"
          >
            Men
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link {
  &.active {
    background: pink;
    color: $textWhite;
  }
}

.collections-wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 18px;
}

.collections-link {
}

.parent-link {
  position: relative;
  z-index: 3;
  // color: $textBlack;
}
.sub-links {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  transform: translateY(-100%);
  background: $bgBlack;
  color: $textWhite;

  &.white {
    background: $bgWhite;
    color: $textBlack;
  }
}

.sub-links-wrap {
  padding: 86px 0 120px;
  display: flex;
  gap: 80px;
  padding-left: calc(10% + 84px);
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.collections-title {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
}

.link-collection-anim {
  transition: color 0.2s ease-in-out;

  &:hover {
    color: $textGray;
  }
}
</style>
