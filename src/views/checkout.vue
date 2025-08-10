<!-- Mohammed Al Naji -->
<script setup>
import { ref } from 'vue';
const selectedPaymentMethod = ref('creditCard');
</script>

<template>
	<div class="container mb-4">
		<div
			class="d-flex flex-row justify-content-start align-items-start mt-2 mb-3 fs-6"
		>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item active" aria-current="page">
						<RouterLink to="/">Home</RouterLink>
					</li>
					<li class="breadcrumb-item active" aria-current="page">
						<RouterLink to="/cart">Cart</RouterLink>
					</li>
					<li class="breadcrumb-item" aria-current="page">
						Checkout
					</li>
				</ol>
			</nav>
		</div>
		<div
			class="d-flex flex-lg-row flex-column justify-content-between align-content-center"
		>
			<div class="pb-4">
				<p class="fs-4">Billing Details</p>
				<div class="d-flex flex-column gap-5">
					<div class="d-flex flex-lg-row flex-column gap-5">
						<div class="d-flex flex-column">
							<p class="fs-5 m-0 ">First Name *</p>
							<input
								class="p-3 rounded-3 fs-5 mobileinputs"
								placeholder="Samatha"
								style="border-style: solid"
								type="text"
							/>
						</div>
						<div class="d-flex flex-column">
							<p class="fs-5 m-0">Last Name *</p>
							<input
								class="p-3 rounded-3  fs-5 mobileinputs"
								placeholder="Clarken"
								style="border-style: solid"
								type="text"
							/>
						</div>
					</div>
					<div class="d-flex flex-lg-row flex-column gap-5">
						<div class="d-flex flex-column">
							<p class="fs-5 m-0">Company</p>
							<input
								class="p-3 rounded-3 fs-5 mobileinputs"
								placeholder="Moon"
								style="border-style: solid"
								type="text"
							/>
						</div>
						<div class="d-flex flex-column  mobileinputs">
							<p class="fs-5 m-0 ">Country / Region *</p>
							<select
								class="bg-transparent p-3  fs-5 rounded-3 mobileinputs"
								
								style="border-style: solid; border-width: 2px;height: 47px;"
							>
								<option selected>Saudi Arabia</option>
								<option value="1">Bahrain</option>
								<option value="2">Oman</option>
								<option value="3">Kuwait</option>
							</select>
						</div>
					</div>
					<div class="d-flex flex-column">
						<p class="fs-5 m-0">Street adress *</p>
						<input
							class="p-3 rounded-3  fs-5 mobileinputs2"
							placeholder="Address"
							style="border-style: solid"
							type="text"
						/>
					</div>
					<div class="d-flex flex-column">
						<p class="fs-5 m-0">City *</p>
						<input
							class="p-3 rounded-3  fs-5 mobileinputs2"
							placeholder="City"
							style="border-style: solid"
							type="text"
						/>
					</div>
					<div class="d-flex flex-column">
						<p class="fs-5 m-0">Phone *</p>
						<input
							class="p-3 rounded-3 fs-5 mobileinputs2"
							placeholder="(123) 456 7890"
							style="border-style: solid"
							type="text"
						/>
					</div>
					<div class="d-flex flex-column ">
						<p class="fs-5 m-0">Email</p>
						<input
							class="p-3 rounded-3  fs-6 mobileinputs2 px-4"
							placeholder="(123) 456 7890"
							style="border-style: solid"
							type="text"
						/>
					</div>
					<div class="d-flex flex-column">
						<p class="fs-5 m-0">Order Notes</p>
						<textarea
							class="p-3 rounded-3  fs-5 mobileinputs2"
							placeholder="Type your message here..."
							style="
								height: 140px;
								border-style: solid;
								border-width: 2px;
							"
							type="text"
						/>
					</div>
						<div class="d-flex flex-lg-row flex-column justify-content-lg-between align-items-center gap-5"
							>
							<router-link
								to="/cart"
								class="fs-5 bg-transparent border-0 d-flex align-items-center text-decoration-none"
								style="cursor: pointer;"
							>
								<img class="me-3 mb-1" src="../assets/left.svg" alt="" />
								RETURN TO CART
							</router-link>

							<router-link
								to="/shop"
								class="fs-5 bg-primary border-0 text-white rounded-3 d-inline-flex align-items-center justify-content-center"
								style="padding: 14px 30px; text-decoration: none; cursor: pointer;"
							>
								CONTINUE TO SHOPPING
								<img class="ms-3 mb-1" src="../assets/Arrow-Right.svg" alt="" />
							</router-link>
						</div>
				</div>
			</div>
			<div class="fixed-checkout-box mt-5">
				<div class="d-flex flex-column gap-2 p-1 px-3">
					<div
						class="fs-4 fw-semibold d-flex justify-content-between align-items-center"
					>
						<p>Product</p>
						<p>Subtotal</p>
					</div>
					<hr />
					<div
						class="fw-light fs-6 d-flex justify-content-between align-items-center"
					>
						<p>Prodssssssssefwfwewegw</p>
						<p>$59</p>
					</div>
					<div
						class="fw-light fs-6 d-flex justify-content-between align-items-center"
					>
						<p>Prodssssssssefwfwewegw</p>
						<p>$59</p>
					</div>
					<div
						class="fw-light fs-6 d-flex justify-content-between align-items-center"
					>
						<p>Prodssssssssefwfwewegw</p>
						<p>$59</p>
					</div>
					<div
						class="fs-5 d-flex justify-content-between align-items-center mt-3"
					>
						<p>Subtotal</p>
						<p>$475.00</p>
					</div>
					<div
						class="fs-5 d-flex justify-content-between align-items-center"
					>
						<p >Shipping</p>
						<p>$15.00</p>
					</div>
					<hr />
					<div
						class="fw-bolder fs-5 d-flex justify-content-between align-items-center"
					>
						<p>Total</p>
						<p>$490.00</p>
					</div>
					<div class="d-flex flex-column gap-4 p-4 mt-2 bg-primary text-white rounded-3">
						<p class=" fw-semibold" style="font-size: 20px;">Payment</p>
						<div class="d-flex flex-row justify-content-between">
							<div class="d-flex flex-row gap-3 align-items-center  justify-content-between">
								<input type="radio" id="" value="creditCard" v-model="selectedPaymentMethod" name="paymentMethod">
								<label for="" class="fs-5">Credit Card</label>
							</div>
							<div>
								<img src="../assets/card.svg" width="80" alt="">
							</div>
						</div>
						<div class="d-flex flex-column gap-2 mt-2" v-if="selectedPaymentMethod === 'creditCard'">
							<input class="p-2 bg-transparent fs-5 rounded-3 text-white mb-3" placeholder="Card Number" id="cardNumber" type="text" style="border-style: solid; border-width: 1px; border-color: white;">
							<input class="p-2 bg-transparent fs-5 rounded-3 text-white mb-3" placeholder="Name on card" id="nameOnCard" type="text" style="border-style: solid; border-width: 1px; border-color: white;">
							<div class="d-flex flex-row w-100 justify-content-between fs-5" style="gap: 15px;">
								<input class="p-2 bg-transparent w-50 rounded-3 text-white mb-3 " placeholder="Expairation date (MM/YY)" id="expirationDate" type="text" style="border-style: solid; border-width: 1px; border-color: white;">
								<input class="p-2 bg-transparent w-50 rounded-3 text-white mb-3" placeholder="Security code" id="securityCode" type="text" style="border-style: solid; border-width: 1px; border-color: white;">
							</div>
						</div>
						<div class="d-flex flex-row justify-content-between" >
							<div class="d-flex flex-row gap-3 align-items-center  justify-content-between">
								<input type="radio" name="paymentMethod" id="" value="paypal" v-model="selectedPaymentMethod">
								<img src="../assets/paypal.svg" width="80" alt="">
							</div>
						</div>
						<div class="fs-6">
            				<button class="btn btn-outline-light p-3  w-100 fs-6" style=" border-width: 1px; border-color: white;">Place Order</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.mobileinputs {
	width: 416px;
	@media screen and (max-width: 992px) {
		width: unset;
	}
}
.mobileinputs2 {
	width: 862px;
	@media screen and (max-width: 992px) {
		width: unset;
	}
}
.fixed-checkout-box {
  width: 100%;           
  max-width: 430px;      
  max-height: none;

  @media (min-width: 992px) { 
	  width: 100%;           
    width: 430px;
    height: 336px;
    
  }
}
</style>
