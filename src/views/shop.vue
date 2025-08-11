<!-- Abdullah Albashrawi -->
<template>
  <div class="container mt-5 px-2 px-md-4">
    <!-- Breadcrumb + Sort Dropdown -->
    <nav aria-label="breadcrumb" class="d-flex align-items-center justify-content-between ms-1">
      <ol class="breadcrumb d-flex flex-row fs-6 breadcrumb-align mb-3 ps-2">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-muted text-decoration-none">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Shop</li>
      </ol>
    </nav>

    <!-- Filters + Sort Row (Mobile only) -->
    <div class="d-flex flex-row justify-content-between align-items-center d-lg-none mt-4">
      <!-- Filters Button (mobile only) -->
      <button
        class="btn btn-outline-dark btn-sm fs-6"
        type="button"
        style="padding: 0.25rem 0.5rem; font-size: 0.85rem;"
        @click="showFilters = true"
      >
        <img src="../assets/img/Filters.png" class="me-1" style="height: 16px; width: auto;" /> Filters
      </button>

      <!-- Sort Dropdown (mobile only) -->
      <div class="position-relative d-lg-none d-block">
        <div
          class="btn btn-sm border-0 fs-6 d-inline-flex align-items-center"
          style="cursor: pointer;"
          @click.stop="toggleMobileSort"
        >
          Sort by: {{ selectedOption }} <span style="margin-left: 6px;">▾</span>
        </div>
        <ul
          v-if="showMobileSort"
          class="list-unstyled position-absolute bg-white border shadow-sm mt-1"
          style="min-width: 150px; z-index: 10; padding: 0; margin: 0;"
          @click.stop
        >
          <li
            v-for="option in options"
            :key="option"
            @click="selectOption(option)"
            class="px-3 py-2"
            :style="{ backgroundColor: selectedOption === option ? '#f1f1f1' : 'transparent', cursor: 'pointer' }"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
<!-- Offcanvas filters panel - full screen with sliding effect -->
<transition name="slide-in-left">
  <div
    v-if="showFilters"
    class="offcanvas-mobile position-fixed top-0 start-0 bg-white h-100"
    style="width: 100vw; max-width: 400px; z-index: 1050; padding: 1rem 1.5rem; box-shadow: 4px 0 15px rgba(0,0,0,0.3); overflow-y: auto;"
  >
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="mb-0">Filters</h5>
      <button type="button" class="btn-close" aria-label="Close" @click="showFilters = false"></button>
    </div>

    <p class="fs-5 fw-semibold mb-4">Showing {{ filteredProducts.length }} items</p>

    <!-- Categories -->
    <p class="fw-bold fs-6 mt-3 mb-2">Category</p>
    <div
      class="form-check fs-6"
      v-for="(cat, index) in categories"
      :key="cat.id"
      :class="index === categories.length - 1 ? 'mb-5' : 'mb-3'"
    >
      <input
        class="form-check-input border-black rounded-0"
        type="checkbox"
        :id="'mobile-' + cat.id"
        :value="cat.id"
        v-model="selectedCategories"
      />
      <label class="form-check-label" :for="'mobile-' + cat.id">{{ cat.name }}</label>
    </div>

    <hr />

    <!-- Price Range -->
    <p class="fw-bold fs-6 mt-4 mb-2">Price Range</p>
    <div
      class="form-check fs-6"
      v-for="(price, index) in prices"
      :key="price.id"
      :class="index === prices.length - 1 ? 'mb-5' : 'mb-3'"
    >
      <input
        class="form-check-input border-black rounded-0"
        type="checkbox"
        :id="'mobile-' + price.id"
        :value="price.id"
        v-model="selectedPrices"
      />
      <label class="form-check-label" :for="'mobile-' + price.id">{{ price.label }}</label>
    </div>

    <hr />

    <!-- Color -->
    <p class="fw-bold fs-6 mt-4 mb-2">Color</p>
    <div class="d-flex gap-3 mb-5">
      <button
        v-for="color in ['white', '#C69B7B', '#CCD8CE', '#B4555D', '#9B92A1']"
        :key="color"
        @click="selectedColor = selectedColor === color ? '' : color"
        :style="{
          width: '20px',
          height: '20px',
          backgroundColor: color,
          border: '1px solid black',
          outline: selectedColor === color ? '3px solid #333' : 'none',
          outlineOffset: '2px',
          cursor: 'pointer'
        }"
        type="button"
        :aria-label="'Select color ' + color"
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
      v-for="tag in tags"
      :key="'tag-' + tag.id">
       <input
        class="form-check-input border-black rounded-0"
        type="checkbox"
        :id="'desktop-tag-' + tag.id"
        :value="tag.id"
        v-model="selectedTags"/>
     <label class="form-check-label" :for="'desktop-tag-' + tag.id">{{ tag.name }}</label>
            </div>

    <!-- Apply & Cancel buttons -->
    <div class="d-flex gap-3 mt-5 mb-4" style="position: sticky; bottom: 0; background-color: white; padding: 1rem;">
      <button
        type="button"
        class="log-btn flex-fill text-white"
        style="height: 42px; font-size: 16px; background-color: #3A3845;"
        @click="applyFilters"
      >
        Apply
      </button>
      <button
        type="button"
        class="log-btn flex-fill text-white"
        style="height: 42px; font-size: 16px; background-color: #3A3845;"
        @click="cancelFilters"
      >
        Cancel
      </button>
    </div>
  </div>
</transition>

<!-- Overlay (separate transition for fade) -->
<transition name="fade">
  <div
    v-if="showFilters"
    class="offcanvas-overlay position-fixed top-0 start-0 w-100 h-100"
    style="background: rgba(0,0,0,0.3); z-index: 1040;"
    @click="showFilters = false"
  ></div>
</transition>


    <div class="d-flex flex-row justify-content-between mt-5">
      <p class="fs-4 fw-semibold mb-5 ms-3">Showing {{ filteredProducts.length }} items</p>

      <!-- Sort Dropdown (Desktop) -->
      <div class="position-relative d-lg-block d-none mx-5">
        <div
          class="btn btn-sm border-0 fs-6 d-inline-flex align-items-center"
          style="cursor: pointer;"
          @click.stop="toggleDesktopSort"
        >
          Sort by: {{ selectedOption }} <span style="margin-left: 6px;">▾</span>
        </div>
        <ul
          v-if="showDesktopSort"
          class="list-unstyled position-absolute bg-white border shadow-sm mt-1"
          style="min-width: 150px; z-index: 10; padding: 0; margin: 0; right: 0;"
          @click.stop
        >
          <li
            v-for="option in options"
            :key="option"
            @click="selectOption(option)"
            class="px-3 py-2"
            :style="{ backgroundColor: selectedOption === option ? '#f1f1f1' : 'transparent', cursor: 'pointer' }"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Main Content: Sidebar + Products Grid -->
    <div class="row">
      <!-- Sidebar (desktop only) -->
      <aside class="col-lg-3 d-none d-lg-block">
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
              :aria-label="'Select color ' + color"
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
              v-for="tag in tags"
              :key="'tag-' + tag.id"
            >
              <input
                class="form-check-input border-black rounded-0"
                type="checkbox"
                :id="'desktop-tag-' + tag.id"
                :value="tag.id"
                v-model="selectedTags"
              />
              <label class="form-check-label" :for="'desktop-tag-' + tag.id">{{ tag.name }}</label>
            </div>
        </div>
      </aside>

      <!-- Products Grid -->
      <section class="col-lg-9 mb-5">
        <div class="row gy-5 justify-content-start">
          <div
            v-for="product in paginatedProducts"
            :key="product.id"
            class="col-6 col-md-6 col-lg-4 d-flex justify-content-center"
          >
            <productCard
              :id="product.id"
              :imgSrc="product.imgSrc[0]"
              :title="product.title"
              :price="product.price"
              :description="product.description"
            />
          </div>
        </div>
      </section>
    </div>

    <!-- Pagination -->
    <div class="d-flex justify-content-center justify-content-lg-end mt-5 mb-5">
      <nav aria-label="Page navigation">
        <ul class="pagination gap-2">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a
              href="#"
              class="page-link border-0 bg-transparent text-dark d-flex align-items-center justify-content-center fs-5"
              style="width: 36px; height: 36px;"
              @click.prevent="changePage(currentPage - 1)"
              >&lt;</a
            >
          </li>

          <li
            v-for="page in totalPages"
            :key="page"
            class="page-item"
            :class="{ active: currentPage === page }"
          >
            <a
              href="#"
              class="page-link d-flex align-items-center justify-content-center fs-5"
              :class="currentPage === page
                ? 'bg-dark text-white border border-dark rounded-0'
                : 'text-dark border border-dark rounded-0'"
              style="width: 36px; height: 36px;"
              @click.prevent="changePage(page)"
              >{{ page }}</a
            >
          </li>

          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a
              href="#"
              class="page-link border-0 bg-transparent text-dark d-flex align-items-center justify-content-center fs-5"
              style="width: 36px; height: 36px;"
              @click.prevent="changePage(currentPage + 1)"
              >&gt;</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import productCard from "../components/productCard.vue";
import { products } from "../dData.js";

//colors

// filter 
const selectedCategories = ref([]);
const selectedPrices = ref([]);
const selectedColor = ref("");
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

// Simple dropdown visibility controls
const showMobileSort = ref(false);
const showDesktopSort = ref(false);

// Offcanvas visibility simplified
const showFilters = ref(false);

function toggleMobileSort() {
  showMobileSort.value = !showMobileSort.value;
}

function toggleDesktopSort() {
  showDesktopSort.value = !showDesktopSort.value;
}

function selectOption(option) {
  selectedOption.value = option;
  currentPage.value = 1;
  showMobileSort.value = false;
  showDesktopSort.value = false;
}

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  const mobileRoot = e.target.closest(".d-lg-none");
  const desktopRoot = e.target.closest(".d-lg-block");
  if (!mobileRoot) showMobileSort.value = false;
  if (!desktopRoot) showDesktopSort.value = false;
});

// Reset filters helper
function resetFilters() {
  selectedCategories.value = [];
  selectedPrices.value = [];
  selectedColor.value = "";
  selectedTags.value = [];
  currentPage.value = 1;
}

// Apply / cancel simplified
function applyFilters() {
  currentPage.value = 1;
  showFilters.value = false;
}

function cancelFilters() {
  resetFilters();
}

// Legacy names kept
function applyMobileFilters() {
  applyFilters();
}
function cancelMobileFilters() {
  cancelFilters();
}

// Handle page change
function changePage(page) {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
}

// Reset pagination when sort changes
watch(selectedOption, () => {
  currentPage.value = 1;
});

const filteredProducts = computed(() => {
  return products.filter((product) => {
    if (selectedCategories.value.length && !selectedCategories.value.includes(product.category)) {
      return false;
    }

    if (selectedPrices.value.length) {
      const price = product.price;
      const matchPrice = selectedPrices.value.some((priceId) => {
        if (priceId === "p0") return price >= 0 && price <= 10;
        if (priceId === "p10") return price > 10 && price <= 50;
        if (priceId === "p50") return price > 50 && price <= 100;
        if (priceId === "p100") return price > 100 && price <= 200;
        if (priceId === "p200") return price > 200;
        return false;
      });
      if (!matchPrice) return false;
    }

    if (selectedColor.value && selectedColor.value !== product.color) {
      return false;
    }

    if (selectedTags.value.length) {
      const hasTag = selectedTags.value.some((tag) =>
        product.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
      );
      if (!hasTag) return false;
    }


    return true;
  });
});

const sortedProducts = computed(() => {
  return [...filteredProducts.value].sort((a, b) => {
    const opt = selectedOption.value;
    if (opt === "Name") return a.title.localeCompare(b.title);
    if (opt === "Newest") return b.id - a.id;
    if (opt === "Best Sellers") return a.id - b.id;
    if (opt === "Price: Low to High") return a.price - b.price;
    if (opt === "Price: High to Low") return b.price - a.price;
    return 0;
  });
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return sortedProducts.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));



// Categories for filters
const categories = computed(() => {
  const cats = [...new Set(products.map(p => p.category))];
  return cats.map(cat => ({
    id: cat,
    name: cat.charAt(0).toUpperCase() + cat.slice(1)
  }));
});

const tags = computed(() => {
  const allTags = products.flatMap(p => p.tags || []);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.map(tag => ({
    id: tag.toLowerCase(),
    name: tag
  }));
});


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
/* Slide-in animation for offcanvas */
.slide-in-left-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-in-left-leave-active {
  transition: transform 0.3s ease-in;
}
.slide-in-left-enter-from,
.slide-in-left-leave-to {
  transform: translateX(-100%);
}
.slide-in-left-enter-to,
.slide-in-left-leave-from {
  transform: translateX(0);
}
</style>