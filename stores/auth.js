import { defineStore } from "pinia";
import { useCookies } from "@vueuse/integrations/useCookies";

export const authStore = defineStore("authStore", () => {
  const userData = ref({});
  const isLoading = ref(false);
  const error = ref();
  const emailError = ref();
  const phoneExistError = ref();
  const smsError = ref();
  const phoneConfirmationError = ref("");
  const loginError = ref();
  const config = useRuntimeConfig();

  const cookies = useCookies();
  const token = ref("");
  const cookie = useCookie("auth-token", {
    maxAge: 365 * 24 * 60 * 60,
  });

  const registerStepOne = async (values) => {
    isLoading.value = true;
    await $fetch(config.public.API_URL + "/register_step_one", {
      method: "POST",
      body: {
        ...values,
        phone: values.phone.replace(/[^\d+]/g, ""),
      },
      onResponseError({ request, response, options }) {
        smsError.value = response._data;
        isLoading.value = false;
      },
    }).then((res) => {
      smsError.value = "";
      userData.value = res;
      isLoading.value = false;
    });
  };

  const registerStepTwo = async (values) => {
    isLoading.value = true;

    await $fetch(
      config.public.API_URL + `/register_step_two/users/${userData.value.id}`,
      {
        method: "POST",
        body: values,
        onResponseError({ request, response, options }) {
          emailError.value = response._data;
          isLoading.value = false;
        },
      }
    ).then((res) => {
      cookie.value = res.tokens.access_token;
      token.value = res.tokens.access_token;
      isLoading.value = false;
      navigateTo("/profile");
    });
  };

  const login = async (values) => {
    await $fetch(config.public.API_URL + `/login`, {
      method: "POST",
      body: {
        ...values,
        phone: values.phone.replace(/[^\d+]/g, ""),
      },

      onResponse({ request, response, options }) {
        if (response._data.error) {
          loginError.value = response._data.error;
        } else {
          userData.value = response._data;
          cookie.value = response._data.tokens.access_token;
          token.value = response._data.tokens.access_token;
        }
      },
    }).then(() => {
      navigateTo("/profile");
    });
  };

  const confirmPhone = (id, code) => {
    isLoading.value = true;

    $fetch(config.public.API_URL + `/phone_confirmation/users/${id}`, {
      method: "POST",
      body: code,
    })
      .then((res) => {
        userData.value = res;
        isLoading.value = false;
      })
      .catch((res) => {
        phoneConfirmationError.value = res;
        isLoading.value = false;
      });
  };

  const getMe = () => {
    if (cookie.value) {
      $fetch(config.public.API_URL + `/profile/show`, {
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      }).then((res) => {
        userData.value = res;
      });

      token.value = cookies.get("auth-token");
    }
  };

  const logout = () => {
    cookies.remove("auth-token", { path: "/" });
    token.value = null;
    userData.value = {};
    navigateTo("/");
  };

  getMe();

  return {
    logout,
    registerStepOne,
    registerStepTwo,
    login,
    getMe,
    error,
    userData,
    token,
    confirmPhone,
    isLoading,
    emailError,
    phoneExistError,
    phoneConfirmationError,
    loginError,
    smsError,
  };
});
