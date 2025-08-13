<script>
import { useRouter } from 'vue-router'
import OrderCard from '../components/OrderCard.vue'
import CardModal from '../components/OrderModal.vue'
import AddressForm from '../components/addressForm.vue'
import AddressCard from '../components/AddressCard.vue'



export default {
  components: {
    AddressForm,
    AddressCard,
    OrderCard,
    CardModal
  },
  data() {
    return {
      edit: false,
      showOrderModal: false,
      selectedOrder: null,
      showAddressForm: false,
      editingAddress: null,
      notificationSaving: false,
      notificationSaved: false,
      notifications: {
        email: false,
        whatsapp: false,
        sms: false
      },
      user: {
        firstName: "ABU ABDULADHEEM",
        secondName: "ABU ABDULADHEEM",
        email: "ABU_ABDULADHEEM@gmail.com",
        phone: "+966 55-123-456"
      },
      orders: [
        {
          id: 123456,
          status: 'Delivered',
          date: '2025-07-15',
          images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop'
          ],
          total: '250 SAR',
          products: [
            { image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', name: 'Wireless Headphones', price: '75 SAR', quantity: 2, subtotal: '150 SAR' },
            { image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop', name: 'Phone Case', price: '25 SAR', quantity: 2, subtotal: '50 SAR' },
            { image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop', name: 'Watch', price: '50 SAR', quantity: 1, subtotal: '50 SAR' }
          ]
        },
        {
          id: 123457,
          status: 'Processing',
          date: '2025-07-18',
          images: [
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'
          ],
          total: '180 SAR',
          products: [
            { image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop', name: 'Store Items', price: '50 SAR', quantity: 2, subtotal: '100 SAR' },
            { image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', name: 'Running Shoes', price: '80 SAR', quantity: 1, subtotal: '80 SAR' }
          ]
        },
        {
          id: 123458,
          status: 'Cancelled',
          date: '2025-07-19',
          images: [
            'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop'
          ],
          total: '320 SAR',
          products: [
            { image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400&h=400&fit=crop', name: 'Laptop', price: '200 SAR', quantity: 1, subtotal: '200 SAR' },
            { image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', name: 'Mouse', price: '30 SAR', quantity: 2, subtotal: '60 SAR' },
            { image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop', name: 'Keyboard', price: '60 SAR', quantity: 1, subtotal: '60 SAR' }
          ]
        }
      ],
      addresses: [
        {
          id: 1,
          title: 'Home Address',
          street: '123 King Abdulaziz Rd',
          city: 'Riyadh, Saudi Arabia',
          zipCode: '11564',
          isPrimary: true
        },
        {
          id: 2,
          title: 'Work Address',
          street: '456 Prince Sultan St',
          city: 'Jeddah, Saudi Arabia',
          zipCode: '21577',
          isPrimary: false
        }
      ]
    }
  },
  methods: {
    toggleEdit() {
        this.edit = !this.edit;
    },

    editLabel() {
        if (this.edit === true) {
            return 'Save';
        }
        return 'Edit';
    },

    // Order methods - now simplified since logic is in OrderCard and CardModal components
    viewOrderDetails(order) {
      this.selectedOrder = order;
      this.showOrderModal = true;
    },

    closeOrderModal() {
      this.showOrderModal = false;
      this.selectedOrder = null;
    },

    // Address methods - now simplified since logic is in AddressForm and AddressCard components
    showAddAddressForm() {
      this.showAddressForm = true;
      this.editingAddress = null;
    },

    hideAddressForm() {
      this.showAddressForm = false;
      this.editingAddress = null;
    },

    saveAddress(addressData) {
      if (this.editingAddress) {
        // Update existing address
        const index = this.addresses.findIndex(addr => addr.id === this.editingAddress.id);
        if (index !== -1) {
          this.addresses[index] = {
            ...this.editingAddress,
            ...addressData
          };
        }
      } else {
        // Add new address
        const newId = Math.max(...this.addresses.map(a => a.id)) + 1;
        this.addresses.push({
          id: newId,
          ...addressData,
          isPrimary: false
        });
      }
      this.hideAddressForm();
    },

    editAddress(address) {
      this.editingAddress = address;
      this.showAddressForm = true;
    },

    deleteAddress(addressId) {
      this.addresses = this.addresses.filter(addr => addr.id !== addressId);
    },

    setPrimary(addressId) {
      this.addresses.forEach(addr => {
        addr.isPrimary = addr.id === addressId;
      });
    },

    // Notification methods
    saveNotifications() {
      this.notificationSaving = true;
      this.notificationSaved = false;
      
      // Simulate API call
      setTimeout(() => {
        this.notificationSaving = false;
        this.notificationSaved = true;
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          this.notificationSaved = false;
        }, 3000);
      }, 1000);
    }
  }
}
</script>

<template>
    <!-- Section 1-->
  <section class="font-inter">
    <div class="row">
        <!-- Left Side -->
        <div class="col-12 col-md-5 col-lg-4 mx-lg-5 mt-5 mb-3 rounded-4 bg-moon">
            <div class="d-flex px-lg-4 flex-column justify-content-between h-100 bg-primary rounded-4">
                <div class="text-moon px-4 px-lg-2 sticky-top">
                    <div class="d-flex justify-content-center">
                        <img src="../assets/Avatar.svg" alt="profile-icon" class="profile-img rounded-circle">
                    </div>
                    <p class="text-white text-center fw-medium fs-4 mt-4">WELCOME, {{ user.firstName }}</p><hr><br><br>
                </div>

                <div class="pt-5 pt-lg-0 mx-4 mx-lg-0 signout-btn-container d-flex flex-column justify-content-center align-items-center">
                  <div style="width: 90%;">
                      <router-link to="/" class="btn btn-white bg-white border w-100 d-flex align-items-center justify-content-center gap-2 mb-4 fw-medium text-primary fs-5 rounded-2">Sign out</router-link>
                  </div>
                </div>
            </div>
        </div>
        <!-- Right Side -->
        <div class="col mt-5 ms-lg-5 ms-3 fs-4">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active text-moon" id="personal-tab-btn" data-bs-toggle="tab" href="#personal-tab" role="tab">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-vcard-fill me-2" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
                        </svg>Personal Information</a>
                </li>

                <li class="nav-item" role="presentation">
                    <a class="nav-link text-moon" id="order-tab-btn" data-bs-toggle="tab" href="#order-tab" role="tab">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam-fill me-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
                        </svg>Orders</a>
                </li>

                <li class="nav-item" role="presentation">
                    <a class="nav-link text-moon" id="address-tab-btn" data-bs-toggle="tab" href="#address-tab" role="tab">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>Addresses</a>
                </li>
            </ul>

            <div class="tab-content mt-3" id="myTabContent">
                <!-- Personal Information -->
                <div class="tab-pane fade show active" id="personal-tab" role="tabpanel">
                    
                    <div class="container">
                        <div class="d-flex justify-content-between w-100">
                            <p class="fs-24 fw-bold text-primary py-3">Personal Information</p>
                            <button class="btn btn-link  me-5 fs-4" @click="toggleEdit">
                                {{ editLabel() }}
                            </button>
                        </div>

                        <div class="mt-4">
                            <p class="fs-5 mb-3">
                                First Name:
                                <input
                                type="text"
                                class="form-control w-50 d-inline ms-lg-5 ms-2 fs-6"
                                :readonly="!edit"
                                v-model.lazy="user.firstName"
                                >
                            </p>
                        </div>

                        <div class="mt-3">
                            <p class="fs-5 mb-3">
                                Second Name:
                                <input
                                type="text"
                                class="form-control w-50 d-inline ms-lg-5 ms-2 fs-6"
                                :readonly="!edit"
                                v-model="user.secondName"
                                >
                            </p>
                        </div>

                        <div class="mt-3">
                            <p class="fs-5 mb-3">
                                Email:
                                <input
                                type="email"
                                class="form-control w-75 d-inline ms-lg-5 ms-2 fs-6"
                                :readonly="!edit"
                                v-model="user.email"
                                >
                            </p>
                        </div>

                        <div class="mt-3"><hr /></div>
                    </div>

                    <!-- Phone number -->
                    <div class="container">
                        <p class="fs-24 fw-bold text-primary py-3">Phone Number</p>
                        <div class="mt-3">
                            <p class="fs-5 mb-3">
                                <input
                                type="text"
                                class="form-control w-50 ms-3 fs-6"
                                :readonly="!edit"
                                v-model="user.phone"
                                >
                            </p>
                        </div>
                        <div class="mt-4 mb-3"><hr /></div>
                    </div>

                    <!-- Notification -->
                    <div class="container">
                        <p class="fs-24 fw-bold text-primary py-3">Promotion Notification</p>
                        <form class="mt-3" @submit.prevent="saveNotifications">
                            <!-- Email -->
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" v-model="notifications.email" id="notif-email">
                                <label class="form-check-label fs-5" for="notif-email">Email</label>
                            </div>

                            <!-- WhatsApp -->
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" v-model="notifications.whatsapp" id="notif-whatsapp">
                                <label class="form-check-label fs-5" for="notif-whatsapp">Whatsapp</label>
                            </div>

                            <!-- SMS -->
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" v-model="notifications.sms" id="notif-sms">
                                <label class="form-check-label fs-5" for="notif-sms">SMS</label>
                            </div>

                            <!-- Success Message -->
                            <div v-if="notificationSaved" class="alert alert-success mt-3" role="alert">
                                <small class="fs-6">Notification preferences saved successfully!</small>
                            </div>

                            <button type="submit" 
                                    class="btn w-25 text-white mt-3 bg-primary fs-6" 
                                    :disabled="notificationSaving">
                                <span v-if="notificationSaving">
                                    <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                                    Saving...
                                </span>
                                <span v-else>Save</span>
                            </button>
                        </form>
                        <div class="mt-4 mb-3"><hr /></div>
                    </div>

                    <!-- Disable Account -->
                    <div class="container mb-5">
                        <p class="fs-5 fw-bold text-primary py-3">Disable Account</p>
                        <div class="mt-3">
                            <p class="d-inline fs-5">Delete your Account?</p>
                            <small class="text-muted d-block fs-6">Once you delete your account, there is no going back. Please be certain.</small>
                            
                            <!-- Modal -->
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-danger d-block mt-4 fs-6" data-bs-toggle="modal" data-bs-target="#exampleModal">Disable your account</button>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-24" id="exampleModalLabel">Disable account</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="fs-5">Are you sure you want to delete your account?</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary fs-6" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-danger fs-6">Delete your account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Orders Tab - Now using OrderCard and CardModal components -->
                <div class="tab-pane fade " id="order-tab" role="tabpanel">
                    <h3 class="fs-24 fw-bold text-primary mb-4 mt-5">My Orders</h3>
                    <div class="container mt-4 d-flex justify-content-center" >
                        
                        <div class="d-flex flex-column align-items-center gap-3 w-100 ">
                            
                            <!-- Order items - Now using OrderCard component -->
                            <OrderCard
                                v-for="(order, index) in orders" 
                                :key="order.id"
                                :order="order"
                                :index="index"
                                @view-details="viewOrderDetails"
                            />
                        </div>
                    </div>

                    <!-- Order Details Modal - Now using CardModal component -->
                    <CardModal
                        :visible="showOrderModal"
                        :order="selectedOrder"
                        @close="closeOrderModal"
                    />
                </div>
                

                <!--  Addresses Tab - Now using AddressForm and AddressCard components -->
                <div class="tab-pane fade" id="address-tab" role="tabpanel">
                      <div class="container mt-4">
                            <div class="d-flex justify-content-between w-100 py-3 mb-4">
                                <h3 class="fs-24 fw-bold text-primary">My Addresses</h3>
                                <button class="btn bg-primary text-white h-50 fs-6" @click="showAddAddressForm">Add New Address</button>
                            </div>

                            <!-- Address Form - Now using AddressForm component -->
                            <AddressForm
                                :visible="showAddressForm"
                                :editing-address="editingAddress"
                                @save="saveAddress"
                                @cancel="hideAddressForm"
                            />

                            <div class="row g-3">
                            <div 
                                v-for="address in addresses" 
                                :key="address.id"
                                class="col-12 col-sm-6 col-lg-4"
                            >
                                <AddressCard
                                :address="address"
                                @edit="editAddress"
                                @delete="deleteAddress"
                                @set-primary="setPrimary"
                                />
                            </div>
                            </div>
                        </div>
                </div>
            </div> 
        </div>
    </div>
  </section>
</template>

<style scoped>
.form-check-input:checked {
    background-color: #3A3845;
    border-color: #3A3845;
  }

  .nav-tabs .nav-link.active {
    background-color: #3A3845;
    color: white !important;
    
}

.profile-img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    z-index: -1; 
}

.signout-btn-container {
    position: relative;
    z-index: 10;
}

.profile-img {
    width: 120px;
    height: 120px;
    object-fit: cover;
}

/* Mobile responsive adjustments */
@media (max-width: 767px) {
    .profile-img {
        width: 100px;
        height: 100px;
    }
}
</style>