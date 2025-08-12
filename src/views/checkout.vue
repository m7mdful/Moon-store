<!-- Mohammed Al Naji -->
<script setup>
import { ref, onMounted } from "vue";
const selectedPaymentMethod = ref('creditCard');

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
</script>

<template>
	<div class="container">
		<div
			class="d-flex flex-row justify-content-start align-items-start mt-2 fs-6"
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
							<p class="fs-6 m-0">First Name *</p>
							<input
								class="p-3 border-primary fs-6 mobileinputs"
								placeholder="Samatha"
								style="border-style: solid"
								type="text"
							/>
						</div>
						<div class="d-flex flex-column">
							<p class="fs-6 m-0">Last Name *</p>
							<input
								class="p-3 border-primary fs-6 mobileinputs"
								placeholder="Clarken"
								style="border-style: solid"
								type="text"
							/>
						</div>
					</div>
					<div class="d-flex flex-lg-row flex-column gap-5">
						<div class="d-flex flex-column">
							<p class="fs-6 m-0">Company</p>
							<input
								class="p-3 border-primary fs-6 mobileinputs"
								placeholder="Moon"
								style="border-style: solid"
								type="text"
							/>
						</div>
						<div class="d-flex flex-column">
							<p class="fs-6 m-0">Country / Region *</p>
							<select
								class="form-select p-3 border-primary fs-6 rounded-0 mobileinputs"
								aria-label="Default select example"
								style="border-style: solid; border-width: 2px"
							>
								<option selected>Saudi Arabia</option>
								<option value="1">Bahrain</option>
								<option value="2">Oman</option>
								<option value="3">Kuwait</option>
							</select>
						</div>
					</div>
					<div class="d-flex flex-column">
						<p class="fs-6 m-0">Street adress *</p>
						<input
							class="p-3 border-primary fs-6 mobileinputs2"
							placeholder="Address"
							style="border-style: solid"
							type="text"
						/>
					</div>
					<div class="d-flex flex-column">
						<p class="fs-6 m-0">City *</p>
						<input
							class="p-3 border-primary fs-6 mobileinputs2"
							placeholder="City"
							style="border-style: solid"
							type="text"
						/>
					</div>
					<div class="d-flex flex-column">
						<p class="fs-6 m-0">Phone *</p>
						<input
							class="p-3 border-primary fs-6 mobileinputs2"
							placeholder="(123) 456 7890"
							style="border-style: solid"
							type="text"
						/>
					</div>
					<div class="d-flex flex-column">
						<p class="fs-6 m-0">Email</p>
						<input
							class="p-3 border-primary fs-6 mobileinputs2"
							placeholder="(123) 456 7890"
							style="border-style: solid"
							type="text"
						/>
					</div>
					<div class="d-flex flex-column">
						<p class="fs-6 m-0">Order Notes</p>
						<textarea
							class="p-3 border-primary fs-6 mobileinputs2"
							placeholder="Type your message here..."
							style="
								height: 140px;
								border-style: solid;
								border-width: 2px;
							"
							type="text"
						/>
					</div>
					<div
						class="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-content-center gap-5"
					>
						<button class="fs-6 bg-transparent border-0">
							<img
								class="me-3 mb-1"
								src="../assets/left.svg"
								alt=""
							/>
							RETURN TO CART
						</button>
						<button
							class="fs-6 bg-primary border-0 text-white"
							style="padding: 14px 50px"
						>
							CONTINUE TO SHOPPING
							<img
								class="ms-3 mb-1"
								src="../assets/Arrow-Right.svg"
								alt=""
							/>
						</button>
					</div>
				</div>
			</div>
			<div class="w-100 mx-lg-5">
				<div class="d-flex flex-column gap-2 p-5">
					<div
						class="fs-5 fw-semibold d-flex justify-content-between align-items-center"
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
						class="fs-5 d-flex justify-content-between align-items-center"
					>
						<p>Subtotal</p>
						<p>$475.00</p>
					</div>
					<div
						class="fs-5 d-flex justify-content-between align-items-center"
					>
						<p>Shipping</p>
						<p>$15.00</p>
					</div>
					<hr />
					<div
						class="fw-semibold fs-5 d-flex justify-content-between align-items-center"
					>
						<p>Total</p>
						<p>$490.00</p>
					</div>
					<div class="d-flex flex-column gap-4 p-4 bg-primary text-white">
						<p class="fs-5 fw-semibold">Payment</p>
						<div class="d-flex flex-row justify-content-between">
							<div class="d-flex flex-row gap-3 align-items-center  justify-content-between">
								<input type="radio" id="" value="creditCard" v-model="selectedPaymentMethod" name="paymentMethod">
								<label for="">Credit Card</label>
							</div>
							<div>
								<img src="../assets/card.svg" width="50" alt="">
							</div>
						</div>
						<div class="d-flex flex-column gap-2 mt-2" v-if="selectedPaymentMethod === 'creditCard'">
							<input class="p-2 bg-transparent" placeholder="Card Number" id="cardNumber" type="text" style="border-style: solid; border-width: 1px; border-color: white;">
							<input class="p-2 bg-transparent" placeholder="Name on card" id="nameOnCard" type="text" style="border-style: solid; border-width: 1px; border-color: white;">
							<div class="d-flex flex-row w-100 justify-content-between" style="gap: 15px;">
								<input class="p-2 bg-transparent w-50" placeholder="Expairation date (MM/YY)" id="expirationDate" type="text" style="border-style: solid; border-width: 1px; border-color: white;">
								<input class="p-2 bg-transparent w-50" placeholder="Security code" id="securityCode" type="text" style="border-style: solid; border-width: 1px; border-color: white;">
							</div>
						</div>
						<div class="d-flex flex-row justify-content-between" >
							<div class="d-flex flex-row gap-3 align-items-center  justify-content-between">
								<input type="radio" name="paymentMethod" id="" value="paypal" v-model="selectedPaymentMethod">
								<img src="../assets/paypal.svg" width="60" alt="">
							</div>
						</div>
						<div class="fs-7">
							<button class="w-100 p-3 bg-transparent text-white" style="border-style: solid; border-width: 1px; border-color: white;">PLACE ORDER</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.mobileinputs {
	width: 300px;
	@media screen and (max-width: 992px) {
		width: unset;
	}
}
.mobileinputs2 {
	width: 630px;
	@media screen and (max-width: 992px) {
		width: unset;
	}
}
</style>
