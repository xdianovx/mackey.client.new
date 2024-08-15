<script setup>
const props = defineProps(["data"]);
const route = useRoute();
import gsap from "gsap";
import { onUnmounted, onMounted } from "vue";

const isOpen = ref(false);
const { closeNav } = useNavOpen();
watch(
  () => route.path,
  () => {
    closeNav();
  }
);

let ctx;
let tl;
const container = ref();

onMounted(() => {
  ctx = gsap.context((self) => {
    const chevron = self.selector(".chevron");
    const content = self.selector(".sub-links");

    tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.2,
      },
    });

    tl.to(content, {
      height: "auto",
    }).to(
      chevron,
      {
        rotate: 90,
      },
      "<"
    );
  }, container.value);
});

onUnmounted(() => {
  ctx.revert();
});

const toggleContent = () => {
  if (isOpen.value) {
    isOpen.value = false;
    tl.reverse();
  } else {
    isOpen.value = true;
    tl.play();
  }
};
</script>

<template>
  <div class="link" ref="container">
    <div class="top" @click="toggleContent">
      <div>{{ data.title }}</div>
      <div class="chevron">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3167 8.0013L5.41674 3.1013C5.25007 2.93464 5.16952 2.73741 5.17507 2.50964C5.18063 2.28186 5.26674 2.08464 5.43341 1.91797C5.60007 1.7513 5.7973 1.66797 6.02507 1.66797C6.25285 1.66797 6.45007 1.7513 6.61674 1.91797L11.7334 7.0513C11.8667 7.18464 11.9667 7.33464 12.0334 7.5013C12.1001 7.66797 12.1334 7.83464 12.1334 8.0013C12.1334 8.16797 12.1001 8.33463 12.0334 8.5013C11.9667 8.66797 11.8667 8.81797 11.7334 8.9513L6.60007 14.0846C6.43341 14.2513 6.23896 14.3319 6.01674 14.3263C5.79452 14.3207 5.60007 14.2346 5.43341 14.068C5.26674 13.9013 5.18341 13.7041 5.18341 13.4763C5.18341 13.2485 5.26674 13.0513 5.43341 12.8846L10.3167 8.0013Z"
          />
        </svg>
      </div>
    </div>

    <div class="sub-links" v-if="data.slug === 'women' || data.slug === 'men'">
      <div class="sub-links__inner">
        <NuxtLink :to="`/${data.slug}`">Смотреть все</NuxtLink>
        <NuxtLink
          :to="`/${data.slug}/${item.slug}`"
          v-for="item in data.categories"
          >{{ item.title }}</NuxtLink
        >
      </div>

      <div class="collections">
        <p class="collection-title">Коллекции</p>

        <div class="collection-wrap">
          <NuxtLink
            class="collection-link"
            :to="`/kolliektsiia/${item.slug}`"
            v-for="item in data.collections"
            >{{ item.title }}</NuxtLink
          >
        </div>
      </div>
    </div>

    <div class="sub-links" v-else>
      <div class="sub-links__inner">
        <div class="flex gap-3">
          <NuxtLink :to="`/${data.slug}`" v-if="data.slug !== 'new'"
            >Все</NuxtLink
          >
          <NuxtLink :to="`/${data.slug}/women`">Women</NuxtLink>
          <NuxtLink :to="`/${data.slug}/men`">Men</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collections {
  margin-top: 32px;
  margin-bottom: 32px;
}

.collection-wrap {
  margin-top: 24px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
}

.collection-title {
  font-size: 16px;
}

.collection-link {
  color: #808080;
  font-size: 14px;
}

.top {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  line-height: 20px;
}
.sub-links {
  height: 0;
  overflow: hidden;
}

.sub-links__inner {
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  color: $textGray;
  gap: 12px;
  font-size: 14px;
}
</style>
