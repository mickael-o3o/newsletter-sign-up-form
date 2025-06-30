<script setup lang="ts">
import IconSucces from '@/assets/icons/IconSucces.vue'
import { formData, showSuccessMessage } from '@/data/store'

console.log(formData.value.emaiAddress)
</script>
<template>
  <section v-if="showSuccessMessage" class="c-success-message">
    <!-- Success message start -->
    <header class="c-success-message__heading">
      <IconSucces />
      <h1 class="c-success-message__header">Thanks for subscribing!</h1>
    </header>
    <p class="c-success-message__details">
      A confirmation email has been sent to {{ formData.emaiAddress }}. Please open it and click the
      button inside to confirm your subscription.
    </p>
    <button
      type="button"
      @click="showSuccessMessage = false"
      class="c-success-message__dismiss-button"
    >
      Dismiss message
    </button>

    <!-- Success message end -->
  </section>
</template>

<style scoped lang="scss">
.c-success-message {
  background-color: var(--color-white);
  margin-block-start: 17.5rem;
  margin-inline: auto;
  padding-block-start: 3rem;
  padding-block-end: 4rem;
  padding-inline: 4rem;
  inline-size: 100%;
  max-inline-size: 31.5rem;
  border-radius: 2rem;

  @media (max-width: 375px) {
    margin-block-start: 0;
    border-radius: 0;
    padding-block-start: 9.3rem;
    padding-inline: 1.5rem;
  }

  &__header {
    font-family: var(--font-family-bold);
    font-size: 3.52rem;
    color: var(--color-neutral-800);
    margin-block-start: 2rem;
    line-height: 1;

    @media (max-width: 1000px) {
      font-size: 2.46rem;
      margin-block-start: 2.2rem;
    }
  }

  &__details {
    margin-block-start: 1.5rem;
  }

  &__dismiss-button {
    margin-block-start: 2.5rem;
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

    @media (max-width: 375px) {
      margin-block-start: 16.5rem;
    }

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-white);
    }
  }
}
</style>
