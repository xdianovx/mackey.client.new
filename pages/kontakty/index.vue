<script setup>
import Input from "~/components/ui/Forms/Input.vue";
import Textarea from "~/components/ui/Forms/Textarea.vue";

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
  {
    id: 2,
    title: "Корпоративные заказы",
    links: [
      {
        id: 1,
        title: "+375 (29) 580-13-78",
        link: "+375 (29) 580-13-78",
        type: "phone",
      },
      {
        id: 2,
        title: "tmanager@makey.by",
        link: "tmanager@makey.by",
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

  {
    id: 3,
    title: "Оптовый отдел",
    links: [
      {
        id: 1,
        title: "+375 (152) 44-20-20",
        link: "+375 (152) 44-20-20",
        type: "phone",
      },
      {
        id: 2,
        title: "+375 (152) 44-10-00",
        link: "+375 (152) 44-10-00",
        type: "phone",
      },
      {
        id: 3,
        title: "art@makey.by",
        link: "art@makey.by",
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

  {
    id: 3,
    title: "Оптовый отдел в Минске",
    links: [
      {
        id: 1,
        title: "+375 (29) 388-03-26",
        link: "+375 (29) 388-03-26",
        type: "phone",
      },
      {
        id: 2,
        title: "+375 (29) 334-42-02",
        link: "+375 (29) 334-42-02",
        type: "phone",
      },
      {
        id: 3,
        title: "dovnar7@mail.ru",
        link: "dovnar7@mail.ru",
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
];
</script>

<template>
  <main>
    <section class="mt-[100px]">
      <div class="container">
        <UiTitle tag="h1">Контакты</UiTitle>
      </div>
    </section>

    <section class="mt-[48px] max-[1024px]:mt-8">
      <div class="container">
        <div
          class="grid grid-cols-4 max-[1024px]:grid-cols-2 max-[1024px]:gap-[40px] max-[1024px]:mt-6 max-[768px]:grid-cols-1 max-[768px]:gap-y-10"
        >
          <!-- item -->
          <div
            class="flex flex-col min-h-[300px] max-[1024px]:min-h-[280px] max-[768px]:min-h-min"
            v-for="item in data"
            :key="item.id"
          >
            <h4 class="font-medium">{{ item.title }}</h4>

            <div class="flex flex-col mt-5 gap-4">
              <NuxtLink
                :to="
                  link.type === 'phone'
                    ? `tel:${link.link}`
                    : `mailto:${link.link}`
                "
                v-for="link in item.links"
                :key="link.id"
              >
                {{ link.title }}
              </NuxtLink>
            </div>

            <h5 class="font-semibold mt-auto text-black/50 max-[768px]:mt-5">
              Время работы
            </h5>
            <div class="flex mt-4 flex-col gap-2">
              <div
                class="flex gap-2 items-center"
                v-for="work in item.works"
                :key="work.id"
              >
                <p class="font-medium">{{ work.title }}</p>
                <p :class="{ 'text-black/50': work.time == 'Выходной' }">
                  {{ work.time }}
                </p>
              </div>
            </div>

            <div
              class="bg-gray-200 h-[1px] w-full mt-10 hidden max-[1024px]:block"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-[120px] max-[1024px]:mt-20">
      <div class="container">
        <UiTitle tag="h2">Официальные представительства</UiTitle>

        <div
          class="grid grid-cols-4 mt-12 max-[1024px]:grid-cols-2 max-[1024px]:gap-10 max-[1024px]:mt-6 max-[768px]:grid-cols-1"
        >
          <!-- item -->
          <div
            class="flex flex-col max-w-[320px] max-[768px]:max-w-full min-h-[320px] max-[1024px]:min-h-[280px]"
          >
            <h4 class="font-medium">
              г. Гродно, ул. Горького, 87Б, 230015, абонентский ящик 20
            </h4>

            <div class="flex flex-col mt-5 gap-4">
              <NuxtLink to="tel:+375 (152) 41-42-00">
                +375 (152) 41-42-00
              </NuxtLink>
              <NuxtLink to="tel:+375 (152) 48-22-17">
                +375 (152) 48-22-17
              </NuxtLink>
              <NuxtLink to="tel:+375 (29) 748-22-17">
                +375 (29) 748-22-17
              </NuxtLink>
              <NuxtLink to="mailto:art@makey.by"> art@makey.by </NuxtLink>
            </div>

            <h5 class="font-semibold mt-auto max-[768px]:mt-4 text-black/50">
              Время работы
            </h5>
            <div class="flex mt-4 flex-col gap-2">
              <div class="flex gap-2 items-center">
                <p class="font-medium">Пн-Пт</p>
                <p>9:00-17:30</p>
              </div>
              <div class="flex gap-2 items-center">
                <p class="font-medium">Сб-Вс</p>
                <p class="text-black/50">Выходной</p>
              </div>
            </div>

            <div
              class="bg-gray-200 h-[1px] w-full mt-10 hidden max-[1024px]:block"
            ></div>
          </div>

          <!-- item -->
          <div
            class="flex flex-col max-w-[320px] max-[768px]:max-w-full min-h-[300px] max-[1024px]:min-h-[280px]"
          >
            <h4 class="font-medium">г. Минск, ул.Чкалова, 20</h4>

            <div class="flex flex-col mt-5 gap-4">
              <NuxtLink to="tel:+375 (17) 301-34-45">
                + 375 (17) 301-34-45
              </NuxtLink>
              <NuxtLink to="tel:+375 (17) 316-34-55">
                + 375 (17) 316-34-55
              </NuxtLink>
            </div>

            <h5 class="font-semibold mt-auto max-[768px]:mt-4 text-black/50">
              Время работы
            </h5>
            <div class="flex mt-4 flex-col gap-2">
              <div class="flex gap-2 items-center">
                <p class="font-medium">Пн-Пт</p>
                <p>9:00-17:30</p>
              </div>
              <div class="flex gap-2 items-center">
                <p class="font-medium">Сб-Вс</p>
                <p class="text-black/50">Выходной</p>
              </div>
            </div>

            <div
              class="bg-gray-200 h-[1px] w-full mt-10 hidden max-[1024px]:block"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-20 mb-[100px] max-[1024px]:mt-10">
      <div class="container">
        <div class="form">
          <UiTitle tag="h2"
            >Есть вопрос? Напишите нам и с вами свяжется наш менеджер</UiTitle
          >

          <div class="mt-8 max-[1024px]:mt-6">
            <div class="flex gap-2 max-[1024px]:flex-col">
              <Input label="Имя" />
              <Input label="Номер телефона" />
              <Input label="e-mail" />
            </div>

            <div class="mt-4">
              <Textarea label="Что бы вы хотели узнать?"></Textarea>
            </div>
            <UiButtonsBlack text="Отправить " class="w-full mt-4" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
