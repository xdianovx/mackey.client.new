<script setup>
const { logout } = authStore();
</script>

<template>
  <section class="profile-top">
    <div class="container">
      <div class="profile-top__wrap">
        <UiTitle tag="h2">Мой профиль</UiTitle>
        <UiButtonsLogout @click="logout" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.profile-top {
  margin-top: 100px;
}

.profile-top__wrap {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

@media screen and (max-width: 1200px) {
  .profile-top {
    margin-top: 70px;
  }
}
</style>
