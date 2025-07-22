<!-- abdullah albashrawi -->
<template>
  <div class="container mt-5 px-2 px-md-4">
    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb fs-6 ps-2">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-muted text-decoration-none"
            >Home</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">Wishlist</li>
      </ol>
    </nav>

    <!-- Title -->
    <p class="fw-semibold fs-24 my-5 ps-2">
      Wishlist ({{ products.length }} items)
    </p>

    <!-- Wishlist Grid -->
    <section class="mb-5">
      <div v-if="products.length > 0" class="row gy-5 justify-content-center">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-6 col-md-6 col-lg-4 d-flex justify-content-center position-relative"
          style="max-width: 270px"
        >
          <!-- Delete Icon -->
          <button
            class="btn position-absolute top-0 end-0 z-3 m-3 p-1 gx-3 border-0"
            style="width: 30px; height: 30px"
            @click="showDeleteModal(product.id)"
          >
            <img
              src="../assets/icons8-delete-100.png"
              width="28px"
              height="28px"
            />
          </button>

          <!-- Product Card -->
          <productCard
            :imgSrc="product.imgSrc"
            :title="product.title"
            :price="product.price"
            :description="product.description"
          />
        </div>
      </div>
      <CartEmpt
        v-else
        msg="Your Wishlist is empty"
        smdet="Start exploring and add items you love!"
      />
    </section>

    <!-- Bottom Buttons -->
    <div class="d-flex justify-content-center gap-3 mb-5 flex-wrap">
      <button
        class="btn btn-dark px-4 py-2 fs-4"
        style="width: 300px; height: 50px"
        @click="showCartModal"
      >
        Add All to Cart
      </button>

      <button
        style="width: 300px; height: 50px"
        class="btn btn-outline-danger d-flex align-items-center justify-content-center gap-2 px-4 py-2"
        @click="showClearAllModal"
      >
        <img src="../assets/icons8-delete-100.png" width="18" height="18" />
        <span class="fs-4">Clear List</span>
      </button>
    </div>

    <!-- Confirmation Modal -->
    <div
      class="modal fade"
      id="confirmationModal"
      tabindex="-1"
      aria-labelledby="confirmationModalLabel"
      aria-hidden="true"
      ref="confirmModalEl"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header"></div>
          <div class="modal-body d-flex justify-content-center fs-5">
            {{ modalMessage }}
          </div>
          <div class="modal-footer justify-content-center fs-5">
            <button
              type="button"
              class="btn btn-secondary fs-6"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-danger fs-6"
              @click="confirmAction"
            >
              Yes, Confirm
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add to Cart Modal -->
    <div
      class="modal fade"
      id="cartModal"
      tabindex="-1"
      aria-labelledby="cartModalLabel"
      aria-hidden="true"
      ref="cartModalEl"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fs-4" id="cartModalLabel">
              Items Added to Cart
            </h5>
          </div>
          <div class="modal-body d-flex justify-content-center fs-5">
            All items have been successfully added to your cart.
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-dark fs-5"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import productCard from "../components/productCard.vue";
import CartEmpt from "../components/cardEmpt.vue";
import card1 from "../assets/img/shop1.png";
import card2 from "../assets/img/shop2.png";
import card3 from "../assets/img/shop3.png";
import card4 from "../assets/img/shop4.png";
import card5 from "../assets/img/shop5.png";
import card6 from "../assets/img/shop6.png";
import card7 from "../assets/img/shop7.png";
import card8 from "../assets/img/shop8.png";

import * as bootstrap from "bootstrap";

const products = ref([
  { id: 1, imgSrc: card1, title: "Small Ecru Ceramic Compote", price: "49.00" },
  { id: 2, imgSrc: card2, title: "Porcelain Dinner Plate", price: "49.00" },
  { id: 3, imgSrc: card3, title: "Glass Candle Holder", price: "19.99" },
  { id: 4, imgSrc: card4, title: "White Dinner Plate", price: "85.00" },
  { id: 5, imgSrc: card5, title: "Wooden Side Table", price: "129.00" },
  { id: 6, imgSrc: card6, title: "Art Wall Piece", price: "45.00" },
  { id: 7, imgSrc: card7, title: "Ceramic Pitcher", price: "39.50" },
  { id: 8, imgSrc: card8, title: "Linen Cushion", price: "25.00" },
]);

// delete
const selectedProductId = ref(null);
const isClearAll = ref(false);
const modalMessage = ref("");
const confirmModalEl = ref(null);
let confirmModalInstance = null;

//  settings for "Add All to Cart"
const cartModalEl = ref(null);
let cartModalInstance = null;

onMounted(() => {
  confirmModalInstance = new bootstrap.Modal(confirmModalEl.value);
  cartModalInstance = new bootstrap.Modal(cartModalEl.value);
});

// delete modal pops up
function showDeleteModal(id) {
  selectedProductId.value = id;
  isClearAll.value = false;
  modalMessage.value =
    "Are you sure you want to remove this item from your wishlist?";
  confirmModalInstance.show();
}

//clear all
function showClearAllModal() {
  selectedProductId.value = null;
  isClearAll.value = true;
  modalMessage.value = "Are you sure you want to clear your entire wishlist?";
  confirmModalInstance.show();
}

// del confimation and do
function confirmAction() {
  if (isClearAll.value) {
    products.value = [];
  } else if (selectedProductId.value !== null) {
    products.value = products.value.filter(
      (p) => p.id !== selectedProductId.value
    );
  }
  confirmModalInstance.hide();
}

// show modal add to cart
function showCartModal() {
  cartModalInstance.show();
}
</script>
