<template>
  <div class="d-flex flex-column flex-md-row  align-items-start gap-3 pt-3">
    <div class="card product-card rounded-0 border-0">
      <img :src="imgSrc" class="card-img-top" :alt="title" />
          <div class="card-body p-0 d-flex flex-column justify-content-between" style="height: 100%;">
      <div>
        <p class="fw-bold mb-1 mt-3" style="font-size:16px;">{{ title }}</p>
        <span class="d-block">{{ price }}</span>
        <p class="card-text mt-3 text-muted">
          {{ description }}
        </p>
      </div>
      <button
        type="button"
        class="btn w-100 text-black border-1 border-black rounded-0 fw-semibold mt-3">
        Add to cart
      </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: String,
  title: String,
  price: String,
  description: String
})
</script>

<style scoped>
.product-card {
  width: 190px;
  height: 500px;
}
.product-card > img {
  width: 190px;
  height: 240px;
  object-fit: cover;
}
@media (min-width: 391px) {
  .product-card {
    width: 255px;
    height: 530px;
  }
  .product-card > img {
    width: 255px;
    height: 321px;
  }
}
</style>