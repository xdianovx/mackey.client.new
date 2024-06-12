<script setup>
const props = defineProps(["text", "count"]);
</script>

<template>
  <button class="button">
    <span> {{ text }}</span>
    <span class="count"> {{ count }}</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="black"
    >
      <path
        d="M10.3167 7.99935L5.41674 3.09935C5.25007 2.93268 5.16952 2.73546 5.17507 2.50768C5.18063 2.2799 5.26674 2.08268 5.43341 1.91602C5.60007 1.74935 5.7973 1.66602 6.02507 1.66602C6.25285 1.66602 6.45007 1.74935 6.61674 1.91602L11.7334 7.04935C11.8667 7.18268 11.9667 7.33268 12.0334 7.49935C12.1001 7.66602 12.1334 7.83268 12.1334 7.99935C12.1334 8.16602 12.1001 8.33268 12.0334 8.49935C11.9667 8.66602 11.8667 8.81602 11.7334 8.94935L6.60007 14.0827C6.43341 14.2493 6.23896 14.3299 6.01674 14.3243C5.79452 14.3188 5.60007 14.2327 5.43341 14.066C5.26674 13.8993 5.18341 13.7021 5.18341 13.4743C5.18341 13.2466 5.26674 13.0493 5.43341 12.8827L10.3167 7.99935Z"
      />
    </svg>
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  gap: 8px;
  svg {
    display: block;
    margin-left: auto;
  }
}

.count {
  color: $textGray;
}
</style>
