<!-- Abdllah AlBattat -->
<script setup>
import order from "../components/order.vue";
import { ref, onMounted,computed } from "vue";
import { getuser } from "../dData.js";
import {user} from "../dData.js";
import { useRouter } from "vue-router";
const router = useRouter();
onMounted(async () => {
	await getuser();
  if (!user.name) {
    // Redirect to login if user is not logged in
    window,alert("You need to log in to access");
    router.push("/");
  }
});
const firstName = computed(() => user.name?.split(" ")[0] || "");
const lastName = computed(() => user.name?.split(" ").slice(1).join(" ") || "");

</script>

<template>
  <!-- grid container -->
  <div class="container-xl d-grid">
    <div class="row justify-content-center my-5" style="gap: 50px">
      <!-- left row -->
      <div class="col-12 col-lg-3 d-flex flex-column gap-2">
        <div><p class="fs-24 fw-semibold text-primary">Profile</p></div>
        <div class="d-flex flex-lg-column gap-5 gap-lg-1">
          <div>
            <p
              @click="(info = 'per'), (nav = 'per')"
              class="fs-6 fw-semibold text-primary"
            >
              Personal information
            </p>
          </div>
          <div>
            <p
              @click="(info = 'ord'), (nav = 'ord')"
              class="fs-6 fw-semibold text-primary"
            >
              My Orders
            </p>
          </div>
          <!-- <div>
            <p class="fs-6 fw-semibold text-primary">Payment Cards</p>
          </div> -->
          <div>
            <router-link to="/" class="text-decoration-none">
              <p class="fs-6 fw-semibold text-primary">Logout</p>
            </router-link>
          </div>
        </div>
      </div>
      <!-- right row -->
      <div class="col-12 col-lg-8">
        <!-- content -->

        <!-- hedare for personal info -->
        <div
          v-if="nav == 'per'"
          class="d-flex row list-group-horizontal text-center"
        >
          <div class="col-6">
            <button
              @click="info = 'per'"
              class="fs-6 fw-semibold bg-transparent border-0 text-primary"
            >
              Personal ingormation
            </button>
            <hr class="border-1 border-primary opacity-100" />
          </div>

          <div class="col-6 list-group-item">
            <div>
              <button
                @click="info = 'adr'"
                class="fs-6 fw-semibold unactiv bg-transparent border-0 text-primary"
              >
                Delivery Addresses
              </button>
              <hr class="border-1 border-primary opacity-100" />
            </div>
          </div>
        </div>

        <!-- personali information block -->
        <div class="p-3" v-if="info == 'per'">
          <form class="d-grid gap-5" action="">
            <!-- first row name and email fileds -->
            <div class="row justify-content-center gap-5">
              <div class="col-12 col-lg-5 text-start p-0">
                <label class="fw-semibold fs-6 d-block pb-3" for="name"
                  >First Name</label
                >
                <input
                  class="form-control fs-6 rounded-0"
                  type="text"
                  placeholder="Samatha"
                  style="
                    padding: 21px 16px 21px 16px;
                    border: 2px solid #3a3845;
                  "
                  :value="firstName"
                />
              </div>
              <div class="col-12 col-lg-5 text-start p-0">
                <label class="fw-semibold fs-6 d-block pb-3" for="name"
                  >Last Name</label
                >
                <input
                  class="form-control fs-6 rounded-0"
                  type="text"
                  placeholder="Clarken"
                  style="
                    padding: 21px 16px 21px 16px;
                    border: 2px solid #3a3845;
                  "
                  :value="lastName"
                />
              </div>
            </div>
            <!-- secound row phone and company fileds -->
            <div class="row justify-content-center gap-5">
              <div class="col-12 col-lg-5 text-start p-0">
                <label class="fw-semibold fs-6 d-block pb-3" for="name"
                  >Company</label
                >
                <input
                  class="form-control fs-6 rounded-0"
                  type="text"
                  placeholder="Moon"
                  style="
                    padding: 21px 16px 21px 16px;
                    border: 2px solid #3a3845;
                  "
                  :value="user.company"
                />
              </div>
              <div class="col-12 col-lg-5 text-start p-0">
                <label class="fw-semibold fs-6 d-block pb-3" for="name"
                  >Phone</label
                >
                <input
                  class="form-control fs-6 rounded-0"
                  type="text"
                  placeholder="(123) 456 - 7890"
                  style="
                    padding: 21px 16px 21px 16px;
                    border: 2px solid #3a3845;
                  "
                  :value="user.phone"
                />
              </div>
            </div>
            <!-- therd row email -->
            <div class="row justify-content-center gap-5">
              <div class="col-12 col-lg-11 px-lg-4 text-start p-0">
                <label class="fw-semibold fs-6 d-block pb-3" for="name"
                  >Email</label
                >
                <input
                  class="form-control fs-6 rounded-0"
                  type="email"
                  placeholder="exampli@gmail.com"
                  style="
                    padding: 21px 16px 21px 16px;
                    border: 2px solid #3a3845;
                  "
                  :value="user.email"
                />
              </div>
            </div>
            <!-- password -->
            <div class="row justify-content-center gap-5">
              <div class="col-12 col-lg-5 text-start p-0">
                <label class="fw-semibold fs-6 d-block pb-3" for="name"
                  >Password</label
                >
                <input
                  class="form-control fs-6 rounded-0"
                  type="password"
                  placeholder="*********"
                  style="
                    padding: 21px 16px 21px 16px;
                    border: 2px solid #3a3845;
                  "
                />
              </div>
              <div class="col-12 col-lg-5 text-start p-0 mt-5">
                <button
                  class="form-control fs-6 rounded-0 bg-transparent text-primary fw-semibold"
                  type="button"
                  style="
                    padding: 21px 16px 21px 16px;
                    border: 2px solid #3a3845;
                  "
                >
                  Change password
                </button>
              </div>
            </div>
            <!-- submit button -->
            <div class="row justify-content-center gap-5">
              <div class="col-12 col-lg-9 px-lg-5 text-center">
                <button
                  class="form-control fs-6 rounded-0 bg-primary text-white fw-semibold"
                  type="submit"
                  style="padding: 15px; border: 2px solid #3a3845"
                >
                  SAVE
                </button>
              </div>
            </div>
          </form>
        </div>
        <!-- delivery addressses block -->
        <div v-if="info == 'adr'" class="p-3">
          <form class="d-grid gap-5" action="">
            <!-- first row name and email fileds -->
            <div class="row justify-content-center gap-5">
              <div class="col-12 col-lg-5 text-start p-0">
                <label class="fw-semibold fs-6 d-block pb-3" for="name"
                  >County / Region</label
                >
                <input
                  class="form-control fs-6 rounded-0"
                  type="text"
                  placeholder="Saudi Arabia"
                  style="
                    padding: 21px 16px 21px 16px;
                    border: 2px solid #3a3845;
                  "
                  :value="user.country"
                />
              </div>
              <div class="col-12 col-lg-5 text-start p-0">
                <label class="fw-semibold fs-6 d-block pb-3" for="name"
                  >City</label
                >
                <input
                  class="form-control fs-6 rounded-0"
                  type="text"
                  placeholder="City"
                  style="
                    padding: 21px 16px 21px 16px;
                    border: 2px solid #3a3845;
                  "
                  :value="user.city"
                />
              </div>
            </div>
            <!-- therd row email -->
            <div class="row justify-content-center gap-5">
              <div class="col-12 col-lg-11 px-lg-4 text-start p-0">
                <label class="fw-semibold fs-6 d-block pb-3" for="name"
                  >Street address</label
                >
                <input
                  class="form-control fs-6 rounded-0"
                  type="text"
                  placeholder="Address"
                  style="
                    padding: 21px 16px 21px 16px;
                    border: 2px solid #3a3845;
                  "
                  :value="user.street"
                />
              </div>
            </div>

            <!-- submit button -->
            <div class="row justify-content-center gap-5">
              <div class="col-12 col-lg-9 px-lg-5 text-center">
                <button
                  class="form-control fs-6 rounded-0 bg-primary text-white fw-semibold"
                  type="submit"
                  style="padding: 15px; border: 2px solid #3a3845"
                >
                  SAVE
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- heder for My Order -->
        <div
          v-if="nav == 'ord'"
          class="d-flex row list-group-horizontal text-start"
        >
          <div class="col-12">
            <button
              class="fs-6 fw-semibold bg-transparent border-0 text-primary"
            >
              My Orders
            </button>
            <hr class="border-1 border-primary opacity-100" />
          </div>
        </div>

        <!-- My order box -->
        <div v-if="info == 'ord'" class="container">
          <div class="d-none d-lg-block">
            <div
              class="row text-center fs-6 text-black p-1 pt-3 justify-content-between"
            >
              <div class="col-4">
                <p>Order ID</p>
              </div>
              <div class="col-1">
                <p>Total</p>
              </div>
              <div class="col-2">
                <p>Date</p>
              </div>
              <div class="col-2">
                <p>Status</p>
              </div>
            </div>
          </div>
          <order v-for="order in user.orders" :OrderId="order.orderId" :total="'$'+order.totalPrice" :Status="order.status" :date="order.purchaseDate.split('T')[0]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "per",
      theme: "nething",
      nav: "per",
    };
  },
};
</script>

<style scoped></style>
