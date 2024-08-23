<script setup>
import { Form } from "vee-validate";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  phone: Yup.string().required("Обязательное поле"),
  email: Yup.string().required("Обязательное поле"),
  text: Yup.string().required("Обязательное поле"),
});

const submit = async (data) => {
  console.log(data);
};
</script>

<template>
  <main class="flex flex-col">
    <section class="mt-[58px] flex items-stretch grow max-[1024px]:flex-col">
      <div class="w-1/2 relative max-[1024px]:w-full max-[1024px]:h-[400px]">
        <img src="/img/corp-cover.jpg" class="h-full object-cover w-full" />
        <div
          class="banner-info absolute z-[2] h-[455px] max-[1024px]:h-auto max-[1024px]:px-4 max-[1024px]:top-auto max-[1024px]:-translate-y-0 max-[1024px]:bottom-8 top-1/2 flex flex-col -translate-y-1/2 left-0 px-10 text-white max-[1024px]:justify-end max-[1024px]:mt-0"
        >
          <h1 class="text-[24px] font-semibold mb-4 mt-auto">
            Корпоративные заказы
          </h1>
          <p class="banner-text">
            Makey предлагает эксклюзивные кожаные изделия ручной работы, которые
            станут отличным дополнением к вашему корпоративному стилю. Наши
            мастера готовы создать уникальные аксессуары, которые подчеркнут
            статус и индивидуальность вашей компании.
          </p>
        </div>
      </div>

      <div class="w-1/2 self-center max-[1024px]:w-full max-[1024px]:mt-8">
        <div
          class="max-w-[460px] mx-auto max-[1024px]:max-w-full max-[1024px]:px-4"
        >
          <UiTitle tag="h2">
            Оставьте запрос и с вами свяжется наш менеджер
          </UiTitle>

          <Form
            @submit="submit"
            :validation-schema="schema"
            class="form mt-8 max-[1024px]:mb-20 max-[1024px]:mt-6"
          >
            <div class="flex flex-col gap-2">
              <div class="flex gap-2 max-[1024px]:flex-col max-[1024px]:gap-3">
                <UiFormsInput type="text" name="name" ref="input" label="Имя" />
                <UiFormsInput type="tel" name="phone" label="Телефон" />
              </div>
              <UiFormsInput type="mail" name="email" label="e-mail" />
            </div>

            <UiFormsTextarea
              class="mt-2"
              name="text"
              label="Опишите ваш запрос"
            />

            <UiButtonsBlack class="w-full mt-4" text="Отправить запрос" />
          </Form>
        </div>
      </div>
    </section>
  </main>
</template>
