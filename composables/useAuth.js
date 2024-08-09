import { defineStore } from "pinia";
import { useCookies } from "@vueuse/integrations/useCookies";
import { useFetch } from "nuxt/app"; // Импорт useFetch из Nuxt
const cookies = useCookies();

export const useAuth = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
  }),

  actions: {
    async login(credentials) {
      await useFetch("http://45.135.234.37:80/api/v1/login", {
        method: "POST",
        body: {
          ...credentials,
          phone: credentials.phone.replace(/[^\d+]/g, ""),
        },
        onResponse({ request, response, options }) {
          if (response._data.console.error) {
          } else {
            this.token = response._data.tokens.access_token;
            this.user = response._data;
            cookies.set("auth_token", this.token);
            console.log(this.user);
          }
        },
      });
    },

    async logout() {
      this.user = null;
      this.token = null;
      const cookies = useCookies();
      cookies.remove("auth_token");
    },

    async fetchUser() {
      const cookies = useCookies();
      const token = cookies.get("auth_token");

      if (token) {
        await useFetch("http://45.135.234.37:80/api/v1/profile/show", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          this.user = res._rawValue;
        });
      }
    },

    async checkAuth() {
      const cookies = useCookies();
      const token = cookies.get("auth_token");

      if (token) {
        this.token = token;
        await this.fetchUser();
      }
    },

    isAuthenticated() {
      const cookies = useCookies();
      this.token = cookies.get("auth_token");
      return !!this.token;
    },
  },
});
