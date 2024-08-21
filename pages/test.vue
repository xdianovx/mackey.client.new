<template>
  <main>
    <div class="mt-20">
      {{ cart }}
    </div>
  </main>
</template>

<script setup>
const cart = ref();
onMounted(() => {
  $fetch("/cart_no_reg/show", {
    baseURL: "https://api.makey.by/api/v1",
    credentials: "include",
  }).then((res) => {
    cart.value = res;
    console.log(res);
  });
});
</script>

<style lang="scss" scoped></style>
