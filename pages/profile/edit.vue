<script setup>
const { isGray } = storeToRefs(useIsPageGrayStore());
import { Form } from "vee-validate";
</script>

<template>
  <main :class="{ gray: isGray }">
    <!-- Top -->
    <section class="top">
      <div class="container">
        <div class="top__wrap">
          <UiTitle tag="h2">Редактировать профиль</UiTitle>

          <div class="top__btns">
            <UiButtonsWhite text="Отмена" link="/profile" />
            <UiButtonsBlack text="Сохранить" />
          </div>
        </div>
      </div>
    </section>

    <!-- Form -->
    <section class="form-section">
      <div class="container">
        <Form class="form">
          <div class="form-row">
            <UiFormsInput label="Имя" />
            <UiFormsInput label="Фамилия" />
          </div>

          <div class="form-row">
            <UiFormsInput label="Телефон" />
            <UiFormsInput label="E-mail" />
            <UiFormsInput label="Дата рождения" />
          </div>
        </Form>
        <button class="delete-btn">Удалить аккаунт</button>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.gray {
  background: #f5f5f5;
  padding-bottom: 80px;
}

.top {
  margin-top: 100px;
}

.top__wrap {
  display: flex;
  align-items: center;
}

.top__btns {
  margin-left: auto;
  display: flex;
  gap: 8px;
  align-items: center;
}

.form-section {
  margin-top: 40px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.delete-btn {
  margin-top: 32px;
  display: inline-block;
  margin-left: auto;
  border: 1px solid $bgRed;
  color: $textRed;
  border-radius: 8px;
  padding: 14px 16px;
  line-height: 100%;
}

@media screen and (max-width: 1200px) {
  .top {
    margin-top: 100px;
  }

  .form-section {
    margin-top: 24px;
  }

  .delete-btn {
    margin-top: 20px;
  }

  .top__btns {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  .form-row {
    flex-direction: column;
  }

  .delete-btn {
    width: 100%;
  }
}
</style>
