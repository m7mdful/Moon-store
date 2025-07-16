<script setup>
import { computed } from 'vue';

import { useRoute, useRouter } from 'vue-router';
import Header from './components/header.vue'
import Footer from './components/footer.vue'

const route = useRoute();
const showHeaderFooter = computed(() => {
  return route.name !== 'login' && route.name !== 'register';
});
</script>

<template>
 <Header v-if="showHeaderFooter"/>
    <router-view/>
    <Footer v-if="showHeaderFooter"/>
</template>

<style scoped>

</style>
