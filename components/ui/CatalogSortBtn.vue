<template>
  <div class="button">
    <p>Сортировка:</p>

    <button class="current">по новизне</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  gap: 4px;
}

.current {
  position: relative;
  &::before {
    content: "";
    width: 100%;
    position: absolute;
    height: 1px;
    background: $bgBlack;
    left: 0;
    bottom: 0;
  }
}

@media screen and (max-width: 1200px) {
  .button {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
