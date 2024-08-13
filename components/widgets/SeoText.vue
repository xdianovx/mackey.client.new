<script setup>
const isOpen = ref(false);
const isHomePage = ref(false);
const route = useRoute();

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
});

const open = () => {
  isOpen.value = !isOpen.value;
};

if (route.path === "/") {
  isHomePage.value = true;
}
</script>

<template>
  <section class="seo-section" :class="{ black: isHomePage }">
    <div class="container">
      <div class="div"></div>

      <div class="top" @click="open">
        <h2 class="title">{{ title ? title : "SEO текст" }}</h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          :class="{ active: isOpen }"
          fill="black"
        >
          <path
            d="M12.0001 15.9536C11.8668 15.9536 11.7418 15.9328 11.6251 15.8911C11.5084 15.8495 11.4001 15.7786 11.3001 15.6786L6.70011 11.0786C6.51678 10.8953 6.42094 10.6661 6.41261 10.3911C6.40428 10.1161 6.50011 9.87863 6.70011 9.67863C6.88344 9.49529 7.11678 9.40362 7.40011 9.40362C7.68344 9.40362 7.91678 9.49529 8.10011 9.67863L12.0001 13.5536L15.9001 9.67863C16.0834 9.49529 16.3126 9.39946 16.5876 9.39112C16.8626 9.38279 17.1001 9.47863 17.3001 9.67863C17.4834 9.86196 17.5751 10.0953 17.5751 10.3786C17.5751 10.662 17.4834 10.8953 17.3001 11.0786L12.7001 15.6786C12.6001 15.7786 12.4918 15.8495 12.3751 15.8911C12.2584 15.9328 12.1334 15.9536 12.0001 15.9536Z"
          />
        </svg>
      </div>

      <div class="content" :class="{ active: isOpen }">
        <div class="content__inner" v-html="text ? text : 'SEO текст'"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.seo-section {
  margin-top: 200px;
  background: $bgWhite;

  &.black {
    background: $bgBlack;
    color: $textWhite;
    margin-top: 0;
    border-bottom: 1px solid rgba($bgWhite, 0.2);
    svg {
      fill: $bgWhite;
    }
  }
}
.div {
  width: 100%;
  height: 1px;
  background: rgba($bgBlack, 0.2);
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  cursor: pointer;

  svg {
    display: block;
    transition: all 0.3s ease-in-out;

    &.active {
      transform: rotate(180deg);
    }
  }
}

.title {
  font-size: 16px;
}

.content__inner {
  padding: 24px 0 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  color: $textGray;

  &.active {
    max-height: 1000px;
    height: auto;
  }
}
</style>
