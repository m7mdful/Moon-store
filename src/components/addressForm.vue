<script>
export default {
  name: 'AddressForm',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    editingAddress: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      newAddress: {
        title: '',
        street: '',
        city: '',
        zipCode: ''
      }
    }
  },
  watch: {
    editingAddress: {
      handler(newVal) {
        if (newVal) {
          this.newAddress = {
            title: newVal.title,
            street: newVal.street,
            city: newVal.city,
            zipCode: newVal.zipCode
          };
        } else {
          this.resetForm();
        }
      },
      immediate: true
    },
    visible(newVal) {
      if (!newVal) {
        this.resetForm();
      }
    }
  },
  methods: {
    resetForm() {
      this.newAddress = {
        title: '',
        street: '',
        city: '',
        zipCode: ''
      };
    },
    saveAddress() {
      this.$emit('save', this.newAddress);
    },
    cancel() {
      this.$emit('cancel');
    }
  }
}
</script>

<template>
  <div v-if="visible" class="card mb-4 w-75">
    <div class="card-body">
      <h5 class="card-title fs-4 text-primary">{{ editingAddress ? 'Edit Address' : 'Add New Address' }}</h5>
      <form @submit.prevent="saveAddress">
        <div class="mb-3">
          <label class="form-label fs-5">Address Title</label>
          <input type="text" class="form-control fs-6" v-model="newAddress.title" required>
        </div>
        <div class="mb-3">
          <label class="form-label fs-5">Street Address</label>
          <input type="text" class="form-control fs-6" v-model="newAddress.street" required>
        </div>
        <div class="mb-3">
          <label class="form-label fs-5">City</label>
          <input type="text" class="form-control fs-6" v-model="newAddress.city" required>
        </div>
        <div class="mb-3">
          <label class="form-label fs-5">Zip Code</label>
          <input type="text" class="form-control fs-6" v-model="newAddress.zipCode" required>
        </div>
        <div class="d-flex gap-2">
          <button type="submit" class="btn bg-success text-white fs-6">Save Address</button>
          <button type="button" class="btn btn-secondary fs-6" @click="cancel">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-control:focus {
    border-color: #3A3845;
    box-shadow: 0 0 0 0.2rem rgba(58, 56, 69, 0.25);
}

.btn:hover {
    transform: translateY(-1px);
    transition: transform 0.2s ease;
}
</style>