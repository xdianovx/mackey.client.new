<script setup>
import MCLogo from "../icons/MCLogo.vue";

const { isHome } = storeToRefs(useIsHomePageStore());

const links = [
  {
    id: 1,
    title: "Интернет-магазин",
    links: [
      { id: 2, title: "+375 (33) 301-70-17", link: "tel:+375 (33) 301-70-17" },
      {
        id: 3,
        title: "makeyecom@yandex.by",
        link: "mailto:makeyecom@yandex.by",
      },
    ],
  },
  {
    id: 2,
    title: "Корпоративным клиентам",
    link: "/korporativnye-zakazy",
    links: [
      { id: 1, title: "+375 (29) 580-13-78", link: "tel:+375 (29) 580-13-78" },
      { id: 3, title: "tmanager@makey.by", link: "mailto:tmanager@makey.by" },
    ],
  },
  {
    id: 3,
    title: "Сервис и поддержка",
    links: [
      { id: 1, title: "Контакты", link: "/kontakty" },
      { id: 2, title: "О компании", link: "/o-kompanii" },
      { id: 3, title: "Магазины", link: "/magaziny" },
      { id: 4, title: "Франшиза", link: "/" },
    ],
  },
  {
    id: 4,
    title: "Компания",
    links: [
      { id: 1, title: "Корпоративные заказы", link: "/korporativnye-zakazy" },
      { id: 2, title: "Оплата и доставка", link: "/dostavka-i-oplata" },
      { id: 3, title: "Гарантия и возврат", link: "/garantia-i-vozvrat" },
      { id: 4, title: "Помощь и FAQ", link: "/pomosh-i-faq" },
    ],
  },
];
</script>

<template>
  <footer class="footer" :class="{ black: !isHome }">
    <div class="container">
      <div class="footer__wrap">
        <!--          -->
        <div class="footer__socials">
          <h4 class="footer__socials__title">Makey в социальных сетях</h4>
          <div class="footer__socials_wrap">
            <NuxtLink
              to="https://www.instagram.com/makeyby?igsh=MTNhN3Z4c3QweGFnNA=="
              target="_blank"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2.88125C20.275 2.88125 20.7813 2.9 22.4625 2.975C24.025 3.04375 24.8688 3.30625 25.4313 3.525C26.175 3.8125 26.7125 4.1625 27.2688 4.71875C27.8313 5.28125 28.175 5.8125 28.4625 6.55625C28.6813 7.11875 28.9438 7.96875 29.0125 9.525C29.0875 11.2125 29.1063 11.7188 29.1063 15.9875C29.1063 20.2625 29.0875 20.7688 29.0125 22.45C28.9438 24.0125 28.6813 24.8563 28.4625 25.4188C28.175 26.1625 27.825 26.7 27.2688 27.2563C26.7063 27.8188 26.175 28.1625 25.4313 28.45C24.8688 28.6688 24.0188 28.9313 22.4625 29C20.775 29.075 20.2688 29.0938 16 29.0938C11.725 29.0938 11.2188 29.075 9.5375 29C7.975 28.9313 7.13125 28.6688 6.56875 28.45C5.825 28.1625 5.2875 27.8125 4.73125 27.2563C4.16875 26.6938 3.825 26.1625 3.5375 25.4188C3.31875 24.8563 3.05625 24.0063 2.9875 22.45C2.9125 20.7625 2.89375 20.2563 2.89375 15.9875C2.89375 11.7125 2.9125 11.2063 2.9875 9.525C3.05625 7.9625 3.31875 7.11875 3.5375 6.55625C3.825 5.8125 4.175 5.275 4.73125 4.71875C5.29375 4.15625 5.825 3.8125 6.56875 3.525C7.13125 3.30625 7.98125 3.04375 9.5375 2.975C11.2188 2.9 11.725 2.88125 16 2.88125ZM16 0C11.6563 0 11.1125 0.01875 9.40625 0.09375C7.70625 0.16875 6.5375 0.44375 5.525 0.8375C4.46875 1.25 3.575 1.79375 2.6875 2.6875C1.79375 3.575 1.25 4.46875 0.8375 5.51875C0.44375 6.5375 0.16875 7.7 0.09375 9.4C0.01875 11.1125 0 11.6562 0 16C0 20.3438 0.01875 20.8875 0.09375 22.5938C0.16875 24.2938 0.44375 25.4625 0.8375 26.475C1.25 27.5313 1.79375 28.425 2.6875 29.3125C3.575 30.2 4.46875 30.75 5.51875 31.1562C6.5375 31.55 7.7 31.825 9.4 31.9C11.1063 31.975 11.65 31.9937 15.9938 31.9937C20.3375 31.9937 20.8813 31.975 22.5875 31.9C24.2875 31.825 25.4563 31.55 26.4688 31.1562C27.5188 30.75 28.4125 30.2 29.3 29.3125C30.1875 28.425 30.7375 27.5313 31.1438 26.4813C31.5375 25.4625 31.8125 24.3 31.8875 22.6C31.9625 20.8938 31.9813 20.35 31.9813 16.0063C31.9813 11.6625 31.9625 11.1188 31.8875 9.4125C31.8125 7.7125 31.5375 6.54375 31.1438 5.53125C30.75 4.46875 30.2063 3.575 29.3125 2.6875C28.425 1.8 27.5313 1.25 26.4813 0.84375C25.4625 0.45 24.3 0.175 22.6 0.1C20.8875 0.01875 20.3438 0 16 0Z"
                />
                <path
                  d="M16 7.78125C11.4625 7.78125 7.78125 11.4625 7.78125 16C7.78125 20.5375 11.4625 24.2188 16 24.2188C20.5375 24.2188 24.2188 20.5375 24.2188 16C24.2188 11.4625 20.5375 7.78125 16 7.78125ZM16 21.3312C13.0563 21.3312 10.6687 18.9438 10.6687 16C10.6687 13.0563 13.0563 10.6687 16 10.6687C18.9438 10.6687 21.3312 13.0563 21.3312 16C21.3312 18.9438 18.9438 21.3312 16 21.3312Z"
                />
                <path
                  d="M26.4625 7.45611C26.4625 8.51861 25.6 9.37486 24.5438 9.37486C23.4813 9.37486 22.625 8.51236 22.625 7.45611C22.625 6.3936 23.4875 5.53735 24.5438 5.53735C25.6 5.53735 26.4625 6.39985 26.4625 7.45611Z"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="https://www.tiktok.com/@makey.by?_t=8oUZozWjVN0&_r=1"
              target="_blank"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7634 0H17.3704V21.7971C17.3704 24.3942 15.2963 26.5276 12.715 26.5276C10.1338 26.5276 8.05961 24.3942 8.05961 21.7971C8.05961 19.2464 10.0877 17.1594 12.5768 17.0667V11.5942C7.09164 11.6869 2.66669 16.1855 2.66669 21.7971C2.66669 27.4551 7.18383 32 12.7612 32C18.3384 32 22.8555 27.4087 22.8555 21.7971V10.6203C24.8837 12.1044 27.3727 12.9855 30 13.0319V7.55942C25.9438 7.42029 22.7634 4.08116 22.7634 0Z"
                />
              </svg>
            </NuxtLink>

            <NuxtLink to="https://www.youtube.com/@Makey_World" target="_blank">
              <svg
                width="45"
                height="32"
                viewBox="0 0 45 32"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.6061 4.57259L40.5861 4.55161C40.1401 4.08317 39.7099 3.8777 39.3308 3.76422C38.9841 3.6604 38.744 3.63624 38.3763 3.59922C38.2558 3.58709 38.1215 3.57358 37.9653 3.55543C34.914 3.33537 31.0787 3.22295 27.9649 3.16623C26.4038 3.13779 25.0373 3.12357 24.0616 3.11646C23.5738 3.11291 23.1842 3.11114 22.9171 3.11025C22.7836 3.10981 22.6808 3.10959 22.6117 3.10948H22.3883C22.3192 3.10959 22.2164 3.10981 22.0829 3.11025C21.8158 3.11114 21.4262 3.11291 20.9384 3.11646C19.9627 3.12357 18.5962 3.13779 17.0351 3.16623C13.9213 3.22295 10.086 3.33537 7.03473 3.55543C6.8785 3.57358 6.74425 3.58709 6.62371 3.59922C6.25596 3.63624 6.01592 3.6604 5.66915 3.76422C5.29009 3.87771 4.8599 4.08317 4.41388 4.55161L4.3939 4.57259L4.37362 4.59308C4.37362 4.59308 4.36562 4.60132 4.35062 4.62028C4.33468 4.64042 4.31304 4.66987 4.28661 4.71028C4.23255 4.79293 4.16893 4.90534 4.09983 5.05041C3.95889 5.34627 3.83074 5.70242 3.72165 6.07661C3.61436 6.44462 3.53818 6.78606 3.48927 7.03516C3.46515 7.15805 3.44849 7.25419 3.43856 7.31472C3.4349 7.33698 3.43219 7.35425 3.43037 7.36606L3.41724 7.47691C3.40575 7.57553 3.38894 7.7235 3.36859 7.91372C3.32784 8.29449 3.27305 8.84267 3.21817 9.50172C3.10773 10.8279 3 12.5669 3 14.28V17.7035C3 19.4188 3.10578 21.1594 3.21416 22.4865C3.26803 23.1461 3.32181 23.6947 3.36181 24.0758C3.3818 24.2662 3.3983 24.4144 3.40959 24.5131L3.42155 24.6162C3.42336 24.6276 3.42581 24.6428 3.42892 24.6614C3.43906 24.7223 3.45602 24.8188 3.4805 24.9421C3.5301 25.192 3.60718 25.5345 3.71526 25.9038C3.82515 26.2792 3.95404 26.6371 4.09564 26.9349C4.1651 27.081 4.22907 27.1944 4.28354 27.2781C4.31018 27.319 4.33202 27.3489 4.34817 27.3694C4.36437 27.39 4.37258 27.3982 4.37159 27.3972L4.38848 27.4144L4.40509 27.4319C4.7688 27.8138 5.2019 28.0267 5.73512 28.1649C6.01264 28.2369 6.30236 28.2846 6.63058 28.3277C6.67926 28.334 6.74311 28.3418 6.81702 28.3508C7.03293 28.3772 7.33472 28.414 7.59525 28.4568C9.311 28.6105 12.9251 28.7189 16.2622 28.7876C17.9403 28.8221 19.5075 28.846 20.6557 28.8612C21.2295 28.8689 21.6982 28.8743 22.023 28.8779L22.5104 28.8829L22.5976 28.8826C22.6668 28.8824 22.7698 28.882 22.9036 28.8813C23.171 28.88 23.5612 28.8775 24.0495 28.8732C25.0265 28.8646 26.3946 28.8485 27.9574 28.8184C31.0733 28.7584 34.9128 28.6438 37.9674 28.4278C38.1227 28.4098 38.2563 28.3963 38.3763 28.3842C38.744 28.3472 38.9841 28.3231 39.3308 28.2192C39.7099 28.1058 40.1401 27.9003 40.5861 27.4319L40.6061 27.4109L40.6264 27.3903C40.6264 27.3903 40.6347 27.3818 40.6502 27.3622C40.6665 27.3418 40.6884 27.312 40.715 27.2712C40.7696 27.1879 40.8337 27.0749 40.9033 26.9293C41.0453 26.6324 41.1744 26.2754 41.2845 25.9007C41.3928 25.5322 41.47 25.1903 41.5196 24.9408C41.5441 24.8178 41.561 24.7215 41.5712 24.6609C41.5743 24.6422 41.5767 24.6271 41.5785 24.6157L41.5905 24.5128C41.6018 24.4143 41.6183 24.2665 41.6382 24.0765C41.6782 23.6962 41.732 23.1485 41.7859 22.4896C41.8942 21.164 42 19.4233 42 17.7035V14.28C42 12.5647 41.8942 10.824 41.7858 9.49696C41.732 8.8374 41.6782 8.28879 41.6382 7.90765C41.6182 7.71724 41.6017 7.5691 41.5904 7.47032L41.5785 7.3674C41.5781 7.36532 41.5778 7.36313 41.5774 7.36081C41.5758 7.35045 41.5737 7.33767 41.5712 7.32261C41.561 7.26195 41.5441 7.16566 41.5196 7.04261C41.47 6.7932 41.3928 6.4513 41.2845 6.08275C41.1744 5.70804 41.0453 5.35103 40.9033 5.05417C40.8337 4.90857 40.7696 4.79554 40.715 4.71223C40.6884 4.6715 40.6665 4.64171 40.6502 4.62123C40.6347 4.60163 40.6264 4.59312 40.6264 4.59312L40.6061 4.57259ZM44.5518 6.96526C44.5518 6.96526 45 10.627 45 14.28V17.7035C45 21.3653 44.5518 25.0182 44.5518 25.0182C44.5518 25.0182 44.1123 28.1329 42.7588 29.5006C41.2144 31.1225 39.506 31.2901 38.5401 31.3849C38.434 31.3953 38.3369 31.4048 38.25 31.4153C31.957 31.8653 22.5 31.8829 22.5 31.8829C22.5 31.8829 10.8018 31.777 7.19824 31.4329C7.02297 31.3989 6.80951 31.3728 6.56741 31.3432C5.42551 31.2034 3.64648 30.9857 2.23242 29.5006C0.887695 28.1329 0.448242 25.0182 0.448242 25.0182C0.448242 25.0182 0 21.3564 0 17.7035V14.28C0 10.627 0.457031 6.96526 0.457031 6.96526C0.457031 6.96526 0.887695 3.85055 2.24121 2.4829C3.78555 0.860949 5.49403 0.693351 6.45995 0.598596C6.56598 0.588195 6.66306 0.578671 6.75 0.568198C13.043 0.109375 22.4912 0.109375 22.4912 0.109375H22.5088C22.5088 0.109375 31.957 0.109375 38.25 0.568198C38.3369 0.578671 38.434 0.588195 38.5401 0.598596C39.506 0.693351 41.2144 0.860949 42.7588 2.4829C44.1123 3.85055 44.5518 6.96526 44.5518 6.96526Z"
                />
                <path
                  d="M17.8506 9.16406V21.8611L30.0059 15.5346L17.8506 9.16406Z"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <nav class="footer__nav">
          <div class="nav-item" v-for="item in links" :key="item.id">
            <NuxtLink
              :to="item.link"
              class="nav-item__title"
              v-if="item.link"
              >{{ item.title }}</NuxtLink
            >
            <h4 class="nav-item__title" v-else>{{ item.title }}</h4>
            <div class="nav-item__wrap" v-for="link in item.links">
              <NuxtLink :to="link.link">{{ link.title }}</NuxtLink>
            </div>
          </div>

          <div class="hidden max-[768px]:flex flex-col gap-2">
            <div class="flex flex-col gap-10">
              <WidgetsFooterMobileNavLink
                :data="item"
                v-for="item in links"
                :key="item.id"
              />
            </div>
          </div>
        </nav>
      </div>

      <div class="footer__bottom">
        <p class="footer__copy">Makey <span>2024</span></p>
        <p class="footer__policy">
          Частное предприятие «МакейТорг» | 2014-2024 | 230015, Республика
          Беларусь, город Гродно, ул.Горького, 87Б | время работы: пн-пт 9:30 -
          18:00 УНП 591017193 | Зарегистрировано Гродненским Горисполкомом
          22.09.2014 №591017193 | В торг. реестре с 15.03.2017 №371680
        </p>
      </div>

      <div class="footer-copy">
        <div class="footer-pay-logos">
          <IconsVisaLogo />
          <IconsWebpayLogo />
          <IconsVisaSecureLogo />
          <MCLogo />
          <IconsMCSecureLogo />
          <IconsBelcartLogo />
          <IconsBalcartSecureLogo />
          <IconsEripLogo />
        </div>
        <a href="" download=""></a>
        <div class="footer-copy-links" :class="{ black: !isHome }">
          <NuxtLink to="/polconf.pdf" class="footer-copy-link" external download
            >Политика конфиденциальности</NuxtLink
          >
          <NuxtLink
            to="/Publichnaya_oferta_(predlozhenie).pdf"
            class="footer-copy-link"
            external
            download
            >Договор публичной оферты</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-copy {
  display: flex;
  align-items: center;
  margin-top: 16px;
}

.footer-copy-links {
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: 14px;
  gap: 16px;
  text-decoration: underline;
  color: rgba($bgWhite, 0.5);
  &.black {
    color: $textBlack;
  }
}
.footer-pay-logos {
  display: flex;
  align-items: center;
  gap: 16px;
  svg {
    display: block;
    height: 24px;
  }
  img {
    height: 24px;
    display: block;
  }
}
.footer {
  padding: 40px 0 16px;
  color: $textWhite;
  background: $bgBlack;

  &.black {
    border-top: 1px solid rgba($bgBlack, 0.1);
    background: $bgWhite;
    color: $textBlack;

    svg {
      fill: $bgBlack;
    }
  }
}

.footer__wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
}

.footer__nav {
  display: flex;
  justify-content: space-between;
  gap: 80px;
}

.nav-item__title {
  font-weight: 500;
  font-size: 14px;
}

.nav-item__wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;

  a {
    opacity: 0.7;
    display: block;
    transition: opacity 0.2s ease-in-out;
    font-size: 14px;
    line-height: 150%;

    &:hover {
      opacity: 100;
    }
  }
}

.nav-item__title {
  font-size: 14px;
}

.footer__socials__title {
  font-size: 14px;
  font-weight: 500;
}

.footer__socials_wrap {
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 16px;
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__copy {
  font-size: 14px;
  line-height: 150%;
}

.footer__policy {
  font-size: 10px;
  line-height: 150%;
  opacity: 0.3;
}

@media screen and (max-width: 1280px) {
  .footer-copy {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-copy-links {
    margin-left: 0;
    margin-top: 32px;
  }
  .footer {
    padding: 40px 0 64px;
  }
  .footer__nav {
    gap: 64px;
  }

  .footer__nav-mob {
    display: flex;
  }

  .footer__bottom {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-top: 64px;
  }

  .footer__copy {
    flex-shrink: 0;

    span {
      color: #808080;
    }
  }

  .footer__policy {
    text-align: center;
    margin-top: 4px;
  }
}

@media screen and (max-width: 1024px) {
  .footer__wrap {
    flex-direction: column;
    gap: 40px;
  }

  .footer__nav {
    justify-content: space-between;
    gap: 0;
  }
}

@media screen and (max-width: 768px) {
  .footer-copy-links {
    flex-direction: column;
  }
  .footer-pay-logos {
    margin-top: 24px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    svg {
      display: block;
      height: 24px;
    }
    img {
      height: 24px;
      display: block;
    }
  }
  .footer__nav {
    flex-direction: column;
    gap: 24px;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .footer__policy {
    margin-top: 0;
  }
  .nav-item {
    display: none;
  }
}
</style>
