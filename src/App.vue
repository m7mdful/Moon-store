<script setup>
import { useRoute, useRouter } from 'vue-router';
import Header from './components/header.vue'
import Footer from './components/footer.vue'

</script>

<template>
    <Header/>
    <router-view/>
    <Footer/>
</template>

<style scoped>

</style>
