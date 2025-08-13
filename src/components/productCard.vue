<template>
  <div class="d-flex flex-column flex-md-row align-items-start pt-2 btnscale">
    <!-- Card Wrapper -->
    <div
      class="card border-0 position-relative flex-shrink-0"
      @click="goToProduct"
      :style="{
        width: cardWidth,
        height: cardHeight,
        cursor: 'pointer',
        maxWidth: '100%' /* prevents overflow in tight containers */
      }"
    >
      <!-- Image -->
      <img
        :src="imgSrc"
        class="card-img-top"
        :alt="title"
        :style="{
          width: cardWidth,
          height: imageHeight,
          objectFit: 'cover',
          maxWidth: '100%'
        }"
      />

      <!-- Body -->
      <div
        class="card-body p-0 d-flex flex-column justify-content-between align-items-center"
        style="height: 100%;"
      >
        <div class="w-100 px-2 pt-2">
          <p class="fw-bold mb-1 text-truncate" style="font-size:16px;">
            {{ title }}
          </p>
          <span class="d-block fs-6 fw-semibold">${{ price }}</span>
          <p class="card-text mt-3 text-muted fs-6">
            {{ description }}
          </p>
        </div>

        <!-- Button -->
        <button
          type="button"
          class="btn text-black border-1 border-black rounded-0 fw-semibold position-relative fs-7"
          :style="{ width: cardWidth, height: '39px' }"
          @click.stop="addItemToCart(props.id)"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>

  <!-- modal  -->
  <div
    v-if="showModal"
    class="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
    style="z-index: 1050;"
  >
    <div class="bg-white p-4 rounded text-center" style="min-width: 300px;">
      <p class="mb-4 fw-bold fs-5">Product added to cart!</p>
      <button class="btn btn-dark me-2 fs-7" @click="goToCart">
        Go to Cart
      </button>
      <button class="btn btn-outline-secondary fs-7" @click="showModal = false">
        Continue Shopping
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { addToCart, getProductById } from '../dData.js'
import { useRouter } from 'vue-router'


const props = defineProps({
  imgSrc: String,
  title: String,
  price: String,
  description: String,
  id: String,
})
const addItemToCart = async (id) => {
  try {
    await addToCart(id, 1); 
    showModal.value = true;
  
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

const getProduct = async (id) => {
  try {
    await getProductById(id);
  } catch (error) {
    console.error('Error fetching product:', error);
  }
}

const isMobile = ref(window.matchMedia('(max-width: 768px)').matches)
const showModal = ref(false)
const router = useRouter()

let mql = null
const handleMedia = (e) => {
  isMobile.value = e.matches
}

onMounted(() => {
  mql = window.matchMedia('(max-width: 768px)')
  isMobile.value = mql.matches
  if (mql.addEventListener) {
    mql.addEventListener('change', handleMedia)
  } else {
    mql.addListener(handleMedia) // fallback for older browsers
  }
})
onBeforeUnmount(() => {
  if (!mql) return
  if (mql.removeEventListener) {
    mql.removeEventListener('change', handleMedia)
  } else {
    mql.removeListener(handleMedia)
  }
})

const cardWidth = computed(() => (isMobile.value ? '170px' : '255px'))
const cardHeight = computed(() => (isMobile.value ? '400px' : '500px'))
const imageHeight = computed(() => (isMobile.value ? '240px' : '321px'))

const goToProduct = async () => {
  if (props.id) {
    router.push(`/product/${props.id}`)
  } else {
    console.warn("No product ID available")
    router.push('/product')
  }
}


const goToCart = () => {
  router.push('/cart')
}
</script>

<style>

</style>