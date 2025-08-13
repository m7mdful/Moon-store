<script>
export default {
  name: 'CardModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    order: {
      type: Object,
      default: null
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
    closeModal() {
      this.$emit('close');
    },
    handleOverlayClick(event) {
      if (event.target === event.currentTarget) {
        this.closeModal();
      }
    }
  }
}
</script>

<template>
  <div v-if="visible && order" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-content-custom" @click.stop>
      <div class="modal-header-custom">
        <h5 class="fs-24">Order Details #{{ order.id }}</h5>
        <button class="btn-close-custom" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body-custom">
        <p class="fs-5 mb-2"><strong>Status:</strong> <span :class="getStatusClass(order.status)">{{ order.status }}</span></p>
        <p class="fs-5 mb-2"><strong>Date:</strong> {{ order.date }}</p>
        <p class="fs-5 mb-3"><strong>Total:</strong> {{ order.total }}</p>
        
        <!-- Products Table -->
        <div class="mb-3">
          <p class="fs-5 mb-3"><strong>Products:</strong></p>
          <div class="products-list">
            <div v-for="(product, index) in order.products" 
                 :key="index" 
                 class="product-row">
              <img :src="product.image" 
                   class="product-img" 
                   alt="Product image">
              <div class="product-details">
                <span class="product-name fs-5">{{ product.name }}</span>
                <div class="price-details">
                  <span class="product-unit-price fs-6">{{ product.price }} × {{ product.quantity }}</span>
                  <span class="product-subtotal fs-5">{{ product.subtotal }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer-custom">
        <button class="btn btn-secondary fs-6" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Modal styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(2px);
}

.modal-content-custom {
    background: white;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: scale(0.9) translateY(-20px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.modal-header-custom {
    padding: 1.5rem;
    border-bottom: 1px solid #dee2e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f9fa;
    border-radius: 12px 12px 0 0;
}

.modal-header-custom h5 {
    color: #3A3845;
    font-weight: 600;
    margin: 0;
}

.modal-body-custom {
    padding: 1.5rem;
}

.modal-footer-custom {
    padding: 1rem 1.5rem;
    border-top: 1px solid #dee2e6;
    display: flex;
    justify-content: flex-end;
    background-color: #f8f9fa;
    border-radius: 0 0 12px 12px;
}

.btn-close-custom {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
}

.btn-close-custom:hover {
    background-color: #e9ecef;
    color: #dc3545;
    transform: rotate(90deg);
}

.products-list {
    border: 1px solid #dee2e6;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
}

.product-row {
    display: flex;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    transition: background-color 0.2s ease;
}

.product-row:last-child {
    border-bottom: none;
}

.product-row:hover {
    background-color: #f8f9fa;
}

.product-img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 15px;
    border: 1px solid #e9ecef;
}

.product-details {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.product-name {
    font-weight: 500;
    color: #333;
    margin-bottom: 4px;
}

.price-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-unit-price {
    color: #666;
    font-size: 0.9em;
}

.product-subtotal {
    color: #3A3845;
    font-weight: 600;
    font-size: 1em;
}

.btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
    transition: all 0.2s ease;
}

.btn-secondary:hover {
    background-color: #5a6268;
    border-color: #545b62;
    transform: translateY(-1px);
}

/* Responsive adjustments */
@media (max-width: 576px) {
    .modal-content-custom {
        width: 95%;
        margin: 10px;
    }
    
    .modal-header-custom,
    .modal-body-custom,
    .modal-footer-custom {
        padding: 1rem;
    }
    
    .product-row {
        padding: 12px;
    }
    
    .product-img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
}
</style>