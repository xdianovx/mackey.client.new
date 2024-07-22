<template>
  <div class="loader">
    <div class="loader-image">
      <img src="~/assets/pre1.gif" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  background: $bgWhite;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.loader-image {
  width: 500px;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
