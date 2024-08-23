import * as Yup from "yup";

export const checkoutScheme = Yup.object().shape({
  first_name: Yup.string().required("Обязательное поле"),
  last_name: Yup.string().required("Обязательное поле"),
  email: Yup.string().required("Обязательное поле"),
  phone: Yup.string().required("Обязательное поле"),
  flat: Yup.string().required("Обязательное поле"),
  patronymic_name: Yup.string().required("Обязательное поле"),
  house: Yup.string().required("Обязательное поле"),
  index: Yup.string().required("Обязательное поле"),
  street: Yup.string().required("Обязательное поле"),
  locality: Yup.string().required("Обязательное поле"),
  comment_payment: Yup.string().max(30, "Максимум 30 символов"),
});

export const checkoutSchemePickup = Yup.object().shape({
  first_name: Yup.string().required("Обязательное поле"),
  last_name: Yup.string().required("Обязательное поле"),
  email: Yup.string().required("Обязательное поле"),
  phone: Yup.string().required("Обязательное поле"),
  comment_payment: Yup.string().max(30, "Максимум 30 символов"),
});
