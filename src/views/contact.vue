<!-- Abdllah AlBattat -->
<script setup></script>

<template>
  <!-- Slider section -->
  <div class="Slider d-none d-xl-block" style="margin-bottom: 50px">
    <div class="container-xl d-grid" style="grid-auto-rows: 545px">
      <!-- all the offcanves content -->
      <div class="row">
        <div
          class="col-4 bg-primary d-flex flex-column justify-content-center align-items-center gap-5 text-center"
        >
          <div>
            <img class="logo" src="../assets/Icon-brown.svg" alt="" />
          </div>

          <div>
            <h1 class="text-light fs-2">CONTACT US</h1>
            <hr class="text-light my-5" style="opacity: 1" />
            <p class="fs-6 fw-semibold text-white" style="margin-bottom: 20px">
              Follow us on social media
            </p>

            <div class="d-flex justify-content-center" style="column-gap: 16px">
              <div class="icons">
                <a href="">
                  <img src="../assets/Facebook.svg" alt="" />
                </a>
              </div>

              <div class="icons">
                <a href="">
                  <img src="../assets/Twitter.svg" alt="" />
                </a>
              </div>

              <div class="icons">
                <a href="">
                  <img src="../assets/Instagram.svg" alt="" />
                </a>
              </div>

              <div class="icons">
                <a href="">
                  <img src="../assets/LinkedIn.svg" alt="" />
                </a>
              </div>

              <div class="icons">
                <a href="">
                  <img src="../assets/YouTube.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Grid container -->
  <div
    class="container-xl d-grid text-center p-0"
    style="row-gap: 50px; margin-bottom: 50px"
  >
    <!-- slider sction for mobile -->
    <div class="row d-block d-xl-none m-0 p-0">
      <div class="row m-0 p-0">
        <div class="col Slider-small"></div>
      </div>

      <div class="row m-0 p-0">
        <div
          class="col bg-primary d-flex flex-column align-items-center gap-5 text-center"
        >
          <div>
            <img
              class="logo-small"
              src="../assets/Icon-brown.svg"
              alt=""
              style="margin-top: 46px"
            />
          </div>

          <div>
            <h1 class="text-light fs-2">CONTACT US</h1>
            <hr class="text-light my-5" style="opacity: 1" />
            <p class="fs-6 fw-semibold text-white" style="margin-bottom: 20px">
              Follow us on social media
            </p>

            <div
              class="d-flex justify-content-center"
              style="column-gap: 16px; margin-bottom: 46px"
            >
              <div class="icons">
                <a href="">
                  <img src="../assets/Facebook.svg" alt="" />
                </a>
              </div>

              <div class="icons">
                <a href="">
                  <img src="../assets/Twitter.svg" alt="" />
                </a>
              </div>

              <div class="icons">
                <a href="">
                  <img src="../assets/Instagram.svg" alt="" />
                </a>
              </div>

              <div class="icons">
                <a href="">
                  <img src="../assets/LinkedIn.svg" alt="" />
                </a>
              </div>

              <div class="icons">
                <a href="">
                  <img src="../assets/YouTube.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Title section -->
    <div class="row m-0 p-0">
      <div class="col d-flex flex-column">
        <h1 class="fs-2 text-primary">GET IN TOUCH WITH US</h1>
        <p class="text-secondary fs-5 mx-5 px-4">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit<br
            class="d-none d-lg-block"
          />
          phasellus mollis sit aliquam sit nullam.
        </p>
      </div>
    </div>

    <!-- Contact Details section -->
    <div class="row m-0 p-0">
      <div class="col d-flex flex-column row-gap-5">
        <div>
          <p class="text-primary fs-6 fw-semibold">Office Hours :</p>
          <p class="text-brown fs-6 fw-semibold">
            Monday - Friday 8:00 am to 5:00 pm
          </p>
        </div>

        <div>
          <p class="text-primary fs-6 fw-semibold">Email:</p>
          <p class="text-brown fs-6 fw-semibold">contact@company.com</p>
        </div>

        <div>
          <p class="text-primary fs-6 fw-semibold">Phone :</p>
          <p class="text-brown fs-6 fw-semibold">(414) 687 - 5892</p>
        </div>

        <div>
          <p class="text-primary fs-6 fw-semibold">Location :</p>
          <p class="text-brown fs-6 fw-semibold">
            59 Middle Point Rd <br />
            San Francisco, 80412
          </p>
        </div>
      </div>
    </div>

    <!-- Contact form section -->
    <div class="row m-0 p-0">
      <div class="col p-4">
        <form class="d-grid gap-5" action="">
          <!-- first row name and email fileds -->
          <div class="row justify-content-center gap-5">
            <div class="col-12 col-lg-4 text-start p-0">
              <label class="fw-semibold fs-6 d-block pb-3" for="name"
                >Name</label
              >
              <input
                class="form-control fs-6 rounded-0"
                type="text"
                placeholder="Samatha Clarken"
                style="padding: 21px 16px 21px 16px; border: 2px solid #3a3845"
              />
            </div>
            <div class="col-12 col-lg-4 text-start p-0">
              <label class="fw-semibold fs-6 d-block pb-3" for="name"
                >Email</label
              >
              <input
                class="form-control fs-6 rounded-0"
                type="email"
                placeholder="example@youremail.com"
                style="padding: 21px 16px 21px 16px; border: 2px solid #3a3845"
              />
            </div>
          </div>
          <!-- secound row phone and company fileds -->
          <div class="row justify-content-center gap-5">
            <div class="col-12 col-lg-4 text-start p-0">
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
            <div class="col-12 col-lg-4 text-start p-0">
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
          </div>
          <!-- therd row Message -->
          <div class="row justify-content-center gap-5">
            <div class="col-12 col-lg-9 px-lg-5 text-start">
              <label class="fw-semibold fs-6 d-block pb-3" for="Message"
                >Message</label
              >
              <textarea
                class="form-control fs-6 rounded-0"
                name="Message"
                id="Message"
                placeholder="Type your message here..."
                style="padding: 16px; border: 2px solid #3a3845; height: 141px"
              ></textarea>
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
    <!-- end of continer -->
  </div>

  <!-- google map sectoin -->
  <div class="row m-0 p-0">
    <div class="col p-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131803.9927089467!2d49.530912593462766!3d25.30585804808211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e3796e30ed2df5b%3A0x2340faa9012370cd!2sAl%20Hofuf!5e1!3m2!1sen!2ssa!4v1752814796357!5m2!1sen!2ssa"
        width="100%"
        height="450px"
        style="display: block"
        allowfullscreen=" allowfullscreen"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
/* style for the slider img */
.Slider {
  background-image: url(../assets/img/Contact.webp);
  background-size: cover;
  background-position: center;
  height: 545px;
  widows: 100%;
}

.Slider-small {
  background-image: url(../assets/img/Contact.png);
  background-size: cover;
  background-position: center;
  height: 398px;
  widows: 100%;
}

/* logo style */
.logo {
  width: 85.43px;
}

.logo-small {
  width: 50px;
}

.icons {
  width: 24px;
  height: 24px;
  background: #c69b7b;
  padding: 4px;
}
</style>
