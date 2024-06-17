<script setup>
const props = defineProps(["data"]);
const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="item">
    <div class="top" @click="toggle">
      <h4>{{ data.title }}</h4>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="black"
        :class="{ active: isOpen }"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0001 14.95C11.8668 14.95 11.7418 14.9291 11.6251 14.8875C11.5084 14.8458 11.4001 14.775 11.3001 14.675L6.70011 10.075C6.51678 9.89163 6.42094 9.66246 6.41261 9.38746C6.40428 9.11246 6.50011 8.87496 6.70011 8.67496C6.88344 8.49163 7.11678 8.39996 7.40011 8.39996C7.68344 8.39996 7.91678 8.49163 8.10011 8.67496L12.0001 12.55L15.9001 8.67496C16.0834 8.49163 16.3126 8.3958 16.5876 8.38746C16.8626 8.37913 17.1001 8.47496 17.3001 8.67496C17.4834 8.8583 17.5751 9.09163 17.5751 9.37496C17.5751 9.6583 17.4834 9.89163 17.3001 10.075L12.7001 14.675C12.6001 14.775 12.4918 14.8458 12.3751 14.8875C12.2584 14.9291 12.1334 14.95 12.0001 14.95Z"
        />
      </svg>
    </div>

    <div class="text" :class="{ active: isOpen }">
      <div class="text-wrap" v-html="data.text" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  svg {
    transition: all 0.3s ease-in-out;
    &.active {
      transform: rotate(180deg);
    }
  }
}

.text {
  overflow: hidden;
  transition: max-height 0.5s ease;
  max-height: 0;

  &.active {
    max-height: 500px;
  }
}

.text-wrap {
  padding-top: 8px;
  line-height: 150%;
}
</style>
