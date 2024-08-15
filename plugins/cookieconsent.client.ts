import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import type { CookieConsentConfig } from "vanilla-cookieconsent";

const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom right",
    },
    preferencesModal: {
      layout: "box",
    },
  },

  onFirstConsent: () => {
    console.log("onFirstAction fired");
  },

  onConsent: () => {
    console.log("onConsent fired ...");
  },

  onChange: () => {
    console.log("onChange fired ...");
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
    ads: {},
  },

  language: {
    default: "en",

    translations: {
      en: {
        consentModal: {
          //   title: "Привет!",
          description:
            "Используя данный сайт, вы даете согласие на использование файлов cookie, помогающих нам сделать его удобнее для вас.",
          acceptAllBtn: "Принять",
          acceptNecessaryBtn: "Отклонить",
        },
        preferencesModal: {
          title: "Cookie preferences",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          sections: [
            {
              title: "Cookie usage",
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. For more details, refer to our <a href="#" class="cc__link">privacy policy</a>.',
            },
            {
              title: "Strictly necessary cookies",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              linkedCategory: "necessary",
            },
            {
              title: "Performance and analytics cookies",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              linkedCategory: "analytics",
              cookieTable: {
                headers: {
                  name: "Cookie",
                  domain: "Domain",
                  desc: "Description",
                },
                body: [
                  {
                    name: "_ga",
                    domain: "yourdomain.com",
                    desc: "description ...",
                  },
                  {
                    name: "_gid",
                    domain: "yourdomain.com",
                    desc: "description ...",
                  },
                ],
              },
            },
            {
              title: "Advertisement and targeting cookies",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              linkedCategory: "ads",
            },
            {
              title: "More information",
              description:
                'For any queries in relation to our policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
            },
          ],
        },
      },
    },
  },
};

export default defineNuxtPlugin(async () => {
  await CookieConsent.run(config);

  return {
    provide: {
      CC: CookieConsent,
    },
  };
});
