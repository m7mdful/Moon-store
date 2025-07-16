<template>
  <div class="d-flex flex-column flex-md-row vh-100">
    <!-- Left side -->
    <div class="l d-flex flex-column justify-content-center align-items-center w-100 w-md-50 text-white p-4" style="background-color: #3A3845; z-index: -1;">
      <h1>
        <img src="../assets/logo-2.svg" alt="Logo" style="z-index: 1000; width: 345px; height: 136px;" />
      </h1>
    </div>

    <!-- Right side -->
    <div class="r w-100 w-md-50 d-flex flex-column justify-content-center align-items-center px-4 py-5" style="background-color: #FFFFFF;">
      
      <p class="h1-f mb-1 text-center" style="font-size: 45px;">Welcome Back!</p>
      <p class="text-muted mb-5 h2-f text-center" style="font-size: 27px;">Enter your credentials to access your account</p>

      <!-- Form -->
      <form class="w-100" style="max-width: 450px;">
        <div class="mb-3">
          <label for="email" style="font-size: 24px;">Email Address</label>
          <input type="email" id="email" class="form-control" style="padding: 10px; height: 37px;  max-width: 404px;" />
        </div>

        <div class="mb-2 text-end pe-2" style="font-size: 16px; max-width: 410px;">
          <a href="#" style="color: #0C2A92; text-decoration: none;">Forgot password?</a>
        </div>

        <div class="mb-3">
          <label for="pass" style="font-size: 24px;">Password</label>
          <input type="password" id="pass" class="form-control" style="padding: 10px; height: 37px;  max-width: 404px;" />
        </div>

        <div class="form-check mb-4" style="font-size: 16px; padding-left: 23px;">
          <input type="checkbox" id="remember" class="form-check-input" />
          <label for="remember" class="form-check-label">Remember me</label>
        </div>

        <div class="d-grid gap-3 mb-4 text-center">
          <button type="submit" class="log-btn d-flex justify-content-center align-items-center gap-2 mb-3 text-white"
            style="height: 32px; width: 100%; max-width: 404px; font-size: 18px; padding: 10px; border-radius: 10px; border: 1px solid #D9D9D9; background-color: #3A3845; transition: all 0.3s;">
            Login
          </button>

          <button type="button" class="custom-btn d-flex justify-content-center align-items-center gap-2"
            style="height: 32px; width: 100%; max-width: 404px; font-size: 18px; padding: 10px; border-radius: 10px; border: 1px solid #D9D9D9; background-color: white; transition: all 0.3s;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
              <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Sign in with Google
          </button>
        </div>

        <!-- Sign up -->
        <p class="text-center" style="font-size: 20px;">
          Don't have an account?
          <router-link to="/register" style="color:#0F3DDE; text-decoration: none;">Sign up</router-link>

        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
// No logic yet
</script>