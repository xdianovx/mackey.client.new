<script setup>
definePageMeta({
  middleware: ["is-logged-in"],
});
</script>

<template>
  <main>
    <section class="top">
      <div class="container">
        <div class="login-wrap">
          <WidgetsLoginForm class="login" />
          <div class="div"></div>
          <WidgetsLoginNoProfile class="noprofile" />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.top {
  margin-top: 100px;
}

.login-wrap {
  display: flex;
  justify-content: space-between;
}

.login {
  max-width: 440px;
  width: 100%;
}

.noprofile {
  max-width: 660px;
  width: 100%;
}

.div {
  height: 484px;
  width: 1px;
  background: rgba($bgBlack, 0.2);
}

@media screen and (max-width: 1300px) {
  .top {
    padding-bottom: 60px;
  }
  .login-wrap {
    display: flex;
    flex-direction: column;
  }

  .div {
    height: 1px;
    width: 100%;
    margin: 24px 0;
  }
}
</style>
