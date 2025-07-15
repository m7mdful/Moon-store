<template>
  <div class="container-fluid mt-4">
    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb"
         class="d-flex flex-row align-items-center mb-4 ms-4">
      <ol class="breadcrumb mb-0 d-flex flex-row">
        <li class="breadcrumb-item">
          <a href="#" class="text-muted text-decoration-none">Home</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Shop</li>
      </ol>
    </nav>

    <div class="shop-wrapper d-flex align-start" style="margin-inline: auto;">

      <aside class="filter-sidebar product-card px-3 pt-2">
        <p>Showing 120 items</p>
        <hr class="mt-0" />

        <p class="fw-bold">Category</p>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="dinnerwave" /><label class="form-check-label" for="dinnerwave">DinnerWave</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="ceramic" /><label class="form-check-label" for="ceramic">Ceramic</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="Furniture" /><label class="form-check-label" for="Furniture">Furniture</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="decorart" /><label class="form-check-label" for="decorart">Decor Art</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="giftsets" /><label class="form-check-label" for="giftsets">Gift Sets</label></div>

        <hr />

        <p class="fw-bold">Price Range</p>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="p0" /><label class="form-check-label" for="p0">$0 – $10</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="p10" /><label class="form-check-label" for="p10">$10 – $50</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="p50" /><label class="form-check-label" for="p50">$50 – $100</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="p100" /><label class="form-check-label" for="p100">$100 – $200</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="p200" /><label class="form-check-label" for="p200">› $200</label></div>

        <hr />

        <p class="fw-bold">Color</p>
        <div class="d-flex gap-2 mb-3">
          <span class="color-circle bg-white border"></span>
          <span class="color-circle bg-secondary"></span>
          <span class="color-circle bg-primary"></span>
          <span class="color-circle bg-danger"></span>
          <span class="color-circle bg-success"></span>
        </div>

        <hr />

        <p class="fw-bold">Tags</p>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="tag-dinnerwave" /><label class="form-check-label" for="tag-dinnerwave">DinnerWave</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="tag-ceramic" /><label class="form-check-label" for="tag-ceramic">Ceramic</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="tag-furniture" /><label class="form-check-label" for="tag-furniture">Furniture</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="tag-decorart" /><label class="form-check-label" for="tag-decorart">Decor Art</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="tag-giftsets" /><label class="form-check-label" for="tag-giftsets">Gift Sets</label></div>
      </aside>

      <div class="product-grid pt-2">
        <productCard
          v-for="product in products"
          :key="product.id"
          :imgSrc="product.imgSrc"
          :title="product.title"
          :price="product.price"
          :description="product.description"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import productCard from "../components/productCard.vue";

const products = [
  { id: 1, imgSrc: "https://via.placeholder.com/300x300?text=Product+2", title: "Moon Ceramic Bowl",   price: "$29.00", description: "Elegant ceramic bowl with soft touch." },
  { id: 2, imgSrc: "https://via.placeholder.com/300x300?text=Product+2", title: "White Decorative Vase", price: "$59.00", description: "Perfect for minimalist interiors." },
  { id: 3, imgSrc: "https://via.placeholder.com/300x300?text=Product+3", title: "Glass Candle Holder", price: "$19.99", description: "Clear glass candle holder for soft lighting." },
  { id: 4, imgSrc: "https://via.placeholder.com/300x300?text=Product+4", title: "Golden Frame Mirror", price: "$85.00", description: "Stylish mirror with golden frame." },
  { id: 5, imgSrc: "https://via.placeholder.com/300x300?text=Product+5", title: "Wooden Side Table", price: "$129.00", description: "Modern wooden table for living room." },
  { id: 6, imgSrc: "https://via.placeholder.com/300x300?text=Product+6", title: "Art Wall Piece", price: "$45.00", description: "Add a touch of art to your space." },
  { id: 7, imgSrc: "https://via.placeholder.com/300x300?text=Product+7", title: "Ceramic Pitcher",   price: "$39.50", description: "Beautiful pitcher for serving." },
  { id: 8, imgSrc: "https://via.placeholder.com/300x300?text=Product+8", title: "Linen Cushion",     price: "$25.00", description: "Soft and stylish cushion." },
  { id: 9, imgSrc: "https://via.placeholder.com/300x300?text=Product+9", title: "Minimal Wall Clock", price: "$99.00", description: "Keep time in elegant style." }
];
</script>

<style scoped>
.color-circle {
  width: 24px;
  height: 24px;
}

.shop-wrapper {
  column-gap: 50px;
  justify-content: center;
  align-items: flex-start;
}

.filter-sidebar {
  width: 255px;
  margin-left: 50px;
  flex-shrink: 0;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 255px);
  gap: 40px;
  justify-content: center;
}

@media (max-width: 992px) {
  .shop-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .filter-sidebar {
    display: none;
  }
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>