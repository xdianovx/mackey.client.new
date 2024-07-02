<script setup>
import gsap from "gsap";

const props = defineProps(["title"]);
const isOpen = ref(true);

const item = ref();
let ctx;
let tl;

const show = () => {
  if (isOpen.value) {
    isOpen.value = false;
    tl.reverse();
  } else {
    isOpen.value = true;
    tl.play();
  }
};

onMounted(() => {
  ctx = gsap.context((self) => {
    const head = self.selector(".top");
    const content = self.selector(".content");

    gsap.set(content, {
      height: "auto",
    });

    tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.3,
        ease: "power2.inOut",
      },
    });

    tl.to(content, {
      height: 0,
    });
  }, item.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="dropdown" ref="item">
    <div class="top" @click="show">
      <h3 class="title">{{ title }}</h3>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="black"
        :class="{ active: isOpen }"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0001 15.95C11.8668 15.95 11.7418 15.9291 11.6251 15.8875C11.5084 15.8458 11.4001 15.775 11.3001 15.675L6.70011 11.075C6.51678 10.8916 6.42094 10.6625 6.41261 10.3875C6.40428 10.1125 6.50011 9.87496 6.70011 9.67496C6.88344 9.49163 7.11678 9.39996 7.40011 9.39996C7.68344 9.39996 7.91678 9.49163 8.10011 9.67496L12.0001 13.55L15.9001 9.67496C16.0834 9.49163 16.3126 9.3958 16.5876 9.38746C16.8626 9.37913 17.1001 9.47496 17.3001 9.67496C17.4834 9.8583 17.5751 10.0916 17.5751 10.375C17.5751 10.6583 17.4834 10.8916 17.3001 11.075L12.7001 15.675C12.6001 15.775 12.4918 15.8458 12.3751 15.8875C12.2584 15.9291 12.1334 15.95 12.0001 15.95Z"
        />
      </svg>
    </div>

    <div class="content">
      <div class="inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 8px 0;
  svg {
    display: block;
    margin-left: auto;
    transition: transform 0.2s ease-in-out;
    &.active {
      transform: rotate(180deg);
    }
  }
}

.title {
  font-size: 16px;
  font-weight: 600;
}
.inner {
  padding-top: 12px;
}

.content {
  overflow: hidden;
  // height: 0;
}
</style>
