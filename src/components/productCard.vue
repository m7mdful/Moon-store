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
        :src="displayImage"
        class="card-img-top"
        :alt="title"
        :style="{
          width: cardWidth,
          height: imageHeight,
          objectFit: 'cover',
          maxWidth: '100%'
        }" 
      />
      <img
        v-if="trashButton"
        src="../assets/icons8-delete-100.png"
        width="25"
        height="25"
        class="position-absolute top-0 end-0 m-2 cursor-pointer"
        @click.stop="$emit('remove', id)"
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
          @click.stop="addToCart"
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
import { useRouter } from 'vue-router'

const props = defineProps({
    id: {
    type: [Number, String],
    required: true
  },
  imgSrc: {
    type: [String, Array],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: [String, Number],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  trashButton: {
    type: Boolean,
    default: false
  }
})

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

const displayImage = computed(() => {
  return Array.isArray(props.imgSrc) ? props.imgSrc[0] : props.imgSrc
})


const goToProduct = () => {
  router.push(`/product/${props.id}`)
}

const addToCart = () => {
  showModal.value = true
}

const goToCart = () => {
  router.push('/cart')
}
</script>

<style>

</style>