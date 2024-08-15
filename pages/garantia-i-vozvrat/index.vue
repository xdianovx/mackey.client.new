<script setup>
import Accordition from "~/components/ui/Accordition.vue";
import Input from "~/components/ui/Forms/Input.vue";
import Textarea from "~/components/ui/Forms/Textarea.vue";

const guaranty = [
  {
    id: 1,
    title: "1. Банковской картой онлайн",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены доступны в евро.",
  },
  {
    id: 2,
    title: "2. Приложение «Оплати»",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены будут не доступны.",
  },
  {
    id: 3,
    title: "3. Карты рассрочки",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены будут не доступны.",
  },
];

const returns = [
  {
    id: 1,
    title: "1. Курьером по Минску",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены доступны в евро.",
  },
  {
    id: 2,
    title: "2. В отделение «Белпочты»",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены доступны в евро.",
  },
  {
    id: 3,
    title: "3. В отделение «Европочты»",
    text: "Да, цены актуальные, иначе и быть не может. Если вы находитесь на территории Беларуси, то видите цены в белорусских рублях. Находясь на территории России – в российских рублях. За пределами Беларуси и России цены доступны в евро.",
  },
];
</script>

<template>
  <main>
    <section class="mt-[100px] mb-20">
      <!-- item -->
      <div class="container">
        <UiTitle tag="h2">Гарантия на изделия</UiTitle>
        <div class="mt-8 max-[1024px]:mt-4">
          <Accordition v-for="item in guaranty" :data="item" />
        </div>

        <div class="my-12 w-full h-[1px] bg-gray-200"></div>

        <UiTitle tag="h2">Условия возврата</UiTitle>
        <div class="mt-8 max-[1024px]:mt-4">
          <Accordition v-for="item in returns" :data="item" />
        </div>
      </div>
    </section>

    <section class="mt-[100px] max-[1200px]:mt-20 mb-20">
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
  </main>
</template>

<style lang="scss" scoped></style>
