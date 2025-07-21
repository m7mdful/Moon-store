<template>
  <div class="container py-5">
    <div class="d-flex flex-column justify-content-center align-items-center text-center">
      <!-- Illustration image -->
      <div>
        <img
          style="width: 400px; height: 400px;"
          src="../assets/shopcart.avif"
          alt="Empty Illustration"
        />
      </div>

      <!-- Message and sub-message -->
      <div class="mt-4 ms-4">
        <h1 class="fw-bold fs-2 ">{{ msg }}</h1>
        <p class="text-muted fs-4">{{ smdet }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props to accept the main message and small detail
defineProps({
  msg: {
    type: String,
    required: true
  },
  smdet: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
/* Make the image responsive */
img {
  max-width: 100%;
  height: auto;
}
</style>