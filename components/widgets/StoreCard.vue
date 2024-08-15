<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="rounded-xl overflow-hidden bg-[#f5f5f5]">
    <div class="rounded-xl aspect-[4/2] overflow-hidden m-2">
      <img
        :src="data.image"
        :alt="data.title"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="p-3">
      <h3 class="font-medium text-[18px]">{{ data.address }}</h3>

      <div class="mt-4 flex flex-col gap-2">
        <NuxtLink
          class="transition-colors hover:text-black/60"
          v-for="contact in data.contacts"
          :key="contact.id"
          :to="
            contact.type == 'phone'
              ? `tel:${contact.slug}`
              : `mailto:${contact.slug}`
          "
        >
          {{ contact.title }}
        </NuxtLink>
      </div>

      <div class="mt-auto">
        <div class="mx-2 h-[1px] bg-gray-200 my-4"></div>

        <div class="flex flex-col gap-2">
          <div
            class="flex justify-between items-center"
            v-for="work in data.works"
            :key="work.id"
          >
            <div class="font-medium">{{ work.title }}</div>
            <div :class="{ 'text-black/50': work.time == 'Выходной' }">
              {{ work.time }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
