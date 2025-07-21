<!-- Abdullah Albashrawi -->
<template>
  <div class="container mt-5 px-2 px-md-4"  >
    <!-- Breadcrumb + Sort Dropdown -->
    <nav aria-label="breadcrumb" class="d-flex align-items-center justify-content-between ms-1" >
      <ol class="breadcrumb d-flex flex-row fs-6 breadcrumb-align mb-3 ps-2" >
        <li class="breadcrumb-item" >
          <router-link to="/" class="text-muted text-decoration-none">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Shop</li>
      </ol>
    </nav>

      
      
        <!-- Filters + Sort Row (Mobile only) -->
    <div class="d-flex flex-row justify-content-between align-items-center d-lg-none mt-4 ">
      <!-- Filters Button (mobile only) -->
      <button class="btn btn-outline-dark btn-sm fs-6" type="button" data-bs-toggle="offcanvas" data-bs-target="#filtersOffcanvas" aria-controls="filtersOffcanvas" style="padding: 0.25rem 0.5rem; font-size: 0.85rem;" >
        <img src="../assets/img/Filters.png" class="me-1" style="height: 16px; width: auto;" /> Filters
      </button>

      <!-- Sort Dropdown (mobile only) -->
     <div class="d-lg-none d-block ">
        <div class="dropdown ">
          <button class="btn btn-sm dropdown-toggle border-0 fs-6" type="button" data-bs-toggle="dropdown" aria-expanded="false" > Sort by: {{ selectedOption }}</button>
          <ul class="dropdown-menu dropdown-menu-end ">
            <li v-for="option in options" :key="option">
              <button class="dropdown-item" type="button" role="button" @click.stop="selectOption(option)">{{ option }} </button>           
           </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Off-canvas Filters (Mobile) -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="filtersOffcanvas" aria-labelledby="filtersOffcanvasLabel" >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="filtersOffcanvasLabel">Filters</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
      </div>

      <div class="offcanvas-body">
      <p class="fs-5 fw-semibold mb-5">Showing {{ filteredProducts.length }} items</p>
          <hr />

         <!-- Categories -->
          <p class="fw-bold fs-6 mt-5">Category</p>
          <div
            class="form-check fs-6 mt-3"
            v-for="(cat, index) in categories"
            :key="cat.id"
            :class="index === categories.length - 1 ? 'mb-5' : ''"
          >
            <input
              class="form-check-input border-black rounded-0"
              type="checkbox"
              :id="'desktop-' + cat.id"
              :value="cat.id"
              v-model="selectedCategories"
            />
            <label class="form-check-label" :for="'desktop-' + cat.id">{{ cat.name }}</label>
          </div>
          <hr />

          <!-- Price Range -->
          <p class="fw-bold fs-6 mt-5">Price Range</p>
          <div
            class="form-check fs-6 mt-3"
            v-for="(price, index) in prices"
            :key="price.id"
            :class="index === prices.length - 1 ? 'mb-5' : ''"
          >
            <input
              class="form-check-input border-black rounded-0"
              type="checkbox"
              :id="'desktop-' + price.id"
              :value="price.id"
              v-model="selectedPrices"
            />
            <label class="form-check-label" :for="'desktop-' + price.id">{{ price.label }}</label>
          </div>
          <hr />

          <!-- Color -->
          <p class="fw-bold fs-6 mt-5">Color</p>
          <div class="d-flex gap-4 mb-5">
            <button
              v-for="color in ['white', '#C69B7B', '#CCD8CE', '#B4555D', '#9B92A1']"
              :key="color"
              @click="selectedColor = selectedColor === color ? '' : color"
              :style="{
                width: '18px',
                height: '18px',
                backgroundColor: color,
                border: '1px solid black',
                outline: selectedColor === color ? '2px solid #333' : 'none',
                outlineOffset: '2px',
                cursor: 'pointer'
              }"
              type="button"
              aria-label="'Select color ' + color"
            ></button>
            <button
              v-if="selectedColor"
              @click="selectedColor = ''"
              class="btn btn-sm btn-outline-secondary ms-2"
              type="button"
            >
              Clear
            </button>
          </div>
          <hr />

          <!-- Tags -->
          <p class="fw-bold fs-5 mt-5">Tags</p>
          <div
            class="form-check fs-6 mt-3"
            v-for="cat in categories"
            :key="'tag-' + cat.id"
          >
            <input
              class="form-check-input border-black rounded-0"
              type="checkbox"
              :id="'desktop-tag-' + cat.id"
              :value="cat.id"
              v-model="selectedTags"
            />
            <label class="form-check-label" :for="'desktop-tag-' + cat.id">{{ cat.name }}</label>
          </div>
        </div>

      <div class="d-flex gap-3 mb-4 mt-4 text-center mt-5">
          <button type="button" class="log-btn d-flex justify-content-center align-items-center gap-2 mb-3 text-white w-50"
            style="height: 40px; font-size: 18px; padding: 10px; background-color: #3A3845; margin-left: 15px;"
            @click="applyMobileFilters">
            Apply
          </button>

          <button type="button" class="log-btn d-flex justify-content-center align-items-center gap-2 mb-3 text-white w-50"
            style="height: 40px; font-size: 18px; padding: 10px; background-color: #3A3845; margin-right: 15px;"
            @click="cancelMobileFilters">
            Cancel
          </button>
      </div>
</div>
    <div class="d-flex flex-row justify-content-between mt-5">
      <p class="fs-4 fw-semibold mb-5 ms-3">Showing {{ filteredProducts.length }} items</p>

       <!-- Sort Dropdown (Desktop) -->
      <div class="d-lg-block d-none">
        <div class="dropdown">
          <button class="btn btn-sm dropdown-toggle border-0 fs-6" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="margin-right: 30px;"> Sort by: {{ selectedOption }}</button>
          <ul class="dropdown-menu dropdown-menu-end ">
            <li v-for="option in options" :key="option">
              <button class="dropdown-item" type="button" role="button" @click.stop="selectOption(option)">{{ option }} </button>           
           </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Main Content: Sidebar + Products Grid -->
    <div class="row">
      <!-- Sidebar (desktop only) -->
     <aside class="col-lg-3 d-none d-lg-block ">
        <div class="p-3 rounded">
       
          <hr />

          <!-- Categories -->
          <p class="fw-bold fs-5 mt-5">Category</p>
          <div
            class="form-check fs-6 mt-3"
            v-for="(cat, index) in categories"
            :key="cat.id"
            :class="index === categories.length - 1 ? 'mb-5' : ''"
          >
            <input
              class="form-check-input border-black rounded-0"
              type="checkbox"
              :id="'desktop-' + cat.id"
              :value="cat.id"
              v-model="selectedCategories"
            />
            <label class="form-check-label" :for="'desktop-' + cat.id">{{ cat.name }}</label>
          </div>
          <hr />

          <!-- Price Range -->
          <p class="fw-bold fs-5 mt-5">Price Range</p>
          <div
            class="form-check fs-6 mt-3"
            v-for="(price, index) in prices"
            :key="price.id"
            :class="index === prices.length - 1 ? 'mb-5' : ''"
          >
            <input
              class="form-check-input border-black rounded-0"
              type="checkbox"
              :id="'desktop-' + price.id"
              :value="price.id"
              v-model="selectedPrices"
            />
            <label class="form-check-label" :for="'desktop-' + price.id">{{ price.label }}</label>
          </div>
          <hr />

          <!-- Color -->
          <p class="fw-bold fs-6 mt-5 fs-5">Color</p>
          <div class="d-flex gap-4 mb-5">
            <button
              v-for="color in ['white', '#C69B7B', '#CCD8CE', '#B4555D', '#9B92A1']"
              :key="color"
              @click="selectedColor = selectedColor === color ? '' : color"
              :style="{
                width: '18px',
                height: '18px',
                backgroundColor: color,
                border: '1px solid black',
                outline: selectedColor === color ? '2px solid #333' : 'none',
                outlineOffset: '2px',
                cursor: 'pointer'
              }"
              type="button"
              aria-label="'Select color ' + color"
            ></button>
            <button
              v-if="selectedColor"
              @click="selectedColor = ''"
              class="btn btn-sm btn-outline-secondary ms-2"
              type="button"
            >
              Clear
            </button>
          </div>
          <hr />

          <!-- Tags -->
          <p class="fw-bold fs-5 mt-5">Tags</p>
          <div
            class="form-check fs-6 mt-3"
            v-for="cat in categories"
            :key="'tag-' + cat.id"
          >
            <input
              class="form-check-input border-black rounded-0"
              type="checkbox"
              :id="'desktop-tag-' + cat.id"
              :value="cat.id"
              v-model="selectedTags"
            />
            <label class="form-check-label" :for="'desktop-tag-' + cat.id">{{ cat.name }}</label>
          </div>
        </div>
      </aside>

      <!-- Products Grid -->
      <section class="col-lg-9  mb-5">
        <div class="row gy-5 justify-content-center">
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
<cardEmpt msg="hjkdsfdfdfdfs" smdet="kdsjlndddds"/>
</template>

<script setup>
import { ref, computed } from "vue";
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
import * as bootstrap from 'bootstrap'
import cardEmpt from "../components/cardEmpt.vue";

//filter 
const selectedCategories = ref([]);
const selectedPrices = ref([]);
const selectedColor = ref('');
const selectedTags = ref([]);

// Pagination setup
const currentPage = ref(1);
const itemsPerPage = 9;


// Sorting setup
const selectedOption = ref("Name");
const options = [
  "Name",
  "Newest",
  "Best Sellers",
  "Price: Low to High",
  "Price: High to Low",
];

const filteredProducts = computed(() => {
  return products.filter(product => {
    // Category filter
    if (selectedCategories.value.length && !selectedCategories.value.includes(product.category)) {
      return false;
    }

    // Price filter
    if (selectedPrices.value.length) {
      const price = product.price;
      const matchPrice = selectedPrices.value.some(priceId => {
        if (priceId === "p0") return price >= 0 && price <= 10;
        if (priceId === "p10") return price > 10 && price <= 50;
        if (priceId === "p50") return price > 50 && price <= 100;
        if (priceId === "p100") return price > 100 && price <= 200;
        if (priceId === "p200") return price > 200;
        return false;
      });
      if (!matchPrice) return false;
    }

    // Color filter
    if (selectedColor.value && selectedColor.value !== product.color) {
      return false;
    }

    // Tags filter
    if (selectedTags.value.length) {
      const hasTag = selectedTags.value.some(tag => product.tags.includes(tag));
      if (!hasTag) return false;
    }

    return true;
  });
});

// Sort products based on selectedOption
const sortedProducts = computed(() => {
  return [...filteredProducts.value].sort((a, b) => {
    const opt = selectedOption.value;

    if (opt === "Name") {
      return a.title.localeCompare(b.title);
    }
    if (opt === "Newest") {
      return b.id - a.id; 
    }
    if (opt === "Best Sellers") {
      return a.id - b.id; 
    }
    if (opt === "Price: Low to High") {
      return a.price - b.price;
    }
    if (opt === "Price: High to Low") {
      return b.price - a.price;
    }

    return 0;
  });
});

// Get products to show on the current page after sorting
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return sortedProducts.value.slice(start, start + itemsPerPage);
});

function resetFilters() {
  selectedCategories.value = [];
  selectedPrices.value = [];
  selectedColor.value = '';
  currentPage.value = 1;
}


// Handle page change
function changePage(page) {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
}

// Handle dropdown selection
function selectOption(option) {
  console.log("Selected:", option);
  selectedOption.value = option;
  currentPage.value = 1;
}

// Calculate total number of pages
const totalPages = computed(() => Math.ceil(products.length / itemsPerPage));

//close the offcan
function applyMobileFilters() {
  const offcanvasEl = document.getElementById('filtersOffcanvas');
  const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
  if (bsOffcanvas) {
    bsOffcanvas.hide();
  }
}
//reset 
function cancelMobileFilters() {
  resetFilters(); 
  const offcanvasEl = document.getElementById('filtersOffcanvas');
  const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
  if (bsOffcanvas) {
    bsOffcanvas.hide();
  }
}

const products = [
  { id: 1, imgSrc: card1, title: "Mini Tasting Plate", price: 8, description: "Small appetizer plate ideal for sauces or tasting bites.", category: "dinnerwave", color: "white", tags: ["Mini", "Set"] },
  { id: 2, imgSrc: card2, title: "Everyday Dessert Plate", price: 22, description: "Lightweight daily-use plate sized for cake or fruit.", category: "ceramic", color: "#CCD8CE", tags: ["Everyday", "Classic"] },
  { id: 3, imgSrc: card3, title: "Rustic Side Plate", price: 32, description: "Matte finish with subtle rim texture for casual dining.", category: "furniture", color: "#C69B7B", tags: ["Rustic", "Casual"] },
  { id: 4, imgSrc: card4, title: "Studio Snack Plate", price: 48, description: "Clean studio look; perfect for small bites or desserts.", category: "decorart", color: "#9B92A1", tags: ["Minimal", "Snack"] },
  { id: 5, imgSrc: card5, title: "Host Dinner Plate", price: 72, description: "Generous surface for main courses; host-ready durability.", category: "dinnerwave", color: "white", tags: ["Hosting", "Dinner"] },
  { id: 6, imgSrc: card6, title: "Art Glaze Sharing Plate", price: 85, description: "Hand-glaze look with soft edge pooling; shareable size.", category: "decorart", color: "#B4555D", tags: ["Art", "Share"] },
  { id: 7, imgSrc: card7, title: "Stackable Lunch Plate", price: 99, description: "Space-saving stackable profile for compact kitchens.", category: "ceramic", color: "#CCD8CE", tags: ["Stackable", "Lunch"] },
  { id: 8, imgSrc: card8, title: "Gift Boxed Plate Duo", price: 129, description: "Pair of plates in a ready-to-wrap gift box set.", category: "giftsets", color: "#C69B7B", tags: ["Gift", "Duo"] },
  { id: 9, imgSrc: card9, title: "Chef Presentation Plate", price: 155, description: "Wide plating area for chef-style presentation at home.", category: "dinnerwave", color: "white", tags: ["Chef", "Presentation"] },
  { id: 10, imgSrc: card3, title: "Heritage Serving Charger", price: 180, description: "Oversized charger plate anchors layered table settings.", category: "furniture", color: "#B4555D", tags: ["Centerpiece", "Serve"] },
  { id: 11, imgSrc: card4, title: "Limited Edition Art Plate", price: 245, description: "Numbered run; hand-detailed rim pattern for collectors.", category: "decorart", color: "#9B92A1", tags: ["Limited", "Art"] },
  { id: 12, imgSrc: card5, title: "Premium Celebration Set Plate", price: 325, description: "Premium glaze and weight; designed for special occasions.", category: "giftsets", color: "#C69B7B", tags: ["Premium", "Occasion"] },
];

// Categories for filters
const categories = [
  { id: "dinnerwave", name: "DinnerWave" },
  { id: "ceramic", name: "Ceramic" },
  { id: "furniture", name: "Furniture" },
  { id: "decorart", name: "Decor Art" },
  { id: "giftsets", name: "Gift Sets" },
];

// Price ranges for filters
const prices = [
  { id: "p0", label: "$0 – $10" },
  { id: "p10", label: "$10 – $50" },
  { id: "p50", label: "$50 – $100" },
  { id: "p100", label: "$100 – $200" },
  { id: "p200", label: " > $200" },
];
</script>

<style scoped>
</style>