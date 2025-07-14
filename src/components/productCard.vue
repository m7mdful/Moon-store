<template>
<div class="d-flex flex-column flex-md-row justify-content-around align-items-start gap-3 pt-3">
  <div class="card product-card rounded-0 border-0">
    <img src="../assets/img/carditem1.svg" class="card-img-top" alt="Small Ecru Compote" />
    <div class="card-body p-0">
      <p class="fw-bold mb-1 mt-3" style="font-size:16px;">Small Ecru Ceramic Compote</p>
      <span class="d-block">$49.00</span>
      <p class="card-text mt-3 mb-5 text-muted">
        Lorem ipsum dolor sit amet conse bolli tetur adipiscing eli
      </p>
      <button
        type="button"
        class="btn w-100 text-black border-1 border-black rounded-0 fw-semibold">
        Add to cart
      </button>
    </div>
  </div>
  <div class=" product-card rounded-0 border-0">
    <img src="../assets/img/carditem1.svg" class="card-img-top" alt="Small Ecru Compote" />
    <div class="card-body p-0">
      <p class="fw-bold mb-1 mt-3" style="font-size:16px;">Small Ecru Ceramic Compote</p>
      <span class="d-block">$49.00</span>
      <p class="card-text mt-3 mb-5 text-muted">
        Lorem ipsum dolor sit amet conse bolli tetur adipiscing eli
      </p>
      <button
        type="button"
        class="btn w-100 text-black border-1 border-black rounded-0 fw-semibold">
        Add to cart
      </button>
    </div>
  </div>
</div>
</template>
<script>
export default {
}
</script>
<style scoped >
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