<template>
  <!-- grid container -->
  <div class="container-xl d-grid">
    <div class="row justify-content-center my-5" style="gap: 50px">
      <!-- left row -->
      <div class="col-12 col-lg-3 d-flex flex-column gap-2">
        <div><p class="fs-4 fw-semibold text-primary">Profile</p></div>
        <div class="d-flex flex-lg-column gap-5 gap-lg-1">
          <div>
            <p class="fs-6 fw-semibold text-primary opacity-50">
              Personal information
            </p>
          </div>
          <div>
            <p class="fs-6 fw-semibold text-primary opacity-50">
              Payment Cards
            </p>
          </div>
          <div>
            <p class="fs-6 fw-semibold text-primary opacity-50">LogOut</p>
          </div>
        </div>
      </div>
      <!-- right row -->
      <div class="col-12 col-lg-8">
        <!-- heder for this model -->
        <ul class="d-flex row list-group-horizontal text-center">
          <li class="col-6 list-group-item">
            <button
              @click="info = console.log('info')"
              class="fs-6 fw-semibold opacity-50 bg-transparent border-0"
            >
              Personal ingormation
            </button>
            <hr class="border-1 border-primary opacity-100" />
          </li>

          <li class="col-6 list-group-item">
            <div>
              <button
                @click="info = 'adr'"
                class="fs-6 fw-semibold opacity-5 opacity-50 bg-transparent border-0"
              >
                Delivery Addresses
              </button>
              <hr class="border-1 border-primary opacity-100" />
            </div>
          </li>
        </ul>
        <!-- content -->
        <form class="d-grid gap-5" action="" v-if="info == 'per'">
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
                style="padding: 21px 16px 21px 16px; border: 2px solid #3a3845"
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
                style="padding: 21px 16px 21px 16px; border: 2px solid #3a3845"
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
                style="padding: 21px 16px 21px 16px; border: 2px solid #3a3845"
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
                style="padding: 21px 16px 21px 16px; border: 2px solid #3a3845"
              />
            </div>
          </div>
          <!-- therd row Message -->
          <div class="row justify-content-center gap-5">
            <div class="col-12 col-lg-10 text-start p-0">
              <label class="fw-semibold fs-6 d-block pb-3" for="name"
                >Email</label
              >
              <input
                class="form-control fs-6 rounded-0"
                type="email"
                placeholder="Moon"
                style="padding: 21px 16px 21px 16px; border: 2px solid #3a3845"
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
                SEND MESSAGE
                <img class="p-1 mb-1" src="../assets/Arrow_Right.svg" alt="" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "per",
    };
  },

  methods: {},
};
</script>

<style scoped>
.active {
  color: 3A3845;
  opacity: 1;
}
</style>
