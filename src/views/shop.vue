<template>
  <div class="container mt-5 px-2 px-md-4"  >
    <!-- Breadcrumb + Sort Dropdown -->
    <nav aria-label="breadcrumb" class="d-flex align-items-center justify-content-between" >
      <ol class="breadcrumb d-flex flex-row fs-6 breadcrumb-align mb-3 ps-2" >
        <li class="breadcrumb-item" >
          <router-link to="/" class="text-muted text-decoration-none">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Shop</li>
      </ol>

      <!-- Sort Dropdown (Desktop) -->
      <div class="d-none d-lg-block">
        <div class="dropdown">
          <button class="btn btn-sm dropdown-toggle border-0 fs-6" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="margin-right: 30px;"> Sort by: {{ selectedOption }}</button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li v-for="option in options" :key="option">
              <a class="dropdown-item" href="#" @click.prevent="selectOption(option)">{{ option }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

      
      
        <!-- Filters + Sort Row (Mobile only) -->
    <div class="d-flex justify-content-between align-items-center d-lg-none mt-2 ">
      <!-- Filters Button (mobile only) -->
      <button class="btn btn-outline-dark btn-sm fs-6" type="button" data-bs-toggle="offcanvas" data-bs-target="#filtersOffcanvas" aria-controls="filtersOffcanvas" style="padding: 0.25rem 0.5rem; font-size: 0.85rem;" >
        <img src="../assets/img/Filters.png" class="me-1" style="height: 16px; width: auto;" /> Filters
      </button>

      <!-- Sort Dropdown (mobile only) -->
      <div class="dropdown">
        <button class="btn btn-sm dropdown-toggle border-0 fs-6" type="button"  data-bs-toggle="dropdown" aria-expanded="false"  >
          Sort by: {{ selectedOption }}
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li v-for="option in options" :key="option">
            <a class="dropdown-item" href="#"  @click.prevent="selectOption(option)">  {{ option }} </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Off-canvas Filters (Mobile) -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="filtersOffcanvas" aria-labelledby="filtersOffcanvasLabel" >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="filtersOffcanvasLabel">Filters</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
      </div>

      <div class="offcanvas-body">
      <p class="fs-5 fw-semibold mb-5">Showing 120 items</p>
          <hr />

          <!-- Categories -->
            <p class="fw-bold fs-6 mt-5">Category</p>
            <div class="form-check fs-6 mt-3" v-for="(cat, index) in categories" :key="cat.id" :class="index === categories.length - 1 ? 'mb-5' : ''">
              <input class="form-check-input border-black rounded-0" type="checkbox" :id="'desktop-' + cat.id"/>
              <label class="form-check-label" :for="'desktop-' + cat.id">{{ cat.name }}</label>
            </div>
            <hr />

          <!-- Price Range -->
            <p class="fw-bold fs-6 mt-5">Price Range</p>
            <div class="form-check fs-6 mt-3" v-for="(price, index) in prices" :key="price.id" :class="index === prices.length - 1 ? 'mb-5' : ''">
              <input class="form-check-input border-black rounded-0" type="checkbox" :id="'desktop-' + price.id"/>
              <label class="form-check-label" :for="'desktop-' + price.id">{{ price.label }}</label>
            </div>
            <hr />

          <!-- Color -->
          <p class="fw-bold fs-6 mt-5 ">Color</p>
          <div class="d-flex gap-4 mb-5">
            <button v-for="color in ['white', '#C69B7B', '#CCD8CE', '#B4555D', '#9B92A1']" :key="color" @click="selectedColor = color" :style="{ width: '18px', height: '18px',backgroundColor: color,border: '1px solid black',outline: selectedColor === color ? '2px solid #333' : 'none',outlineOffset: '2px'}"></button>
          </div>
          <hr />

          <!-- Tags -->
          <p class="fw-bold fs-6 mt-5">Tags</p>
          <div class="form-check fs-6 mt-3" v-for="cat in categories" :key="'tag-' + cat.id">
            <input class="form-check-input border-black rounded-0" type="checkbox" :id="'desktop-tag-' + cat.id"/>
            <label class="form-check-label" :for="'desktop-tag-' + cat.id">{{ cat.name }}</label>
      </div>

      <div class="d-flex gap-3 mb-4 mt-4 text-center mt-5">
        <button type="submit" class="log-btn d-flex justify-content-center align-items-center gap-2 mb-3 text-white w-50" style="height: 40px; font-size: 18px; padding: 10px; background-color: #3A3845; margin-left: 15px;"> Apply </button>

        <button type="submit" class="log-btn d-flex justify-content-center align-items-center gap-2 mb-3 text-white w-50" style="height: 40px; width: 50%; font-size: 18px; padding: 10px; background-color: #3A3845; margin-right: 15px;" > Cancel</button>
      </div>
</div>
 </div>

    <!-- Main Content: Sidebar + Products Grid -->
    <div class="row mt-5">
      <!-- Sidebar (desktop only) -->
      <aside class="col-lg-3 d-none d-lg-block ">
        <div class=" p-3 rounded ">
          <p class="fs-5 fw-semibold mb-5">Showing 120 items</p>
          <hr />

          <!-- Categories -->
            <p class="fw-bold fs-6 mt-5">Category</p>
            <div class="form-check fs-6 mt-3" v-for="(cat, index) in categories" :key="cat.id" :class="index === categories.length - 1 ? 'mb-5' : ''">
              <input class="form-check-input border-black rounded-0" type="checkbox" :id="'desktop-' + cat.id"/>
              <label class="form-check-label" :for="'desktop-' + cat.id">{{ cat.name }}</label>
            </div>
            <hr />

          <!-- Price Range -->
            <p class="fw-bold fs-6 mt-5">Price Range</p>
            <div class="form-check fs-6 mt-3" v-for="(price, index) in prices" :key="price.id" :class="index === prices.length - 1 ? 'mb-5' : ''">
              <input class="form-check-input border-black rounded-0" type="checkbox" :id="'desktop-' + price.id"/>
              <label class="form-check-label" :for="'desktop-' + price.id">{{ price.label }}</label>
            </div>
            <hr />

           <!-- Color -->
          <p class="fw-bold fs-6 mt-5">Color</p>
          <div class="d-flex gap-4 mb-5">
            <button v-for="color in ['white', '#C69B7B', '#CCD8CE', '#B4555D', '#9B92A1']" :key="color" @click="selectedColor = color" :style="{ width: '18px', height: '18px',backgroundColor: color,border: '1px solid black',outline: selectedColor === color ? '2px solid #333' : 'none',outlineOffset: '2px'}"></button>
          </div>
          <hr />

          <!-- Tags -->
          <p class="fw-bold fs-6 mt-5">Tags</p>
          <div class="form-check fs-6 mt-3" v-for="cat in categories" :key="'tag-' + cat.id">
            <input class="form-check-input border-black rounded-0" type="checkbox" :id="'desktop-tag-' + cat.id"/>
            <label class="form-check-label" :for="'desktop-tag-' + cat.id">{{ cat.name }}</label>
          </div>
        </div>
      </aside>

      <!-- Products Grid -->
      <section class="col-lg-9 mt-5 mb-5">
        <div class="row gy-5 mt-1 justify-content-center">
          <div  v-for="product in paginatedProducts" :key="product.id" class="col-6 col-md-6 col-lg-4 d-flex justify-content-center"  >
            <productCard :imgSrc="product.imgSrc" :title="product.title" :price="product.price"  :description="product.description" />
          </div>
        </div>
      </section>
    </div>

  
    <!-- Pagination -->
    <div class="d-flex justify-content-center justify-content-lg-end mt-5 mb-5">
      <nav aria-label="Page navigation">
        <ul class="pagination gap-2">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a href="#" class="page-link border-0 bg-transparent text-dark d-flex align-items-center justify-content-center fs-5" style="width: 36px; height: 36px;" @click.prevent="changePage(currentPage - 1)">&lt;</a>
          </li>

          <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
            <a href="#" class="page-link d-flex align-items-center justify-content-center fs-5" :class="currentPage === page? 'bg-dark text-white border border-dark rounded-0': 'text-dark border border-dark rounded-0'" style="width: 36px; height: 36px;" @click.prevent="changePage(page)">{{ page }}</a>
          </li>

          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a href="#" class="page-link border-0 bg-transparent text-dark d-flex align-items-center justify-content-center fs-5" style="width: 36px; height: 36px;" @click.prevent="changePage(currentPage + 1)">&gt;</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

 
</template>

<script setup>
import { ref,computed } from "vue"; 
import productCard from "../components/productCard.vue";


import card1 from "../assets/img/shop1.png";
import card2 from "../assets/img/shop2.png";
import card3 from "../assets/img/shop3.png";
import card4 from "../assets/img/shop4.png";
import card5 from "../assets/img/shop5.png";
import card6 from "../assets/img/shop6.png";
import card7 from "../assets/img/shop7.png";
import card8 from "../assets/img/shop8.png";
import card9 from "../assets/img/shop9.png";

const selectedColor = ref('');


const currentPage = ref(1);
const itemsPerPage = 9;

//page counter
const totalPages = computed(() => Math.ceil(products.length / itemsPerPage));

//current prod in page 
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return products.slice(start, start + itemsPerPage);
});

//changing pages
function changePage(page) {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
}

const selectedOption = ref("Name");

const options = [
  "Name",
  "Newest",
  "Best Sellers",
  "Price: Low to High",
  "Price: High to Low",
];

function selectOption(option) {
  selectedOption.value = option;
}

const products = [
  {
    id: 1, imgSrc: card1,title: "Small Ecru Ceramic Compote",price: "$49.00",description: "Lorem ipsum...",
  },
  {
    id: 2, imgSrc: card2,title: "Vasehite Porcelain Dinner Plate",price: "$49.00",description: "Perfect Lorem...",
  },
  {
    id: 3, imgSrc: card3,title: "Glass Candle Holder",price: "$19.99",description: "Clear glass candle holder.",
  },
  {
    id: 4,imgSrc: card4,title: "Marin White Dinner Plate",price: "$85.00", description: "Stylish plate.",
  },
  {
    id: 5,imgSrc: card5,title: "Wooden Side Table",price: "$129.00",description: "Modern wooden table.",
  },
  {
    id: 6,imgSrc: card6,title: "Art Wall Piece",price: "$45.00",description: "Add art to your space.",
  },
  {
    id: 7,imgSrc: card7,title: "Ceramic Pitcher",price: "$39.50",description: "Beautiful pitcher.",
  },
  {
    id: 8,imgSrc: card8,title: "Linen Cushion",price: "$25.00",description: "Soft and stylish cushion.",
  },
  {
    id: 9,imgSrc: card9,title: "Minimal Wall Clock",price: "$99.00",description: "Elegant style clock.",
  },

  {
    id: 10,imgSrc: card9,title: "Minimal Wall Clock",price: "$99.00",description: "Elegant style clock.",
  },

  {
    id: 11,imgSrc: card9,title: "Minimal Wall Clock",price: "$99.00",description: "Elegant style clock.",
  },

  {
    id: 12,imgSrc: card9,title: "Minimal Wall Clock",price: "$99.00",description: "Elegant style clock.",
  },
  
];

const categories = [
  { id: "dinnerwave", name: "DinnerWave" },
  { id: "ceramic", name: "Ceramic" },
  { id: "furniture", name: "Furniture" },
  { id: "decorart", name: "Decor Art" },
  { id: "giftsets", name: "Gift Sets" },
];

const prices = [
  { id: "p0", label: "$0 – $10" },
  { id: "p10", label: "$10 – $50" },
  { id: "p50", label: "$50 – $100" },
  { id: "p100", label: "$100 – $200" },
  { id: "p200", label: " > $200" },
];
</script>

<style scoped>
.breadcrumb-align {
  margin-left: 0 !important;
}
</style>