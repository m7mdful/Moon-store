<template>
  <div class="container-fluid mt-5">
    <!-- Breadcrumb + Sort Dropdown -->
    <nav aria-label="breadcrumb" class="d-flex align-items-center justify-content-between">
      <ol class="breadcrumb d-flex flex-row fs-6 breadcrumb-align mb-0">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-muted text-decoration-none">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Shop</li>
      </ol>
    </nav>
  
    <!-- Filters Button (mobile only) -->
    <button class="btn btn-outline-dark d-lg-none my-3 mt-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#filtersOffcanvas" aria-controls="filtersOffcanvas">
      <img src="../assets/img/Filters.png" class=" me-1 fw-bold fs-3" /> Filters
    </button>

    <!-- Mobile + Desktop: Showing + Sort Dropdown -->
<div class="d-flex justify-content-between align-items-center w-100 px-3 mt-2 mb-3">
  <!-- Showing Items -->
  <p class="text-muted mb-0 d-lg-none" style="font-size: 15px;">Showing 120 items</p>

  <!-- Dropdown -->
  <div class="dropdown ms-auto">
    <button class="btn dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Sort by: {{ selectedOption }}
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li v-for="option in options" :key="option">
        <a class="dropdown-item" href="#" @click.prevent="selectOption(option)">
          {{ option }}
        </a>
      </li>
    </ul>
  </div>
</div>
    <!-- Off-canvas Filters (already static) -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="filtersOffcanvas" aria-labelledby="filtersOffcanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="filtersOffcanvasLabel">Filters</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
        <p class="fs-5 fw-semibold mb-5">Showing 120 items</p>
        <hr />

        <!-- Categories -->
        <p class="fw-bold fs-6 mt-5">Category</p>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-dinnerwave" />
          <label class="form-check-label" for="canvas-dinnerwave">DinnerWave</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-ceramic" />
          <label class="form-check-label" for="canvas-ceramic">Ceramic</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-furniture" />
          <label class="form-check-label" for="canvas-furniture">Furniture</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-decorart" />
          <label class="form-check-label" for="canvas-decorart">Decor Art</label>
        </div>
        <div class="form-check fs-6 mb-4">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-giftsets" />
          <label class="form-check-label" for="canvas-giftsets">Gift Sets</label>
        </div>

        <hr />

        <!-- Price Range -->
        <p class="fw-bold fs-6 mt-5">Price Range</p>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-p0" />
          <label class="form-check-label" for="canvas-p0">$0 – $10</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-p10" />
          <label class="form-check-label" for="canvas-p10">$10 – $50</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-p50" />
          <label class="form-check-label" for="canvas-p50">$50 – $100</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-p100" />
          <label class="form-check-label" for="canvas-p100">$100 – $200</label>
        </div>
        <div class="form-check fs-6 mb-4">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-p200" />
          <label class="form-check-label" for="canvas-p200">&gt; $200</label>
        </div>

        <hr />

        <!-- Color -->
        <p class="fw-bold fs-6 mt-5">Color</p>
        <div class="d-flex gap-2 mb-5">
          <span class="color-rec border-black bg-white border"></span>
          <span class="color-rec border-black bg-secondary"></span>
          <span class="color-rec border-black bg-primary"></span>
          <span class="color-rec border-black bg-danger"></span>
          <span class="color-rec border-black bg-success"></span>
        </div>

        <hr />

        <!-- Tags -->
        <p class="fw-bold fs-6 mt-5">Tags</p>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-tag-dinnerwave" />
          <label class="form-check-label" for="canvas-tag-dinnerwave">DinnerWave</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-tag-ceramic" />
          <label class="form-check-label" for="canvas-tag-ceramic">Ceramic</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-tag-furniture" />
          <label class="form-check-label" for="canvas-tag-furniture">Furniture</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-tag-decorart" />
          <label class="form-check-label" for="canvas-tag-decorart">Decor Art</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="canvas-tag-giftsets" />
          <label class="form-check-label" for="canvas-tag-giftsets">Gift Sets</label>
        </div>
      </div>
        <div class="d-flex gap-3 mb-4 mt-4 text-center">
            <button type="submit" class="log-btn d-flex justify-content-center align-items-center gap-2 mb-3 text-white w-50" style="height: 40px;  font-size: 18px; padding: 10px; background-color: #3A3845; margin-left: 15px; ">Apply</button>

            <button type="submit" class="log-btn d-flex justify-content-center align-items-center gap-2 mb-3 text-white w-50" style="height: 40px; width: 50%;  font-size: 18px; padding: 10px; background-color: #3A3845; margin-right: 15px; ">Cancel</button>

        </div>
    </div>
  
          <!-- /Desktop Sidebar -->
    <!-- Main Content -->
    <div class="shop-wrapper d-flex align-start">

      

      <div class="filter-sidebar product-card mt-3 d-none d-lg-block">
        <p class="fs-5 fw-semibold mb-5">Showing 120 items</p>
        <hr />

        <!-- Categories -->
        <p class="fw-bold fs-6 mt-5">Category</p>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-dinnerwave" />
          <label class="form-check-label" for="desktop-dinnerwave">DinnerWave</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-ceramic" />
          <label class="form-check-label" for="desktop-ceramic">Ceramic</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-furniture" />
          <label class="form-check-label" for="desktop-furniture">Furniture</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-decorart" />
          <label class="form-check-label" for="desktop-decorart">Decor Art</label>
        </div>
        <div class="form-check fs-6 mb-3">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-giftsets" />
          <label class="form-check-label" for="desktop-giftsets">Gift Sets</label>
        </div>

        <hr />

        <!-- Price Range -->
        <p class="fw-bold fs-6 mt-5">Price Range</p>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-p0" />
          <label class="form-check-label" for="desktop-p0">$0 – $10</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-p10" />
          <label class="form-check-label" for="desktop-p10">$10 – $50</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-p50" />
          <label class="form-check-label" for="desktop-p50">$50 – $100</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-p100" />
          <label class="form-check-label" for="desktop-p100">$100 – $200</label>
        </div>
        <div class="form-check fs-6 mb-3">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-p200" />
          <label class="form-check-label" for="desktop-p200">&gt; $200</label>
        </div>

        <hr />

        <!-- Color -->
        <p class="fw-bold fs-6 mt-5">Color</p>
        <div class="d-flex gap-2 mb-3">
          <span class="color-rec border-black bg-white border"></span>
          <span class="color-rec border-black bg-secondary"></span>
          <span class="color-rec border-black bg-primary"></span>
          <span class="color-rec border-black bg-danger"></span>
          <span class="color-rec border-black bg-success mb-5"></span>
        </div>

        <hr />

        <!-- Tags -->
        <p class="fw-bold fs-6 mt-5">Tags</p>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-tag-dinnerwave" />
          <label class="form-check-label" for="desktop-tag-dinnerwave">DinnerWave</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-tag-ceramic" />
          <label class="form-check-label" for="desktop-tag-ceramic">Ceramic</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-tag-furniture" />
          <label class="form-check-label" for="desktop-tag-furniture">Furniture</label>
        </div>
        <div class="form-check fs-6">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-tag-decorart" />
          <label class="form-check-label" for="desktop-tag-decorart">Decor Art</label>
        </div>
        <div class="form-check fs-6 mb-5">
          <input class="form-check-input border-black rounded-0" type="checkbox" id="desktop-tag-giftsets" />
          <label class="form-check-label" for="desktop-tag-giftsets">Gift Sets</label>
        </div>
      </div>


        
      <!-- Product Grid -->
      <div class="product-grid  px-md-4" style="padding-top:20px; margin-bottom:90px;padding-right: 10px;">
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

<!-- Pagination (centered on all screen sizes) -->
<div class="d-flex justify-content-center mt-4 mb-5">
  <nav aria-label="Page navigation">
    <ul class="pagination d-flex gap-2">

      <!-- < without border -->
      <li class="page-item">
        <a class="page-link border-0 bg-transparent text-dark d-flex align-items-center justify-content-center fs-5"
           style="width: 36px; height: 36px;">&lt;</a>
      </li>

      <!-- [1] with border and black background -->
      <li class="page-item active">
        <a class="page-link bg-dark text-white border border-dark rounded-0 d-flex align-items-center justify-content-center fs-5"
           style="width: 36px; height: 36px;">1</a>
      </li>

      <!-- [2] with border -->
      <li class="page-item">
        <a class="page-link text-dark border border-dark rounded-0 d-flex align-items-center justify-content-center fs-5"
           style="width: 36px; height: 36px;">2</a>
      </li>

      <!-- 3 without border -->
      <li class="page-item">
        <a class="page-link text-dark border-0 bg-transparent d-flex align-items-center justify-content-center fs-5"
           style="width: 36px; height: 36px;">3</a>
      </li>

      <!-- 4 without border -->
      <li class="page-item">
        <a class="page-link text-dark border-0 bg-transparent d-flex align-items-center justify-content-center fs-5"
           style="width: 36px; height: 36px;">4</a>
      </li>

      <!-- > without border -->
      <li class="page-item">
        <a class="page-link border-0 bg-transparent text-dark d-flex align-items-center justify-content-center fs-5"
           style="width: 36px; height: 36px;">&gt;</a>
      </li>

    </ul>
  </nav>
</div>

   
  </div>
</template>

<script setup>
import { ref } from 'vue';
import productCard from '../components/productCard.vue';

import card1 from '../assets/img/shop1.png';
import card2 from '../assets/img/shop2.png';
import card3 from '../assets/img/shop3.png';
import card4 from '../assets/img/shop4.png';
import card5 from '../assets/img/shop5.png';
import card6 from '../assets/img/shop6.png';
import card7 from '../assets/img/shop7.png';
import card8 from '../assets/img/shop8.png';
import card9 from '../assets/img/shop9.png';

const selectedOption = ref('Name');
const options = ['Name', 'Newest', 'Best Sellers', 'Price: Low to High', 'Price: High to Low'];

function selectOption(option) {
  selectedOption.value = option;
}

const products = [
  { id: 1, imgSrc: card1, title: 'Small Ecru Ceramic Compote', price: '$49.00', description: 'Lorem ipsum...' },
  { id: 2, imgSrc: card2, title: 'Vasehite Porcelain Dinner Plate', price: '$49.00', description: 'Perfect Lorem...' },
  { id: 3, imgSrc: card3, title: 'Glass Candle Holder', price: '$19.99', description: 'Clear glass candle holder.' },
  { id: 4, imgSrc: card4, title: 'Marin White Dinner Plate', price: '$85.00', description: 'Stylish plate.' },
  { id: 5, imgSrc: card5, title: 'Wooden Side Table', price: '$129.00', description: 'Modern wooden table.' },
  { id: 6, imgSrc: card6, title: 'Art Wall Piece', price: '$45.00', description: 'Add art to your space.' },
  { id: 7, imgSrc: card7, title: 'Ceramic Pitcher', price: '$39.50', description: 'Beautiful pitcher.' },
  { id: 8, imgSrc: card8, title: 'Linen Cushion', price: '$25.00', description: 'Soft and stylish cushion.' },
  { id: 9, imgSrc: card9, title: 'Minimal Wall Clock', price: '$99.00', description: 'Elegant style clock.' },
];
</script>

<style scoped>
.color-rec {
   width:14px; 
   height:14px; }

.shop-wrapper { 
  column-gap:50px; 
  justify-content:center; 
  align-items:flex-start; }

.filter-sidebar {
   width:255px; 
  margin-left:-30px !important; }

.product-grid { 
  display:grid;
  grid-template-columns:repeat(3,255px);
  gap:40px;
  justify-content:center; 
  }
@media (max-width:992px) {
  .shop-wrapper { flex-direction:column; align-items:center; }
  .filter-sidebar { display:none !important; }
  .product-grid { grid-template-columns:repeat(2,1fr); }
}
@media (max-width:576px) {
  .product-grid {
    grid-template-columns: repeat(2, 170px); 
    justify-content: center;
    gap: 15px;
   margin-left: 10px;
   margin-bottom: 10px;
   
  }
}
@media (min-width:992px) {
  .breadcrumb-align { margin-left:160px !important; }
  .sort-dropdown-margin { margin-right:10px !important; }
}

.pagination-custom .page-link {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 4px;
  font-size: 14px;
  border: 1px solid #000;
  color: black;
}

</style>