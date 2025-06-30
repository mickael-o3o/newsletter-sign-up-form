<script setup lang="ts">
import IconList from '@/assets/icons/IconList.vue'
import { formData, showErrorMessage, showSuccessMessage } from '@/data/store'

const benefits = [
  { id: '1', benefit: 'Product discovery and building what matters' },
  { id: '2', benefit: 'Measuring to ensure updates are a success' },
  { id: '3', benefit: 'And much more!' },
]

function submitForm() {
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  const isValid = emailRegex.test(formData.value.emaiAddress)

  showErrorMessage.value = false
  if (isValid) {
    showErrorMessage.value = false
    showSuccessMessage.value = true
  } else {
    showErrorMessage.value = true
  }
}
</script>

<template>
  <!-- Sign-up form start -->
  <section v-if="!showSuccessMessage" class="c-sign-up">
    <header class="c-sign-up__heading">
      <picture>
        <source
          class="c-sign-up__image-illustration"
          media="(min-width: 1001px)"
          width="400"
          height="593"
          srcset="/images/illustration-sign-up-desktop.svg"
        />
        <source
          class="c-sign-up__image-illustration"
          media="(min-width: 451px)"
          width="400"
          height="593"
          srcset="/images/illustration-sign-up-tablet.svg"
        />
        <img
          class="c-sign-up__image-illustration"
          src="/images/illustration-sign-up-mobile.svg"
          alt=""
        />
      </picture>
    </header>
    <div class="c-sign-up__content-wrapper">
      <h1 class="c-sign-up__header">Stay updated!</h1>

      <p class="c-sign-up__description">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul class="c-sign-up__benefits-list">
        <li v-for="benefit in benefits" :key="benefit.id" class="c-sign-up__benefit">
          <IconList />
          {{ benefit.benefit }}
        </li>
      </ul>
      <form @submit.prevent="submitForm" class="c-sign-up__form">
        <div class="c-sign-up__input-info">
          <label for="email-adress" class="c-sign-up__label">Email address</label>
          <span
            v-if="showErrorMessage"
            id="email-adress-error"
            class="c-sign-up__email-adress-error"
          >
            Error : Valid email required
          </span>
        </div>
        <input
          type="text"
          id="email-adress"
          placeholder="email@company.com"
          :aria-invalid="showErrorMessage"
          aria-errormessage="email-adress-error"
          v-model="formData.emaiAddress"
          @keyup="showErrorMessage = false"
          class="c-sign-up__email-adress-input"
          :class="{ 'c-sign-up__email-adress-input--error': showErrorMessage }"
        />
        <button type="submit" class="c-sign-up__submit-button">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  </section>

  <!-- Sign-up form end -->
</template>

<style scoped lang="scss">
.c-sign-up {
  margin-block-start: 13.7rem;
  margin-inline: auto;
  padding: 1.5rem;
  overflow: hidden;
  inline-size: 100%;
  max-inline-size: 58rem;
  background-color: var(--color-white);
  display: grid;
  grid-template-columns: auto 45.5%;
  gap: 1.6rem;
  border-radius: 2rem;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    max-inline-size: 30rem;
    margin-block-start: 5rem;
    padding: 0;
  }

  @media (max-width: 450px) {
    margin-block-start: 0;
    border-radius: 0;
  }

  &__heading {
    order: 1;
    overflow: hidden;

    @media (max-width: 1000px) {
      order: -1;
    }
  }

  &__image-illustration {
    display: block;
    inline-size: 100%;
    block-size: auto;

    @media (max-width: 1000px) {
      block-size: auto;
      padding-inline: 1rem;
      padding-top: 0.35rem;
    }
  }

  &__content-wrapper {
    padding-block: 3.65rem;
    padding-inline: 2.4rem;
    order: 0;

    @media (max-width: 1000px) {
      padding-block: 0.5rem;
      padding-inline: 1.5rem;
      padding-block-end: 2.5rem;
    }
  }

  &__header {
    font-family: var(--font-family-bold);
    font-size: 3.52rem;
    color: var(--color-neutral-800);

    @media (max-width: 1000px) {
      font-size: 2.46rem;
    }
  }

  &__description {
    margin-block-start: 0.6rem;
    letter-spacing: 0.004rem;

    @media (max-width: 1000px) {
      margin-block-start: 0.9rem;
    }
  }

  &__benefits-list {
    margin-block-start: 1.5rem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    @media (max-width: 1000px) {
      margin-block-start: 1.55rem;
    }
  }

  &__benefit {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 1000px) {
      align-items: flex-start;
    }
  }

  &__form {
    margin-block-start: 2.6rem;

    display: flex;
    flex-direction: column;
  }

  &__input-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.78rem;
  }

  &__label {
    font-family: var(--font-family-bold);
  }

  &__email-adress-error {
    color: red;
  }

  &__email-adress-input {
    margin-block-start: 0.5rem;
    padding: 1rem 1.3rem;
    font-size: 1rem;
    color: var(--color-grey);
    letter-spacing: -0.05rem;
    border: 0.0625rem solid var(--color-grey);
    border-radius: 0.5rem;
    cursor: pointer;
  }

  &__email-adress-input--error {
    color: red;
    border-color: red;
    background-color: pink;
  }

  &__submit-button {
    margin-block-start: 1.6rem;
    inline-size: 100%;
    block-size: 3.5rem;
    display: grid;
    place-items: center;
    font-family: var(--font-family-bold);
    font-size: 1rem;
    color: var(--color-white);
    background-color: var(--color-neutral-800);
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-white);
    }

    @media (max-width: 1000px) {
      margin-block-start: 1.4rem;
    }
  }
}
</style>
