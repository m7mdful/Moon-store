<!-- Abdllah AlBattat -->
<script setup>
import ceo from "../assets/img/ceo.png";
import atist from "../assets/img/atist.png";
const cards = [
  { src: ceo, name: "BERNIE PATTERSON", postion: "CEO & Founder" },
  { src: atist, name: "CORBIN HOSSAIN", postion: "Artist" },
  { src: ceo, name: "BERNIE PATTERSON", postion: "CEO & Founder" },
  { src: atist, name: "CORBIN HOSSAIN", postion: "Artist" },
];
</script>

<template>
  <!-- main section -->
  <section>
    <div class="container-sm p-5 text-center">
      <div class="m-auto text-wrap text-center">
        <h1 class="fw-bold mb-4 text-primary fs-2">ABOUT MOON</h1>
        <p class="lead px-5 text-secondary">
          Moon's handmade ceramic products have been around<br
            class="d-none d-md-block"
          />since 1650, let's explore our journey
        </p>
      </div>
    </div>
  </section>

  <!-- content -->
  <section>
    <!-- first col -->
    <div class="container-xl p-0 pt-3 text-center">
      <!-- grid system -->
      <div class="row g-0 justify-content-center" dir="rtl">
        <!-- img con -->
        <div class="col-lg-5">
          <img src="../assets/img/about1.png" class="img-fluid" alt="" />
        </div>

        <!-- text con -->
        <div class="col-lg-5 bg-light">
          <div
            class="d-flex justify-content-center align-items-center"
            style="height: 100%"
          >
            <div class="mx-3 p-5">
              <h2 class="mb-4 text-primary fs-3 fw-bold ls-4">1910</h2>
              <p class="lead text-secondary">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- secund col -->
    <div class="container-xl p-0 text-center">
      <!-- grid system -->
      <div class="row g-0 justify-content-center">
        <!-- img cont -->
        <div class="col-lg-5">
          <img src="../assets/img/about2.png" class="img-fluid" alt="" />
        </div>

        <!-- text cont -->
        <div class="col-lg-5 bg-light">
          <div
            class="d-flex justify-content-center align-items-center"
            style="height: 100%"
          >
            <div class="mx-3 p-5">
              <h2 class="mb-4 text-primary fs-3 fw-bold ls-">1990</h2>
              <p class="lead text-secondary">
                Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam
                nisi. dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- tharid col -->
    <div class="container-xl p-0 text-center">
      <!-- grid system -->
      <div class="row g-0 justify-content-center" dir="rtl">
        <!-- img con -->
        <div class="col-lg-5">
          <img src="../assets/img/about3.png" class="img-fluid" alt="" />
        </div>

        <!-- text con -->
        <div class="col-lg-5 bg-light">
          <div
            class="d-flex justify-content-center align-items-center"
            style="height: 100%"
          >
            <div class="mx-3 p-5">
              <h2 class="mb-4 text-primary fs-3 fw-bold ls-">2010</h2>
              <p class="lead text-secondary">
                Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque
                tempus. sit aliquam sit nullam neque ultrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- spase between  for large screens-->
  <div class="d-none d-lg-block" style="margin-top: 80px"></div>

  <!-- spase between  for mid to small screens-->
  <div class="d-lg-none" style="margin-top: 40px"></div>

  <!-- forth col -->
  <div class="container-xl p-0 m">
    <!-- grid system -->
    <div class="row g-0 justify-content-center">
      <!-- img con -->
      <div class="col-lg-5">
        <img src="../assets/img/about4.png" class="img-fluid" alt="" />
      </div>

      <!-- text con -->
      <div class="col-lg-5">
        <div class="d-grid justify-content-start" style="height: 100%">
          <div class="mx-3 p-5">
            <h2 class="mb-4 fs-3 fw-bold">HOW WE WORKS</h2>

            <div class="row mb-4">
              <p class="fw-semibold fs-4">Product design</p>
              <p class="lead text-secondary">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis.
              </p>
            </div>

            <div class="row">
              <p class="fw-semibold fs-4">Crafted</p>
              <p class="lead text-secondary">
                Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque
                tempus.
              </p>
            </div>

            <div class="row">
              <p class="fw-semibold fs-4">Sell product</p>
              <p class="lead text-secondary">
                Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam
                nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- spase between  for large screens-->
  <div class="d-none d-lg-block" style="margin-top: 80px"></div>

  <!-- spase between  for mid to small screens-->
  <div class="d-lg-none" style="margin-top: 32px"></div>

  <!-- meet our team sction -->
  <section class="container-xl text-center p-0">
    <!-- title of this section -->

    <h1 class="fw-bold fs-2 mb-5 p-0">MEET OUR TEAM</h1>

    <div class="container-flud p-4 overflow-scroll">
      <!-- flex container -->
      <div
        class="d-flex flex-row flex-nowrap justify-content-md-center gap-lg-5 gap-4"
      >
        <!-- img -->
        <div class="" v-for="(card, index) in cards" :key="index">
          <img :src="card.src" alt="" style="width: 255px; height: 382" />
          <p class="text-capitalize fw-semibold fs-6 pt-4">{{ card.name }}</p>
          <p class="fs-6 text-grey">{{ card.postion }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- spase between  for large screens-->
  <div class="d-none d-lg-block" style="margin-top: 80px"></div>

  <!-- spase between  for mid to small screens-->
  <div class="d-lg-none" style="margin-top: 40px"></div>

  <section class="container-xl p-0 text-center">
    <div class="d-flex flex-column align-items-center" style="row-gap: 24px">
      <p class="lead text-secondary fw-semibold p-0">Sign up for emails</p>
      <h1
        class="text-primary fw-bold fs-2 d-none d-lg-block p-0"
        style="letter-spacing: 0.5px"
      >
        FOR NEWS, COLLECTIONS & MORE
      </h1>
      <h1
        class="text-primary fw-bold fs-3 d-lg-none"
        style="letter-spacing: 0.5px"
      >
        FOR NEWS,<br />
        COLLECTIONS & MORE
      </h1>
      <input
        class="bg-transparent text-center fs-5"
        placeholder="Enter your email"
        type="text"
        style="
          border-bottom: 1.5px;
          border-style: solid;
          border-top: 0;
          border-left: 0;
          border-right: 0;
          padding-bottom: 0;
          width: 300px;
        "
      />
      <!-- sing up button            -->
      <router-link to="/register">
        <button
          class="fw-semibold fs-7 text-primary bg-white"
          style="border: 2px solid #595667; padding: 15px 24px"
        >
          SIGN UP
        </button>
      </router-link>
    </div>
  </section>

  <!-- spase between  for large screens-->
  <div class="d-none d-lg-block" style="margin-top: 80px"></div>

  <!-- spase between  for mid to small screens-->
  <div class="d-lg-none" style="margin-top: 40px"></div>
</template>

<style scoped></style>
