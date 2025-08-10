<!-- Abdllah AlBattat -->
<script setup></script>

<template>
  <section class="section1-bg w-100 d-flex justify-content-center align-items-center">
    <!-- Large Screens only-->
    <div class="d-none d-md-flex w-75 justify-content-start">
      <div class="section1-content d-flex justify-content-center align-items-center text-center ">
          <!-- icon with text -->
          <div>
            <img
              src="../assets/Icon-brown.svg"
              alt="moon icon"
              class="img-fluid mb-4"
            />
            <p class="contact-text fs-1 text-white fw-bold border-bottom border-white border-1 pb-4 mb-5 mt-3" >
              CONTACT US
            </p>
            <p class="text-white fw-medium  fs-5">Follow us on social media</p>
            <nav class="d-flex justify-content-center flex-wrap gap-4 mt-4" >
              <a href="#">
                <img src="../assets/Facebook.svg" alt="facebook icon" style="width: 16px;height: 16px;"/>
              </a>
              <a href="#">
                <img src="../assets/Twitter.svg" alt="twitter icon" style="width: 16px;height: 16px;"/>
              </a>

              <a href="#">
              <img src="../assets/Instagram.svg" alt="instagram icon" style="width: 16px;height: 16px;"/>
              </a>

              <a href="#">
                <img src="../assets/LinkedIn.svg" alt="linkedin icon" style="width: 16px;height: 16px;"/>
              </a>

              <a href="#">
              <img src="../assets/YouTube.svg" alt="youtube icon" style="width: 16px;height: 16px;"/>
              </a>
          </nav>
        </div>
      </div>
    </div>
  </section>

  
  <!-- Small Screens -->
  <div class="section1-content d-block d-md-none text-center py-5 w-100 h-75">
    <!-- icon with text -->
    <div>
      <img
        src="../assets/Icon-brown.svg"
        alt="moon icon"
        class="img-fluid mb-4"
      />
      <p
        class="contact-text h1 text-white fw-bold border-bottom border-white border-1 pb-4 mx-auto mb-3 mt-3"
        style="font-size: 27px;"
      >
        CONTACT US
      </p>
      <p class="text-white fw-medium mt-4 fs-5">Follow us on social media</p>

      <nav class="d-flex justify-content-center flex-wrap gap-3 mt-2">
        <a href="#"
          ><img src="../assets/Facebook.svg" alt="facebook icon " style="width: 16px;height: 16px;"
        /></a>
        <a href="#"
          ><img src="../assets/Twitter.svg" alt="twitter icon" style="width: 16px;height: 16px;"
        /></a>
        <a href="#"
          ><img src="../assets/Instagram.svg" alt="instagram icon" style="width: 16px;height: 16px;"
        /></a>
        <a href="#"
          ><img src="../assets/LinkedIn.svg" alt="linkedin icon" style="width: 16px;height: 16px;"
        /></a>
        <a href="#"
          ><img src="../assets/YouTube.svg" alt="youtube icon" style="width: 16px;height: 16px;"
        /></a>
      </nav>
    </div>
  </div>
  

  <!-- Section 2 -->

  <section class="d-flex justify-content-center align-items-center align-content-center mt-5">
    <!-- contact information text -->
    <div class="text-center w-50">
    <h1 class="fs-1" style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';">
    GET IN TOUCH WITH US</h1>    
        <p class="text-muted fs-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quod
        excepturi labore esse placeat dolorum reprehenderit, ullam ipsam sint
        veniam?
      </p>

      <div class="pt-4 fs-5">
        <p class="text-secondary fw-medium mb-0 mt-3">Office Hours :</p>
        <p class="fw-medium pb-3" style="color: #c69b7b">
          Monday - Friday 8:00 am to 5:00 pm
        </p>

        <p class="text-secondary fw-medium mb-0 mt-4">Email :</p>
        <p class="fw-medium pb-3" style="color: #c69b7b">contact@company.com</p>

        <p class="text-secondary fw-medium mb-0 mt-4">Phone :</p>
        <p class="fw-medium pb-3" style="color: #c69b7b">(414) 687-5892</p>

        <p class="text-secondary fw-medium mb-0 mt-4">Location :</p>
        <p class="fw-medium mb-0" style="color: #c69b7b">59 Middle Point Rd</p>
        <p class="fw-medium pb-3" style="color: #c69b7b">San Francisco, 80412</p>
      </div>
    </div>
  </section>



  <!-- Section 3 - Form-->

  <section class="mt-4">
    <div
      class="container d-flex justify-content-center align-items-center w-75"
    >
      <form class="w-100 mx-lg-5">
        <div class="row g-lg-3">
          <div class="col-lg-6">
            <div class="mb-4">
              <label for="name" class="form-label fw-medium fs-5">Name</label>
              <input
                type="text"
                id="name"
                class="input-style form-control rounded-0 py-3 fs-5"
                placeholder="Samatha Clarken"
              />
            </div>

            <div class="mb-4">
              <label for="phone" class="form-label fw-medium fs-5">Phone</label>
              <input
                type="text"
                id="phone"
                class="input-style form-control rounded-0 py-3 fs-5"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-4">
              <label for="contact-email" class="form-label fw-medium fs-5"
                >Email</label
              >
              <input
                type="email"
                id="contact-email"
                class="input-style form-control rounded-0 py-3 fs-5"
                placeholder="example@youremail.com"
              />
            </div>

            <div class="mb-4">
              <label for="company" class="form-label fw-medium fs-5">Company</label>
              <input
                type="text"
                id="company"
                class="input-style form-control rounded-0 py-3 fs-5"
                placeholder="Moon"
              />
            </div>
          </div>
        </div>

        <div class="w-100">
          <label for="message" class="form-label fw-medium fs-5">Message</label>
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="5"
            placeholder="Type your message here..."
            class="input-style form-control rounded-0 fs-5"
            style="resize: none"
          ></textarea>
        </div>
        <button
          type="submit"
          class="send-message-btn btn w-100 text-white my-3 rounded-0 py-2 fw-medium "
        >
          SEND MESSAGE
          <img
            src="../assets/Arrow-Right.svg"
            alt="arrow-right"
            class="img-fluid mb-1 "
          />
        </button>
      </form>
    </div>
  </section>

  <!-- Section 4 - Google Map -->

  <section class="mt-4 w-100">
    <iframe
      class="w-100"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41233.109945165386!2d-0.07428582980258121!3d51.53110430993298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4a94370469%3A0xdb8be3c9759aab99!2sSir%20John%20Soane&#39;s%20Museum!5e0!3m2!1sar!2ssa!4v1752569918235!5m2!1sar!2ssa"
      width="600"
      height="500"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </section>
  <!-- Section 1 Background Only -->
</template>

<style scoped>
.section1-bg {
  background-image: url("../assets/img/Contact.png");
  background-size: cover;
  background-position: center;
  height: 540px;
  widows: 100%;
}

.section1-content {
  background-color: #3a3845;
  height: 540px;
  width: 420px;
}

.contact-text {
  color: #fffdfb;
  font-family: "Garamond", Courier, monospace;
  max-width: max-content;
}

.send-message-btn {
  background-color: #3a3845;
  font: 1000;
  font-size: 12px;
  letter-spacing: 1.5px;
}

.input-style {
  border: #3a3845 solid 1.35px;
  
}
@media (max-width: 575.98px) {
  .fs-1 {
    font-size: 27px !important;
  }
}
</style>
