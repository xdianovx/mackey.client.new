<template>
  <NuxtModal :name="name">
    <template v-slot:header>Hello! 👋🏼</template>
    <template v-slot:content>
      <p>This is a simple nuxt-modal component</p>
    </template>
    <template v-slot:buttons>
      <button @click="close">Cancel</button>
      <button @click="close">Got it!</button>
    </template>
  </NuxtModal>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();

const { close } = useModal(props.name);
</script>
