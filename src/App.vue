<script setup>
import { computed } from "vue";

import { useRoute, useRouter } from "vue-router";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";



const route = useRoute();
const showHeaderFooter = computed(() => {
  return route.name !== "login" && route.name !== "register";
});
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <Header v-if="showHeaderFooter" />
    <router-view class="flex-fill" />
    <Footer v-if="showHeaderFooter" />
  </div>
</template>

<style scoped>
  
</style>
