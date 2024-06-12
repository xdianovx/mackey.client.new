<script setup>
const { isHome } = storeToRefs(useIsHomePageStore());

const links = [
  {
    id: 1,
    title: "Интернет-магазин",
    links: [
      { id: 1, title: "+375 (29) 577-22-77", link: "tel:+375 (29) 577-22-77" },
      { id: 2, title: "+375 (33) 301-70-17", link: "tel:+375 (33) 301-70-17" },
      { id: 3, title: "shop@makey.by", link: "mailto:shop@makey.by" },
    ],
  },
  {
    id: 2,
    title: "Корпоративным клиентам",
    links: [
      { id: 1, title: "+375 (29) 580-13-78", link: "tel:+375 (29) 580-13-78" },
      { id: 2, title: "+375 (29) 580-13-78", link: "tel:+375 (29) 580-13-78" },
      { id: 3, title: "tmanager@makey.by", link: "mailto:tmanager@makey.by" },
      { id: 4, title: "dovnar7@mail.ru", link: "mailto:dovnar7@mail.ru" },
    ],
  },
  {
    id: 3,
    title: "Сервис и поддержка",
    links: [
      { id: 1, title: "Контакты", link: "/contacts" },
      { id: 2, title: "О компании", link: "/o-kompanii" },
      { id: 3, title: "Магазины", link: "/stores" },
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
      { id: 4, title: "Помощь и FAQ", link: "/faq" },
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
            <NuxtLink to="https://www.instagram.com/" target="_blank">
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
            <NuxtLink to="https://www.tiktok.com/" target="_blank">
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
          </div>
        </div>

        <nav class="footer__nav">
          <div class="nav-item" v-for="item in links" :key="item.id">
            <h4 class="nav-item__title">{{ item.title }}</h4>
            <div class="nav-item__wrap" v-for="link in item.links">
              <NuxtLink :to="link.link">{{ link.title }}</NuxtLink>
            </div>
          </div>

          <!-- <MobileNavLink v-for="item in links" :key="item.id" :data="item" /> -->
        </nav>
      </div>

      <div class="footer__bottom">
        <p class="footer__copy">Makey <span>2024</span></p>
        <p class="footer__policy">
          Частное предприятие «МакейТорг» | 2014-2024 | 230015, Гродно,
          ул.Горького, 87Б | пн-пт 9:30 - 18:00 УНП 591017193 | Зарегистрировано
          Гродненским Горисполкомом 22.09.2014 №591017193 | В торг. реестре с
          15.03.2017 №371680
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
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
