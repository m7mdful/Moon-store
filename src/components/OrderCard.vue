<script>
export default {
  name: 'OrderCard',
  props: {
    order: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    getStatusClass(status) {
      switch(status) {
        case 'Delivered': return 'text-success';
        case 'Processing': return 'text-warning';
        case 'Cancelled': return 'text-danger';
        default: return 'text-muted';
      }
    },
    viewOrderDetails() {
      this.$emit('view-details', this.order);
    }
  }
}
</script>

<template>
  <div class="card mb-4 shadow-sm rounded w-100 border-none shadow-lg btnscale">
    <div class="card-body">
      <div class="row g-4 align-items-center">

        <!-- Carousel -->
        <div class="col-12 col-md-5 ms-md-5">
          <div :id="`item${index + 1}`" class="carousel slide">
            <div class="carousel-inner rounded overflow-hidden">
              <div v-for="(image, imgIndex) in order.images" :key="imgIndex" 
                   :class="['carousel-item', { active: imgIndex === 0 }]">
                <img :src="image" class="d-block w-100 order-carousel-img" alt="item photo">
              </div>
            </div>

            <button class="carousel-control-prev" type="button" :data-bs-target="`#item${index + 1}`" data-bs-slide="prev">
              <span class="carousel-control-prev-icon black-arrow"></span>
            </button>
            <button class="carousel-control-next" type="button" :data-bs-target="`#item${index + 1}`" data-bs-slide="next">
              <span class="carousel-control-next-icon black-arrow"></span>
            </button>
          </div>
        </div>

        <!-- Order Info -->
        <div class="col-md-5 ms-2">
          <div class="ps-md-5 d-flex justify-content-center align-items-center">
            <div class="d-block">
              <h5 class="card-title text-primary fs-3">Order #{{ order.id }}</h5>
              <p class="fs-5"><strong>Status:</strong> <span :class="getStatusClass(order.status)">{{ order.status }}</span></p>
              <p class="fs-5"><strong>Date:</strong> {{ order.date }}</p>
              <p class="fs-5"><strong>Total:</strong> {{ order.total }}</p>
              <button class="btn bg-primary text-white mt-2 fs-4" @click="viewOrderDetails">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-carousel-img {
    height: 200px;
    object-fit: cover;
}

.carousel-control-prev-icon.black-arrow,
.carousel-control-next-icon.black-arrow {
    filter: invert(1);
}

.carousel-control-prev,
.carousel-control-next {
    width: 8%;
    color: #000000fd;
}

.btnscale {
    transition: all 0.3s ease;
}

.btnscale:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.text-primary {
    color: #3A3845 !important;
}

.bg-primary {
    background-color: #3A3845 !important;
}

.bg-primary:hover {
    background-color: #2d2a35 !important;
    transform: translateY(-1px);
    transition: all 0.2s ease;
}

.card {
    border: none;
}

.shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
}
</style>