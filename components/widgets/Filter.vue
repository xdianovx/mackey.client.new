<script setup>
const { close } = useMyIsFilterOpenStore();
const { isOpen } = storeToRefs(useMyIsFilterOpenStore());

const { getSort } = useMyProductsStore();
const { products } = storeToRefs(useMyProductsStore());

const { types } = storeToRefs(useMyTypesStore());
const { getAll: getTypes } = useMyTypesStore();

const { getAll: getCollections } = useMyCollectionsStore();
const { collections } = storeToRefs(useMyCollectionsStore());

const route = useRoute();
const catalog = route.params.catalog;

const params = ref({
  "types[]=": [],
  "collections[]=": [],
  price_min: products.value.meta?.min_price,
  price_max: products.value.meta?.max_price,
  is_new: null,
});

const addTypesToFilter = (id) => {
  if (params.value["types[]="]?.includes(id)) {
    params.value["types[]="].splice(params.value["types[]="].indexOf(id), 1);
  } else {
    params.value["types[]="]?.push(id);
  }
};

const addCollectionsToFilter = (id) => {
  if (params.value["collections[]="]?.includes(id)) {
    params.value["collections[]="].splice(
      params.value["collections[]="].indexOf(id),
      1
    );
  } else {
    params.value["collections[]="]?.push(id);
  }
};

await getTypes();
await getCollections();
// await getColors();

params.value.price_min = products.value.meta?.min_price;
params.value.price_max = products.value.meta?.max_price;

if (catalog == "men") params.value.is_man = 1;
if (catalog == "women") params.value.is_woman = 1;

const filterHandler = async () => {
  getSort(params.value);
  close();
};

const clearFilter = () => {
  params.value.is_new = null;

  params.value["types[]="] = [];
  params.value.price_min = 0;
  params.value.price_max = products.value.meta.max_price;

  filterHandler();
};
</script>

<template>
  <div class="filter" :class="{ active: isOpen }">
    <div class="filter__wrap">
      <div class="filter__top">
        <h3 class="title">Фильтры</h3>
        <UiFilterCloseBtn @click="close" />
      </div>

      <div class="inner">
        <div class="checkbox">
          <input
            type="checkbox"
            id="newcheck"
            v-model="params.is_new"
            :true-value="1"
            :false-value="0"
          />
          <label for="newcheck">Новинка</label>
        </div>
        <UiFilterDropdown title="Цена">
          <div class="price">
            <div class="price-input">
              <label for="">От</label>
              <input type="number" v-model="params.price_min" />
            </div>
            <div class="price-input">
              <label for="">До</label>
              <input type="number" v-model="params.price_max" />
            </div>
          </div>
        </UiFilterDropdown>

        <!-- Collection -->
        <UiFilterDropdown title="Коллекция">
          <div class="collection-wrap">
            <div class="checkbox" v-for="type in collections">
              <input
                type="checkbox"
                :id="type.id"
                :checked="params['collections[]='].includes(type.id)"
                @change="addCollectionsToFilter(type.id)"
              />
              <label :for="type.id">{{ type.title }}</label>
            </div>
          </div>
        </UiFilterDropdown>

        <!-- Type -->
        <UiFilterDropdown title="Тип">
          <div class="checkbox" v-for="type in types">
            <input
              type="checkbox"
              :id="type.id"
              :checked="params['types[]='].includes(type.id)"
              @change="addTypesToFilter(type.id)"
            />
            <label :for="type.id">{{ type.title }}</label>
          </div>
        </UiFilterDropdown>
      </div>
    </div>
    <div class="filter__bottom">
      <UiButtonsBlack
        text="Применить"
        class="apply-btn"
        @click="filterHandler"
      />

      <UiButtonsWhite
        text="Очистить фильтры"
        class="clear-btn"
        @click="clearFilter"
      />
    </div>
  </div>
  <div class="overflow" @click="close" :class="{ active: isOpen }"></div>
</template>

<style lang="scss" scoped>
.types-filter {
  margin-top: 40px;
}

.filter {
  position: fixed;
  height: 100vh;
  right: -100%;
  max-width: 680px;
  width: 100%;
  display: flex;
  flex-direction: column;
  top: 0;
  z-index: 21;
  background: $bgWhite;
  transition: right 0.4s ease-in-out;
  animation-delay: 0.3s;
  &.active {
    right: 0;
  }
}

.price-input {
  display: flex;
  flex-direction: column;
  gap: 2px;
  label {
    font-size: 14px;
    font-weight: 600;
  }
}

.filter__wrap {
  padding: 40px 80px;
}

.filter__bottom {
  margin-top: auto;
  padding: 24px;
  border-top: 1px solid rgba($bgBlack, 0.2);
  display: flex;
  gap: 16px;
  align-items: center;
}

.apply-btn {
  width: 100%;
}

.clear-btn {
  width: 100%;
}
.overflow {
  transition: all 0.2s ease-in-out;
  position: fixed;
  top: 0;
  right: -100vw;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  background: rgba($bgBlack, 0.2);

  &.active {
    right: 0;
  }
}

.filter__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.inner {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 4px;
}

.types-filter {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.price {
  display: flex;
  gap: 16px;
  align-items: center;

  input {
    border: 1px solid rgba($bgBlack, 0.2);
    padding: 14px 20px 13px;
    line-height: 100%;
    border-radius: 12px;
  }

  .p-slider {
    flex-grow: 1;
  }
}

.collection-wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

@media screen and (max-width: 1440px) {
  .filter__wrap {
    padding: 40px;
  }
}

@media screen and (max-width: 768px) {
  .filter__wrap {
    padding: 40px 16px;
  }
}

@media screen and (max-width: 550px) {
  .filter {
    overflow-y: auto;
    height: 100vh;
  }

  .filter__wrap {
    padding-top: 20px;
    padding-bottom: 200px;
    overflow-y: auto;
  }

  .filter__bottom {
    position: absolute;
    bottom: 0;
    background: $bgWhite;
    width: 100%;
    flex-direction: column;
    gap: 8px;
  }

  .price {
    // flex-direction: column;
    width: 100%;
    gap: 8px;
    input {
      width: 100%;
    }
  }
}
//
</style>
