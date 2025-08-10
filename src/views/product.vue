<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import productCard from "../components/productCard.vue";
import shop9 from "../assets/img/shop9.png";
import shop5 from "../assets/img/shop5.png";
import shop2 from "../assets/img/shop2.png";
import shop1 from "../assets/img/shop1.png";

const router = useRouter();

const productImages = [shop9, shop5, shop2, shop1];
const currentImageIndex = ref(0);

const selectedColor = ref("Blue");
const quantity = ref(1);
const isFavorite = ref(false);
const showModal = ref(false);

function changeImage(index) {
  currentImageIndex.value = index;
}
function nextImage() {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % productImages.length;
}
function prevImage() {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + productImages.length) %
    productImages.length;
}

function selectColor(name) {
  selectedColor.value = name;
}

function increaseQty() {
  quantity.value++;
}
function decreaseQty() {
  if (quantity.value > 1) quantity.value--;
}

function toggleFavorite() {
  isFavorite.value = !isFavorite.value;
}

function addToCart() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

function goToCart() {
  closeModal();
  router.push("/cart");
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb " style="margin-left: 25px;">
      <ol class="breadcrumb fs-6 mb-5">
        <li class="breadcrumb-item active" aria-current="page">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <RouterLink to="/Shop">Shop</RouterLink>
        </li>
        <li class="breadcrumb-item" aria-current="page">Product</li>
      </ol>
    </nav>

    <div
      class="d-flex flex-lg-row flex-column align-content-center justify-content-center mt-5"
      style="gap: 80px;"
    >
      <div class="d-flex flex-column">
        <div class="d-flex  ms-lg-5 justify-content-center position-relative">
          <button
            class="position-absolute top-50 start-0 translate-middle-y bg-transparent border-0 arrow-button"
            style="font-size: 28px; line-height: 1; padding: 4px;"
            aria-label="Previous image"
            @click="prevImage"
          >
            ‹
          </button>

          <img
            class="imagscaling d-flex justify-content-center"
            :src="productImages[currentImageIndex]"
            alt="Product image"
          />

          <button
            class="position-absolute top-50 end-0 translate-middle-y bg-transparent border-0 arrow-button"
            style="font-size: 28px; line-height: 1; padding: 4px;"
            aria-label="Next image"
            @click="nextImage"
          >
            ›
          </button>
        </div>

        <div class="d-flex flex-row gap-4 justify-content-center mt-3">
          <button
            v-for="(img, index) in productImages"
            :key="index"
            class="bg-transparent border-0 p-0"
            @click="changeImage(index)"
            :aria-current="currentImageIndex === index ? 'true' : 'false'"
          >
            <img
              :src="img"
              width="60"
              alt="Thumbnail"
              :class="{ 'thumbnail-selected': currentImageIndex === index }"
            />
          </button>
        </div>
      </div>

      <div class="d-flex flex-column text-start text-lg-start">
        <p class="fs-4 fw-semibold">MARIN WHITE DINNER PLATE</p>
        <div
          class="d-flex flex-row justify-content-lg-start justify-content-around gap-4 align-items-center fs-6"
        >
          <img class="mb-3" src="../assets/star.svg" alt="" />
          <p>(1256 Reviews)</p>
          <p>Stock: <span style="color: #c69b7b">In stock</span></p>
        </div>
        <div class="d-flex gap-2 fs-5">
          <p>$35</p>
          <p class="text-decoration-line-through">$50</p>
        </div>

        <div class="d-flex gap-2 fs-6 mt-5 fw-semibold">
          <p>Color:</p>
          <p style="color: #c69b7b">{{ selectedColor }}</p>
        </div>

        <div class="d-flex gap-2">
          <div class="d-flex gap-2 mb-3">
            <span
              class="border-black bg-white border"
              :class="{ 'selected-swatch': selectedColor === 'White' }"
              style="width: 36px; height: 36px; cursor:pointer;"
              @click="selectColor('White')"
            ></span>

            <span
              class="border-black bg-secondary border"
              :class="{ 'selected-swatch': selectedColor === 'Gray' }"
              style="width: 36px; height: 36px; cursor:pointer;"
              @click="selectColor('Gray')"
            ></span>

            <span
              class="border-black bg-primary border"
              :class="{ 'selected-swatch': selectedColor === 'Blue' }"
              style="width: 36px; height: 36px; cursor:pointer;"
              @click="selectColor('Blue')"
            ></span>

            <span
              class="border-black bg-danger border"
              :class="{ 'selected-swatch': selectedColor === 'Red' }"
              style="width: 36px; height: 36px; cursor:pointer;"
              @click="selectColor('Red')"
            ></span>

            <span
              class="border-black bg-success mb-5 border"
              :class="{ 'selected-swatch': selectedColor === 'Green' }"
              style="width: 36px; height: 36px; cursor:pointer;"
              @click="selectColor('Green')"
            ></span>
          </div>
        </div>

        <div class="d-flex flex-column gap-3">
          <div class="d-flex flex-row gap-2 w-100">
            <div
              class="d-flex flex-row justify-content-center gap-5 py-1"
              style="width: 130px; height: 48px; border: 1px solid"
            >
              <button class="border-0 bg-transparent" @click="decreaseQty">
                <img src="../assets/Minus.svg" alt="Decrease quantity" />
              </button>
              <p class="mt-4 fw-bold" style="font-size: 10px;">{{ quantity }}</p>
              <button class="border-0 bg-transparent" @click="increaseQty">
                <img src="../assets/Plus.svg" alt="Increase quantity" />
              </button>
            </div>

            <button
              class="bg-primary border-0 text-white p-3"
              style="width: 375px; height: 48px;"
              @click="addToCart"
            >
              ADD TO CART
            </button>
          </div>

          <div class="d-flex flex-row gap-2">
            <button
              class="btn btn-light "
              style="
                width: 457px;
                height: 48px;
                border: 1px solid #3a3845;
              "
            >
              BUY NOW
            </button>
            <button
              class="bg-transparent "
              style="
                width: 48px;
                height: 48px;
                border: 1px solid #3a3845;
              "
              @click="toggleFavorite"
            >
              <img v-if="!isFavorite" src="../assets/heart.svg" alt="Add to favorite" />
              <i
                v-else
                class="bi bi-heart-fill"
                style="color: red; font-size: 18px"
              ></i>
            </button>
          </div>
        </div>

        <div
          class="d-flex flex-column gap-2 mt-5 w-100"
        >
          <p class="fw-semibold fs-5 text-start ">Share this</p>
          <div class="d-flex flex-row gap-4 justify-content-start justify-content-lg-start">
            <i class="bi bi-facebook" style="color: #c69b7b; font-size: 20px"></i>
            <i class="bi bi-twitter-x" style="color: #c69b7b; font-size: 20px"></i>
            <i class="bi bi-instagram" style="color: #c69b7b; font-size: 20px"></i>
            <i class="bi bi-linkedin" style="color: #c69b7b; font-size: 20px"></i>
          </div>
        </div>

        <!-- باقي التفاصيل (Details, Dimensions, Reviews) -->
        <div class="d-flex flex-column my-5 text-start">
          <div class="d-flex flex-column">
            <button
              class="d-flex justify-content-between p-3 bg-transparent border-top border-0 fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#one"
              aria-expanded="false"
              aria-controls="collapse"
            >
              <p class="m-0">Details</p>
              <i class="bi bi-plus"></i>
            </button>
            <div class="collapse mx-3" id="one" style="width: 360px">
              <p class="fs-5 text-muted text-wrap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quidem enim porro quo explicabo doloremque, reiciendis culpa
                dolore non veniam ratione, maiores laborum natus repudiandae
                eligendi accusamus quod magni. Rem.
              </p>
            </div>
            <button
              class="d-flex justify-content-between p-3 bg-transparent border-top border-0 fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#two"
              aria-expanded="false"
              aria-controls="collapse"
            >
              <p class="m-0">Dimensions</p>
              <i class="bi bi-plus"></i>
            </button>
            <div class="collapse mx-3" id="two" style="width: 360px">
              <p class="text-wrap text-muted fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quidem enim porro quo explicabo doloremque, reiciendis culpa
                dolore non veniam ratione, maiores laborum natus repudiandae
                eligendi accusamus quod magni. Rem.
              </p>
            </div>
            <button
              class="d-flex justify-content-between p-3 bg-transparent border-top border-0 fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#three"
              aria-expanded="false"
              aria-controls="collapse"
            >
              <p class="m-0">Reviews</p>
              <i class="bi bi-plus"></i>
            </button>
            <div class="collapse mx-3" id="three" style="width: 360px">
              <p class="text-wrap text-muted fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quidem enim porro quo explicabo doloremque, reiciendis culpa
                dolore non veniam ratione, maiores laborum natus repudiandae
                eligendi accusamus quod magni. Rem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column gap-2" style="margin: 60px 0px">
      <h2 class="fs-3 fw-semibold mb-5 ps-lg-5 ps-0 text-start text-lg-start" >
        SIMILAR ITEMS
      </h2>
      <div
        class="d-flex justify-content-center flex-wrap align-content-center"
        style="gap: 30px"
      >
        <productCard
          :imgSrc="shop9"
          title="Marin White Dinner Plate"
          price="30.50"
          description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
        />
        <productCard
          :imgSrc="shop9"
          title="Marin White Dinner Plate"
          price="30.50"
          description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
        />
        <productCard
          :imgSrc="shop9"
          title="Marin White Dinner Plate"
          price="30.50"
          description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
        />
        <productCard
          :imgSrc="shop9"
          title="Marin White Dinner Plate"
          price="30.50"
          description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
        />
      </div>
    </div>

    <!-- مودال الإضافة إلى السلة -->
    <div
      v-if="showModal"
      class="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
      style="z-index: 1050;"
      @click.self="closeModal"
    >
      <div class="bg-white p-4 rounded text-center" style="min-width: 300px;">
        <p class="mb-4 fw-bold fs-5">Product added to cart!</p>
        <button class="btn btn-dark me-2 fs-7" @click="goToCart">
        Go to Cart      
        </button>
        <button class="btn btn-outline-secondary fs-7" @click="closeModal">
             Continue Shopping
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imagscaling {
  width: 540px;
}

@media screen and (max-width: 992px) {
  .imagscaling {
    width: 100%;
    height: auto;
  }
}

.selected-swatch {
  outline: 2px solid #3a3845;
  outline-offset: 1px;
}

.thumbnail-selected {
  outline: 2px solid #3a3845;
  outline-offset: 2px;
  border-radius: 4px;
}

.arrow-button {
  font-size: 28px !important;
  line-height: 1 !important;
  padding: 4px !important;
  background: transparent !important;
  border: none !important;
  cursor: pointer;
  user-select: none;
  transition: color 0.3s ease;
  color: #3a3845;
}

.arrow-button:hover {
  color: #c69b7b;
}

@media (max-width: 576px) {
  .arrow-button {
    font-size: 24px !important;
    padding: 6px !important;
  }
}
</style>