import { defineStore } from "pinia";

export const authStore = defineStore("authStore", () => {
  const isLogin = ref(false);
  const userData = ref({});
  const token = ref("");
  const cookie = useCookie("auth-token", {
    maxAge: 365 * 24 * 60 * 60,
  });

  const registerStepOne = (values) => {
    $fetch("http://45.135.234.37:80/api/v1/register_step_one", {
      method: "POST",
      body: values,
    }).then((res) => {
      userData.value = res;
    });
  };

  const registerStepTwo = (values) => {
    $fetch(
      `http://45.135.234.37:80/api/v1/register_step_two/users/${userData.value.id}`,
      {
        method: "POST",
        body: values,
      }
    ).then((res) => {
      cookie.value = res.tokens.access_token;
      token.value = res.tokens.access_token;
    });
  };

  const login = (values) => {
    $fetch(`http://45.135.234.37:80/api/v1/login`, {
      method: "POST",
      body: values,
    }).then((res) => {
      userData.value = res;
      cookie.value = res.tokens.access_token;
      token.value = res.tokens.access_token;
      navigateTo("/profile");
    });
  };

  const getMe = () => {
    if (cookie.value) {
      $fetch(`http://45.135.234.37:80/api/v1/profile/show`, {
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      }).then((res) => {
        userData.value = res;
      });
    }
  };

  const logout = () => {
    cookie.value = "";
    token.value = "";
    navigateTo("/");
  };

  return { logout, registerStepOne, registerStepTwo, login, getMe, userData };
});
