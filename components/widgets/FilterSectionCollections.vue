<script setup>
const data = defineProps({
  title: String,
  enableFilter: {
    default: true,
  },
});

const { getAll } = useMyCollectionsStore();
const { open, close } = useMyIsFilterOpenStore();

const { isOpen } = storeToRefs(useMyIsFilterOpenStore());
const { collections } = storeToRefs(useMyCollectionsStore());

// await getAll();
</script>

<template>
  <section class="section">
    <div class="container">
      <UiTitle tag="h1">Коллекции</UiTitle>

      <div class="filters">
        <nav class="nav">
          <!-- <NuxtLink
            :to="`/${catalogSlug}`"
            class="nav-link"
            active-class="active"
          >
            Все
          </NuxtLink> -->
          <NuxtLink
            :to="`/kolliektsiia/${item.slug}`"
            v-for="item in collections"
            class="nav-link"
            active-class="active"
          >
            {{ item.title }}
          </NuxtLink>
        </nav>

        <div class="div mobile" v-if="enableFilter"></div>
        <div class="filters-btns" v-if="enableFilter">
          <UiCatalogSortBtn @click="open" />
          <div class="div"></div>
          <UiCatalogFilterBtn @click="open" class="filters-btn-cat" />
        </div>
      </div>
    </div>
  </section>

  <UiMobileCatalogFilterBtn @click="open" v-if="enableFilter" />
</template>

<style lang="scss" scoped>
.section {
  margin-top: 100px;
}

.filters {
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  gap: 32px;

  .div {
    &.mobile {
      display: none;
    }
  }
}

.filters-btns {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin-left: auto;
  .div {
    height: 24px;
    width: 1px;
    background: rgba($bgBlack, 0.2);
    margin: 0 16px;
  }
}

.nav {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px 28px;
  flex-wrap: wrap;
}

.nav-link {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    left: auto;
    right: 0;
    bottom: 0;
    background: $bgBlack;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    &::before {
      width: 100%;
      right: auto;
    }
  }
  &.active {
    &::before {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1200px) {
  .filters {
    flex-direction: column;
    gap: 16px;

    .div {
      &.mobile {
        display: block;
        width: 100%;
        height: 1px;
        margin-top: 4px;
        background: rgba($bgBlack, 0.2);
      }
    }
  }

  .filters-btns {
    width: 100%;
    margin-left: 0;
    .div {
      display: none;
    }
  }
  .filters-btn-cat {
    // margin-left: auto;
    display: none;
  }

  .nav {
    position: relative;
    background: $bgWhite;
    display: flex;
    gap: 8px 16px;

    overflow-x: scroll;
    white-space: nowrap;
    -ms-overflow-style: none;
    overflow-y: scroll;
    scrollbar-width: none;
  }
}
</style>
