<script setup>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Form } from "vee-validate";
import * as Yup from "yup";

const contacts = [
  {
    id: 1,
    type: "phone",
    title: "+375 (29) 580-13-78",
    link: "+375 (29) 580-13-78",
  },
  {
    id: 2,
    type: "phone",
    title: "+375 (29) 580-13-78",
    link: "+375 (29) 580-13-78",
  },
  {
    id: 3,
    type: "email",
    title: "tmanager@makey.by",
    link: "tmanager@makey.by",
  },
  {
    id: 4,
    type: "email",
    title: "dovnar7@mail.ru",
    link: "dovnar7@mail.ru",
  },
];

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
  <main>
    <section class="slider">
      <Swiper :modules="[Pagination, Navigation]">
        <SwiperSlide>
          <div class="banner">
            <img src="/img/corp-cover.jpg" />
            <div class="overflow"></div>
            <div class="banner-info">
              <h1 class="banner-title">Корпоративные заказы</h1>
              <p class="banner-text">
                Makey предлагает эксклюзивные кожаные изделия ручной работы,
                которые станут отличным дополнением к вашему корпоративному
                стилю. Наши мастера готовы создать уникальные аксессуары,
                которые подчеркнут статус и индивидуальность вашей компании.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <section class="form-section">
      <div class="container">
        <div class="form-wrap">
          <div class="form-item">
            <UiTitle tag="h2">
              Оставьте запрос и с вами свяжется наш менеджер
            </UiTitle>

            <Form @submit="submit" :validation-schema="schema" class="form">
              <div class="form-row">
                <UiFormsInput type="text" name="name" ref="input" label="Имя" />
                <UiFormsInput type="tel" name="phone" label="Телефон" />
                <UiFormsInput type="mail" name="email" label="e-mail" />
              </div>

              <UiFormsTextarea
                class="textarea"
                name="text"
                label="Опишите ваш запрос"
              />

              <UiButtonsBlack class="btn" text="Отправить запрос" />
            </Form>
          </div>
          <div class="hr"></div>

          <div class="contacts">
            <UiTitle tag="h2">
              Или свяжитесь с нами <br />
              любым удобным вам способом
            </UiTitle>

            <div class="contacts-list">
              <NuxtLink
                :to="
                  item.type === 'phone'
                    ? `tel:${item.link}`
                    : `mailto:${item.link}`
                "
                :key="item.id"
                v-for="item in contacts"
                class="contacts-link"
                >{{ item.title }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.banner {
  background: #000;
  height: 400px;
  margin-top: 58px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
}

.banner-info {
  position: absolute;
  left: 0;
  bottom: 24px;
  padding: 0 48px;
  color: $textWhite;
  max-width: 780px;
  width: 100%;
}

.banner-title {
  font-size: 24px;
  line-height: 150%;
  font-weight: 600;
}

.banner-text {
  margin-top: 16px;
  line-height: 150%;
}

.overflow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #000);
  top: 0;
  left: 0;
}

.form-section {
  margin-top: 40px;
  margin-bottom: 100px;
}

.form-wrap {
  display: grid;
  grid-template-columns: 60% 1px 1fr;
  gap: 80px;
}

.form {
  display: flex;
  margin-top: 32px;
  flex-direction: column;
}

.form-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.textarea {
  margin-top: 24px;
}

.btn {
  margin-top: 16px;
}

.hr {
  width: 1px;
  align-items: center;
  height: 100%;
  margin: 8px 0;
  background: rgba($bgBlack, 0.3);
}

.contacts-list {
  margin-top: 28px;
  gap: 16px;
  display: flex;
  flex-direction: column;
}

.contacts-link {
  transition: all 0.2 s ease-in-out;

  &:hover {
    color: rgba($bgBlack, 0.3);
  }
}

@media screen and (max-width: 1200px) {
  .banner-info {
    padding: 0 16px;
    max-width: none;
    width: 100%;
  }

  .form-wrap {
    grid-template-columns: 60% 1px 1fr;
    gap: 40px;
  }
}

@media screen and (max-width: 1024px) {
  .banner-title {
    font-size: 20px;
  }

  .banner-text {
    font-size: 14px;
    margin-top: 8px;
  }

  .form-section {
    margin-top: 32px;
  }
  .form-wrap {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
  }

  .form {
    margin-top: 24px;
  }

  .form-row {
    flex-direction: column;
    gap: 16px;
  }

  .hr {
    height: 1px;
    width: calc(100% - 16px);
    margin: 0 8px;
  }
}
</style>
