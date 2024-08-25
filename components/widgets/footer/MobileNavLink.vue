<script setup>
const props = defineProps(["data"]);

const isOpen = ref(false);
</script>

<template>
  <div>
    <div>
      <button
        :id="`accordion-title-${id}`"
        class="flex items-center justify-between w-full text-left font-semibold py-2"
        @click.prevent="isOpen = !isOpen"
        :aria-expanded="isOpen"
        :aria-controls="`accordion-text-${id}`"
      >
        <div class="font-medium">{{ data.title }}</div>

        <svg
          width="16"
          height="16"
          class="rotate-90 transition-transform duration-200 ease-in-out"
          viewBox="0 0 16 16"
          :class="{ '-rotate-90': isOpen }"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3167 8.0013L5.41674 3.1013C5.25007 2.93464 5.16952 2.73741 5.17507 2.50964C5.18063 2.28186 5.26674 2.08464 5.43341 1.91797C5.60007 1.7513 5.7973 1.66797 6.02507 1.66797C6.25285 1.66797 6.45007 1.7513 6.61674 1.91797L11.7334 7.0513C11.8667 7.18464 11.9667 7.33464 12.0334 7.5013C12.1001 7.66797 12.1334 7.83464 12.1334 8.0013C12.1334 8.16797 12.1001 8.33463 12.0334 8.5013C11.9667 8.66797 11.8667 8.81797 11.7334 8.9513L6.60007 14.0846C6.43341 14.2513 6.23896 14.3319 6.01674 14.3263C5.79452 14.3207 5.60007 14.2346 5.43341 14.068C5.26674 13.9013 5.18341 13.7041 5.18341 13.4763C5.18341 13.2485 5.26674 13.0513 5.43341 12.8846L10.3167 8.0013Z"
          />
        </svg>
      </button>
    </div>
    <div
      :id="`accordion-text-${id}`"
      role="region"
      :aria-labelledby="`accordion-title-${id}`"
      class="grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"
      :class="
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      "
    >
      <div class="overflow-hidden">
        <div class="pt-5">
          <div class="flex gap-3 flex-col">
            <NuxtLink
              v-for="link in data.links"
              :key="link.id"
              :to="link.link"
              >{{ link.title }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
