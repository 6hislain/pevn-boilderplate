<template>
  <Navbar />
  <main
    class="d-flex justify-content-center align-items-center bg-body-tertiary min-vh-100"
  >
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>
