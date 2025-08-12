<!-- CartPage.vue -->
<script setup>
import { reactive, computed } from "vue";
import cartItem from "../components/cartItem.vue";
import { cart as initialCart } from "../dData";
import cardEmpt from "../components/cardEmpt.vue";

// reactive copy so v-model updates re-render
const cart = reactive(initialCart.map(i => ({ ...i })));

// remove handler
const removeItem = (id) => {
  const idx = cart.findIndex(i => i.id === id);
  if (idx !== -1) cart.splice(idx, 1);
};

// ---- totals ----
const DELIVERY_FEE = 15;

const subTotal = computed(() =>
  cart.reduce((sum, i) => sum + Number(i.price) * Number(i.quantity || 0), 0)
);

const cartTotal = computed(() => subTotal.value + DELIVERY_FEE);

// currency formatter (change currency if needed)
const fmt = (n) =>
  new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="mb-4">
      <div class="d-flex flex-column gap-4 justify-content-start align-content-center">
        <div class="container">
          <div class="d-flex flex-row justify-content-start align-items-start mt-2 fs-6">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">
                  <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="breadcrumb-item" aria-current="page">Cart</li>
              </ol>
            </nav>
          </div>

          <p class="fs-24 fw-semibold my-5">Cart ({{ cart.length }} items)</p>

          <!-- Table Header - only show when there are items -->
          <div class="d-none d-lg-block" v-if="cart.length > 0">
            <div class="row text-center fs-5 text-white p-1 pt-3 bg-primary justify-content-between rounded-4">
              <div class="col-auto">
                <img src="../assets/Trash.svg" alt="trash icon" />
              </div>
              <div class="col-2"><p>PHOTO</p></div>
              <div class="col-4"><p>PRODUCT</p></div>
              <div class="col-1"><p>PRICE</p></div>
              <div class="col-2"><p>QUANTITY</p></div>
              <div class="col-2"><p>SUBTOTAL</p></div>
            </div>
          </div>

          <!-- Cart Items OR Empty State -->
          <template v-if="cart.length > 0">
            <cartItem
              v-for="item in cart"
              :key="item.id"
              :id="item.id"
              :image="item.imgSrc[0]"
              :title="item.title"
              :price="item.price"
              v-model:quantity="item.quantity"
              :subtotal="item.price * item.quantity"
              @remove="removeItem(item.id)"
            />
          </template>
          <template v-else>
            <cardEmpt 
              msg="Your Cart is empty"
              smdet="Start exploring and add items you love to your cart!"
            />
          </template>

          <!-- Coupon Section - only show when there are items -->
          <div class="d-flex flex-wrap justify-content-between align-items-center gap-5" v-if="cart.length > 0">
            <div class="d-flex flex-wrap justify-content-center align-items-center gap-2 p-1">
              <input
                class="p-2 rounded-0"
                placeholder="Coupon code"
                type="text"
                style="border-style: solid; border-color: black; border-width: 1px;"
              />
              <button
                class="fs-7 fw-semibold bg-primary text-white"
                style="border-style: solid; border-color: black; border-width: 1px; padding: 5px 22px;"
              >
                APPLY COUPON
              </button>
            </div>
            <div>
              <button
                class="fs-7 fw-semibold bg-primary text-white"
                style="border-style: solid; border-color: black; border-width: 1px; padding: 5px 22px;"
              >
                UPDATE CART
              </button>
            </div>
          </div>

          <!-- Checkout totals - only show when there are items -->
          <div class="d-flex flex-row-reverse mt-4" v-if="cart.length > 0">
            <div class="d-flex flex-column bg-primary text-white p-5 gap-3" style="width: 390px">
              <p class="fs-4">Cart totals</p>

              <!-- Subtotal (dynamic) -->
              <div class="fs-6 d-flex flex-row justify-content-between">
                <p>Subtotal</p>
                <p>{{ fmt(subTotal) }}</p>
              </div>

              <!-- Delivery fee (fixed 15) -->
              <div class="fs-6 d-flex flex-row justify-content-between">
                <p>Delivery</p>
                <p>{{ fmt(DELIVERY_FEE) }}</p>
              </div>

              <!-- Cart total = Subtotal + Delivery -->
              <div class="fs-6 d-flex flex-row justify-content-between">
                <p>Cart total</p>
                <p>{{ fmt(cartTotal) }}</p>
              </div>

              <div class="d-flex justify-content-center mt-4">
                <router-link to="/checkout">
                  <button class="bg-transparent fw-semibold fs-7 text-white" style="border: 1px solid white; padding: 8px 90px">
                    PROCEED TO CHECKOUT
                  </button>
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.margining {
  margin-left: 200px;
  margin-right: 200px;
}
@media screen and (max-width: 992px) {
  .margining {
    margin-left: 30px;
    margin-right: 30px;
  }
}
</style>