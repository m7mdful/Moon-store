<template>
  <div class="d-flex flex-column flex-md-row align-items-start gap-1 pt-2">
    <!-- Card -->
    <div
      class="card rounded-0 border-0"
      :style="{
        width: isMobile ? '170px' : '255px',
        height: isMobile ? '400px' : '500px'
      }"
    >
      <!-- Image -->
      <img
        :src="imgSrc"
        class="card-img-top"
        :alt="title"
        :style="{
          width: isMobile ? '170px' : '255px',
          height: isMobile ? '240px' : '321px',
          objectFit: 'cover'
        }"
      />

      <!-- Body -->
      <div
        class="card-body p-0 d-flex flex-column justify-content-between align-items-center" style="height: 100%;" >
        <div class="w-100 px-2 pt-2">
          <p class="fw-bold mb-1" style="font-size:16px;">{{ title }}</p>
          <span class="d-block">{{ price }}</span>
          <p class="card-text mt-3 text-muted">{{ description }}</p>
        </div>

        <!-- Button  -->
        <button type="button" class="btn text-black border-1 border-black rounded-0 fw-semibold" :style="{ width: isMobile ? '170px' : '255px', height: '39px'}" >Add to cart
</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(window.innerWidth <= 390)
const handleResize = () => {
  isMobile.value = window.innerWidth <= 390
}
onMounted(() => window.addEventListener('resize', handleResize))
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))

defineProps({
  imgSrc: String,
  title: String,
  price: String,
  description: String
})
</script>