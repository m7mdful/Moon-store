<script>
export default {
  name: 'AddressCard',
  props: {
    address: {
      type: Object,
      required: true
    }
  },
  methods: {
    editAddress() {
      this.$emit('edit', this.address);
    },
    deleteAddress() {
      this.$emit('delete', this.address.id);
    },
    setPrimary() {
      this.$emit('set-primary', this.address.id);
    }
  }
}
</script>

<template>
  <div class="card mb-3 shadow-sm rounded">
    <div class="card-body d-flex flex-column justify-content-between align-items-start">
      <div>
        <h5 class="card-title fs-4 text-primary">
          {{ address.title }} 
          <small v-if="address.isPrimary" class="text-success fs-6">(primary)</small>
        </h5>

        <p class="card-text text-muted mb-1 fs-6">{{ address.street }}</p>
        <p class="card-text text-muted mb-1 fs-6">{{ address.city }}</p>
        <p class="card-text text-muted mb-3 fs-6">Zip Code: {{ address.zipCode }}</p>
      </div>

      <div class="d-flex flex-wrap gap-1">
        <button class="btn btn-sm btn-outline-secondary fs-7 btnscale" @click="editAddress">Edit</button>
        <button v-if="!address.isPrimary" class="btn btn-sm btn-outline-primary fs-7 btnscale" @click="setPrimary">Set Primary</button>
        <button v-if="!address.isPrimary" class="btn btn-sm bg-danger text-white fs-7 btnscale" @click="deleteAddress">Delete</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
    border: 1px solid #dee2e6;
    transition: all 0.3s ease;
    padding: 1.5rem;
    min-height: 180px;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.12) !important;
}

.btnscale {
    transition: transform 0.2s ease;
}

.btnscale:hover {
    transform: scale(1.05);
}

.btn-outline-secondary:hover {
    background-color: #6c757d;
    color: white;
}

.btn-outline-primary:hover {
    background-color: #3A3845;
    border-color: #3A3845;
    color: white;
}

.text-primary {
    color: #3A3845 !important;
}

.bg-danger:hover {
    background-color: #c82333 !important;
}

/* Responsive typography */
@media (min-width: 992px) {
    .card {
        padding: 2.5rem;
        min-height: 220px;
        max-width: 600px;
    }
    
    .card-title {
        font-size: 1.75rem;
    }
    
    .card-text {
        font-size: 1.125rem;
    }
}
</style>