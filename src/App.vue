<script setup lang="ts">
import SignUp from './components/SignUp.vue'
import SuccesMessage from './components/SuccesMessage.vue'
import TheAttribution from './components/TheAttribution.vue'
</script>

<template>
  <main class="p-main">
    <SignUp />
    <SuccesMessage />
  </main>
  <footer class="p-footer">
    <TheAttribution />
  </footer>
</template>

<style scoped lang="scss">
.p-main {
  padding-inline: 2.5rem;

  @media (max-width: 450px) {
    padding-inline: 0;
  }
}

.p-footer {
  display: grid;
  place-items: center;
  color: var(--color-white);
  margin: 1rem;
}
</style>
