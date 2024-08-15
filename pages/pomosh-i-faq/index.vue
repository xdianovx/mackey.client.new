<script setup>
import Accordition from "~/components/ui/Accordition.vue";
import Input from "~/components/ui/Forms/Input.vue";
import Textarea from "~/components/ui/Forms/Textarea.vue";

const deliveryData = [
  {
    id: 1,
    title: "1. Как купить изделия в вашем интернет-магазине?",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены доступны в евро.",
  },
  {
    id: 2,
    title: "2. На сайте актуальные цены?",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены доступны в евро.",
  },
  {
    id: 3,
    title: "3. Что означают различные состояния заказа?",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены доступны в евро.",
  },
  {
    id: 4,
    title:
      "4. Статус моего заказа уже неделю как 'Отправлено', а я до сих пор ничего не получил.",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены доступны в евро.",
  },
  {
    id: 5,
    title: "5. Как сделать отмену заказа в интернет-магазине?",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены доступны в евро.",
  },
];
</script>

<template>
  <main>
    <section class="mt-[100px] max-[1200px]:mt-20">
      <div class="container">
        <div
          class="flex gap-16 items-stretch max-[1024px]:flex-col max-[1024px]:gap-8"
        >
          <div
            class="form max-w-[780px] w-full max-[1200px]:max-w-1/2 max-[1024px]:max-w-none"
          >
            <UiTitle tag="h2">
              Нужна помощь? Напишите нам и с вами свяжется наш менеджер
            </UiTitle>

            <form class="mt-8 max-[1200px]:mt-6">
              <div class="flex gap-2 max-[1200px]:flex-col">
                <Input label="Имя" />
                <Input label="Номер телефона" />
                <Input label="e-mail" />
              </div>

              <Textarea label="Опишите свою проблему" class="mt-4"></Textarea>
              <UiButtonsBlack text="Отправить запрос" class="w-full mt-4" />
            </form>
          </div>
          <div
            class="w-[1px] bg-gray-200 max-[1024px]:h-[1px] max-[1024px]:w-full"
          ></div>

          <div class="max-w-[440px] max-[1024px]:max-w-none">
            <UiTitle tag="h2">
              Или свяжитесь с нами <br />
              любым удобным вам способом
            </UiTitle>

            <div class="flex flex-col mt-6 gap-2">
              <NuxtLink to="tel:+375 (29) 580-13-78"
                >+375 (29) 580-13-78</NuxtLink
              >
              <NuxtLink to="mailto:tmanager@makey.by"
                >tmanager@makey.by</NuxtLink
              >
              <NuxtLink to="mailto:dovnar7@mail.ru">dovnar7@mail.ru</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-[80px] mb-20">
      <!-- item -->
      <div class="container">
        <UiTitle tag="h2">Часто задаваемые вопросы</UiTitle>
        <div class="mt-8 max-[1024px]:mt-4">
          <Accordition v-for="item in deliveryData" :data="item" />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
