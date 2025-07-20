<!-- abdullah albashrawi -->
<template>
  <div class="d-flex flex-column flex-md-row align-items-start pt-2 btnscale">
    <!-- Card Wrapper -->
    <div
      class="card rounded-0 border-0 position-relative"
      @click="goToProduct"
      :style="{
        width: isMobile ? '170px' : '255px',
        height: isMobile ? '400px' : '500px',
        cursor: 'pointer'
      }"
    >
      <!-- Image -->
      <img :src="imgSrc" class="card-img-top" :alt="title"
        :style="{
          width: isMobile ? '170px' : '255px',
          height: isMobile ? '240px' : '321px',
          objectFit: 'cover'
        }"/>

      <!-- Body -->
      <div class="card-body p-0 d-flex flex-column justify-content-between align-items-center" style="height: 100%;">
        <div class="w-100 px-2 pt-2">
          <p class="fw-bold mb-1" style="font-size:16px;">{{ title }}</p>
          <span class="d-block fs-6 fw-semibold">${{ price }}</span>
          <p class="card-text mt-3 text-muted fs-6">{{ description }}</p>
        </div>

        <!-- Button -->
        <button
          type="button"
          class="btn text-black border-1 border-black rounded-0 fw-semibold position-relative"
          :style="{ width: isMobile ? '170px' : '255px', height: '39px' }"
          @click.stop="addToCart"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>

  <!-- Modal (move it outside the card wrapper div) -->
  <div
    v-if="showModal"
    class="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
    style="z-index: 1050;"
  >
    <div class="bg-white p-4 rounded text-center" style="min-width: 300px;">
      <p class="mb-4 fw-bold">Product added to cart!</p>
      <button class="btn btn-dark me-2" @click="goToCart">Go to Cart</button>
      <button class="btn btn-outline-secondary" @click="showModal = false">Continue Shopping</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  imgSrc: String,
  title: String,
  price: String,
  description: String
})

const isMobile = ref(window.innerWidth <= 390)
const showModal = ref(false)
const router = useRouter()

const handleResize = () => {
  isMobile.value = window.innerWidth <= 390
}
onMounted(() => window.addEventListener('resize', handleResize))
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))

const goToProduct = () => {
  router.push('/product') 
}

const addToCart = () => {
  showModal.value = true
}

const goToCart = () => {
  router.push('/cart')
}
</script>
<style >

</style>