<script setup>
import StoreCard from "~/components/widgets/StoreCard.vue";

const storeList = [
  {
    id: 2,
    title: "Гродно",
    slug: "grodno",
    stores: [
      {
        id: 1,
        address: "г. Гродно, ул. Горького, 87Б",
        image: "/img/stores/1.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 2,
        address: "г. Гродно, пр-кт Я.Купалы, 16а (ТЦ Корона)",
        image: "/img/stores/2.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 3,
        address: "г. Гродно, ул. Дубко, 17 (ТЦ OldCity)",
        image: "/img/stores/3.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 4,
        address: "г. Гродно, пр-т Янки Купалы, 87 (ТЦ Тринити)",
        image: "/img/stores/4.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Минск",
    slug: "minsk",
    stores: [
      {
        id: 1,
        address: "г. Гродно, ул. Горького, 87Б",
        image: "/img/stores/1.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 2,
        address: "г. Гродно, пр-кт Я.Купалы, 16а (ТЦ Корона)",
        image: "/img/stores/2.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 3,
        address: "г. Гродно, ул. Дубко, 17 (ТЦ OldCity)",
        image: "/img/stores/3.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 4,
        address: "г. Гродно, пр-т Янки Купалы, 87 (ТЦ Тринити)",
        image: "/img/stores/4.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Брест",
    slug: "brest",
    stores: [
      {
        id: 1,
        address: "г. Гродно, ул. Горького, 87Б",
        image: "/img/stores/1.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 2,
        address: "г. Гродно, пр-кт Я.Купалы, 16а (ТЦ Корона)",
        image: "/img/stores/2.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 3,
        address: "г. Гродно, ул. Дубко, 17 (ТЦ OldCity)",
        image: "/img/stores/3.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 4,
        address: "г. Гродно, пр-т Янки Купалы, 87 (ТЦ Тринити)",
        image: "/img/stores/4.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Гомель",
    slug: "gomel",
    stores: [
      {
        id: 1,
        address: "г. Гродно, ул. Горького, 87Б",
        image: "/img/stores/1.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 2,
        address: "г. Гродно, пр-кт Я.Купалы, 16а (ТЦ Корона)",
        image: "/img/stores/2.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 3,
        address: "г. Гродно, ул. Дубко, 17 (ТЦ OldCity)",
        image: "/img/stores/3.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 4,
        address: "г. Гродно, пр-т Янки Купалы, 87 (ТЦ Тринити)",
        image: "/img/stores/4.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Витебск",
    slug: "vitebsk",
    stores: [
      {
        id: 1,
        address: "г. Гродно, ул. Горького, 87Б",
        image: "/img/stores/1.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 2,
        address: "г. Гродно, пр-кт Я.Купалы, 16а (ТЦ Корона)",
        image: "/img/stores/2.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 3,
        address: "г. Гродно, ул. Дубко, 17 (ТЦ OldCity)",
        image: "/img/stores/3.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
      {
        id: 4,
        address: "г. Гродно, пр-т Янки Купалы, 87 (ТЦ Тринити)",
        image: "/img/stores/4.jpg",
        works: [
          {
            id: 1,
            title: "Пн-Пт",
            time: "9:00-17:30",
          },
          {
            id: 2,
            title: "Cб-Вс",
            time: "Выходной",
          },
        ],
        contacts: [
          {
            id: 1,
            title: "+375 (29) 577-22-77",
            slug: "+375 (29) 577-22-77",
            type: "phone",
          },
          {
            id: 2,
            title: "+375 (33) 301-70-17",
            slug: "+375 (33) 301-70-17",
            type: "phone",
          },
          {
            id: 3,
            title: "shop@makey.by",
            slug: "shop@makey.by",
            type: "email",
          },
        ],
      },
    ],
  },
];
</script>

<template>
  <main>
    <section class="mt-[100px] max-[1024px]:mt-[80px]">
      <div class="container">
        <UiTitle tag="h1">Магазины</UiTitle>
      </div>
    </section>

    <section
      class="top-[58px] py-4 sticky whitespace-nowrap overflow-x-auto bg-white max-[1200px]:top-[52px]"
    >
      <div class="container">
        <div class="flex gap-4">
          <NuxtLink
            :to="`#${item.slug}`"
            v-for="item in storeList"
            :key="item.id"
            class=""
            :class="{ active: item.slug === 'all' }"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Wrap Item -->
    <div class="flex flex-col gap-20 mt-[100px] max-[1024px]:mt-[32px]">
      <section
        class="scroll-my-[140px] max-[1200px]:scroll-my-[140px]"
        :id="item.slug"
        v-for="item in storeList"
        :key="item.id"
      >
        <div class="container">
          <UiTitle tag="h2">{{ item.title }}</UiTitle>
          <div
            class="grid grid-cols-4 gap-4 mt-6 max-[1200px]:grid-cols-2 max-[768px]:grid-cols-1"
          >
            <!-- Item -->
            <StoreCard
              v-for="store in item.stores"
              :data="store"
              :key="store.id"
            />
          </div>
        </div>
      </section>
    </div>

    <div class="mb-20"></div>
  </main>
</template>

<style lang="scss" scoped></style>
