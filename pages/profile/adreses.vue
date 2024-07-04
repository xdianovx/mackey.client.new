<script setup>
definePageMeta({
  middleware: ["auth"],
});
const { isGray } = storeToRefs(useIsPageGrayStore());
const { userData } = storeToRefs(authStore());

const { getAll, create } = adresesStore();
const { adreses } = storeToRefs(adresesStore());

import { Form } from "vee-validate";
import * as Yup from "yup";

const schema = Yup.object().shape({
  type: Yup.string().required("Обязательное поле").default("postal"),
  locality: Yup.string().required("Обязательное поле"),
  index: Yup.string().required("Обязательное поле"),
  street: Yup.string().required("Обязательное поле"),
  house: Yup.string().required("Обязательное поле"),
  flat: Yup.string().required("Обязательное поле"),
  floor: Yup.string(),
  entrance: Yup.string(),
});

const initialValues = { type: "postal" };

getAll();
</script>

<template>
  <main :class="{ gray: isGray }">
    <section class="adreses">
      <div class="container">
        <UiTitle tag="h1" class="title">Сохраненные адреса</UiTitle>

        <div class="adreses-wrap">
          <div class="adres" v-for="item in adreses">
            <p>
              {{ item.locality }}, {{ item.index }}, {{ item.street }}
              {{ item.house }}, кв. {{ item.flat }}
            </p>

            <div class="edit">Редактировать</div>
          </div>
        </div>

        <div class="form-wrap">
          <h4>Добавить адрес</h4>
          <Form
            @submit="create"
            :validation-schema="schema"
            class="form"
            :initial-values="initialValues"
          >
            <UiFormsInput type="text" name="index" ref="input" label="Индекс" />
            <UiFormsInput
              type="text"
              name="locality"
              ref="input"
              label="Город"
            />
            <UiFormsInput type="text" name="street" ref="input" label="Улица" />
            <UiFormsInput type="text" name="house" ref="input" label="Дом" />
            <UiFormsInput
              type="text"
              name="flat"
              ref="input"
              label="Квартира"
            />

            <UiButtonsWhite text="Сохранить" class="form-btn" />
          </Form>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.gray {
  background: #f5f5f5;
}
.adreses {
  margin-top: 100px;
}

.form-wrap {
  margin-top: 56px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

.adreses-wrap {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-btn {
  width: 100%;
}
.adres {
  background: $bgWhite;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
}

.edit {
  cursor: pointer;
  margin-left: auto;
}

.btn {
  margin-top: 8px;
  width: 100%;
  font-weight: 600;
  border-radius: 12px;
  padding: 16px 24px 15px;
  border: 1px solid #000;
}
</style>
