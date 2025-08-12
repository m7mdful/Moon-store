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
    <p class="fw-semibold fs-24 my-5 ps-2">
      Wishlist ({{ products.length }} items)
    </p>
    <!-- Wishlist Items -->
    <section class="mb-5 d-flex justify-content-center">
      <div v-if="products.length" class="row gy-5 w-100" style="max-width: 1100px;">
        
         <div class="d-flex flex-wrap justify-content-start align-content-center p-lg-2 p-1"
              style="gap: 15px">

           <!-- Product Card -->
          <productCard
            v-for="product in products"
            :key="product.id"
            class="col-6 col-md-4 col-lg-3 d-flex justify-content-start position-relative"
            :id="product.id"
            :imgSrc="product.imgSrc"
            :title="product.title"
            :price="product.price"
            :description="product.description"
            :trashButton="true"
            @remove="openDeleteModal"
            />
         </div>

        
        
      </div>
      <!-- Empty State -->
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
        @click="openCartModal"
      >
        Add All to Cart
      </button>

      <button
        class="btn btn-outline-danger d-flex align-items-center justify-content-center gap-2 px-4 py-2"
        style="width: 300px; height: 50px"
        @click="openClearAllModal"
      >
        <img src="../assets/icons8-delete-100.png" width="18" height="18" />
        <span class="fs-4">Clear List</span>
      </button>
    </div>

    <!-- Confirmation Modal -->
    <div
      v-if="showConfirmModal"
      class="modal fade show d-block"
      style="background: rgba(0,0,0,0.5);"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center fs-5 py-4">
            {{ modalMessage }}
          </div>
          <div class="modal-footer justify-content-center border-0 pb-4">
            <button
              type="button"
              class="btn btn-secondary fs-6 px-3"
              @click="closeModal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-danger fs-6 px-3"
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
      v-if="showCartModal"
      class="modal fade show d-block"
      style="background: rgba(0,0,0,0.5);"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center fs-5 py-4">
            All items have been successfully added to your cart.
          </div>
          <div class="modal-footer justify-content-center border-0 pb-4">
            <button
              type="button"
              class="btn btn-dark fs-5 px-4"
              @click="closeModal"
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
import { ref } from "vue";
import productCard from "../components/productCard.vue";
import CartEmpt from "../components/cardEmpt.vue";
import { wishlist } from "../dData.js";
const products = ref(wishlist);

// Modal State
const showConfirmModal = ref(false);
const showCartModal = ref(false);
const selectedProductId = ref(null);
const isClearAll = ref(false);
const modalMessage = ref("");

// Functions
function openDeleteModal(id) {
  selectedProductId.value = id;
  isClearAll.value = false;
  modalMessage.value =
    "Are you sure you want to remove this item from your wishlist?";
  showConfirmModal.value = true;
}

function openClearAllModal() {
  selectedProductId.value = null;
  isClearAll.value = true;
  modalMessage.value = "Are you sure you want to clear your entire wishlist?";
  showConfirmModal.value = true;
}

function openCartModal() {
  showCartModal.value = true;
}

function closeModal() {
  showConfirmModal.value = false;
  showCartModal.value = false;
}

function confirmAction() {
  if (isClearAll.value) {
    products.value = [];
  } else if (selectedProductId.value !== null) {
    products.value = products.value.filter((p) => p.id !== selectedProductId.value);
  }
  closeModal();
}
</script>