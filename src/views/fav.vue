<template>
  <div class="container mt-5 px-2 px-md-4">
    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb fs-6 ps-2">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-muted text-decoration-none">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Wishlist</li>
      </ol>
    </nav>

    <!-- Title -->
    <h4 class="fw-bold mt-3 mb-4 ps-2">Wishlist ({{ products.length }} items)</h4>

    <!-- Wishlist Grid -->
    <section class="row gy-5 justify-content-center mb-5">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-6 col-md-6 col-lg-4 d-flex justify-content-center position-relative"
        style="max-width: 270px"
      >
        <!-- Delete Icon -->
        <button class="btn position-absolute top-0 end-0 z-3 m-3 p-1 gx-3 border-0" style=" width: 30px; height: 30px;" @click="removeFromWishlist(product.id)" >
          <img src="../assets/icons8-delete-100.png" width="16" height="16" />
        </button>

        <!-- Product Card -->
        <productCard
          :imgSrc="product.imgSrc"
          :title="product.title"
          :price="product.price"
          :description="product.description"
        />
      </div>
    </section>

    <!-- Bottom Buttons -->
    <div class="d-flex justify-content-center gap-3 mb-5 flex-wrap">
      <button class="btn btn-dark px-4 py-2">Add All to Cart</button>
      <button class="btn btn-outline-danger d-flex align-items-center gap-2 px-4 py-2" @click="clearWishlist">
        <img src="../assets/icons8-delete-100.png" width="18" height="18" /> Clear List
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import productCard from "../components/productCard.vue";

import card1 from "../assets/img/shop1.png";
import card2 from "../assets/img/shop2.png";
import card3 from "../assets/img/shop3.png";
import card4 from "../assets/img/shop4.png";
import card5 from "../assets/img/shop5.png";
import card6 from "../assets/img/shop6.png";
import card7 from "../assets/img/shop7.png";
import card8 from "../assets/img/shop8.png";

const products = ref([
  { id: 1, imgSrc: card1, title: "Small Ecru Ceramic Compote", price: "$49.00" },
  { id: 2, imgSrc: card2, title: "Porcelain Dinner Plate", price: "$49.00" },
  { id: 3, imgSrc: card3, title: "Glass Candle Holder", price: "$19.99" },
  { id: 4, imgSrc: card4, title: "White Dinner Plate", price: "$85.00" },
  { id: 5, imgSrc: card5, title: "Wooden Side Table", price: "$129.00" },
  { id: 6, imgSrc: card6, title: "Art Wall Piece", price: "$45.00" },
  { id: 7, imgSrc: card7, title: "Ceramic Pitcher", price: "$39.50" },
  { id: 8, imgSrc: card8, title: "Linen Cushion", price: "$25.00" },
]);

function removeFromWishlist(id) {
  products.value = products.value.filter((p) => p.id !== id);
}

function clearWishlist() {
  products.value = [];
}
</script>