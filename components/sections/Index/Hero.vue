<script setup>
const data = [
  {
    id: 1,
    title: "EVOLUTION",
    image: "/video/1.mp4",
  },
  {
    id: 2,
    title: "Le Lin ",
    suptitle: "NEW SEASON",
    image: "/video/2.mp4",
  },
];

const options = {
  menu: "#menu",
  // anchors: ["slide-1", "slide-2", "slide-3"],
};
</script>

<template>
  <ClientOnly>
    <div>
      <section class="section" v-for="item in data" :key="item.id">
        <div class="container">
          <div class="screen">
            <div class="overlay"></div>
            <video
              data-autoplay
              playsinline
              autoplay
              loop
              muted
              class="section__video"
            >
              <source :src="item.image" type="video/mp4" />
            </video>
            <div class="section__wrap">
              <div class="section__info">
                <h2 class="section__title">{{ item.title }}</h2>
                <p class="section__subtitle">{{ item.suptitle }}</p>

                <NuxtLink to="/" class="section__link">Подробнее</NuxtLink>
                <div class="mobile__links">
                  <NuxtLink to="/women" class="mobile__link">Women</NuxtLink>
                  <NuxtLink to="/men" class="mobile__link">Men</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.section {
  background: #000;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.screen {
  height: 100%;
}
.section__wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, 0.2);
  z-index: 1;
}

.section__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}

.section__info {
  margin-top: auto;
  color: $textWhite;
  //padding-bottom: 64px;
}

.section__title {
  font-size: 77px;
  line-height: 120%;
  font-weight: 400;
}

.section__subtitle {
  font-size: 39px;
  line-height: 120%;
}

.section__link {
  margin-top: 24px;
  display: inline-block;
  line-height: 120%;
  padding: 15px 40px;
  border-radius: 1000px;
  border: 1px solid rgba(#ffffff, 0.3);
  background: rgba(#4a4a4a, 0.8);
  transition: all 0.3s ease-in-out;
  margin-bottom: 64px;

  &:hover {
    background: rgba(#ffffff, 0.3);
  }
}

.mobile__links {
  display: none;
}

@media screen and (max-width: 1200px) {
  .section__link {
    display: none;
  }

  .section__title {
    font-size: 64px;
  }

  .section__subtitle {
    font-size: 32px;
  }

  .mobile__links {
    display: flex;
    gap: 8px;
    margin-bottom: 40px;
    margin-top: 32px;

    a {
      width: 100%;
    }
  }

  .mobile__link {
    text-align: center;
    background: rgba($bgWhite, 0.4);
    color: $textWhite;
    -webkit-border-radius: 1000px;
    -moz-border-radius: 1000px;
    border-radius: 1000px;
    padding: 15px;
    border: 1px solid rgba($bgWhite, 0.3);
  }
}

@media screen and (max-width: 550px) {
  .section__title {
    font-size: 48px;
  }
}
</style>
