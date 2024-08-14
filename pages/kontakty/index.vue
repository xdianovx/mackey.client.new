<script setup>
const data = [
  {
    id: 1,
    title: "Интернет-магазин",
    links: [
      {
        id: 1,
        title: "+375 (33) 301-70-17",
        link: "+375 (33) 301-70-17",
        type: "phone",
      },
      {
        id: 2,
        title: "shop@makey.by",
        link: "shop@makey.by",
        type: "email",
      },
    ],

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
  },
  { id: 2, title: "Интернет-магазин" },
  { id: 3, title: "Интернет-магазин" },
];
</script>

<template>
  <main>
    <section class="mt-[100px]">
      <div class="container">
        <UiTitle tag="h1">Контакты</UiTitle>
      </div>
    </section>

    <section class="mt-[48px]">
      <div class="container"></div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
