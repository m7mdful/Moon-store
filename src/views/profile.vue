<script setup>
import { ref } from "vue";
const selectedInProfile = ref("Profile");
</script>

<template>
		<div class="container">
			<div
				class="d-flex flex-row justify-content-start align-items-start mt-2 fs-6 mb-4"
			>
				<nav aria-label="breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active" aria-current="page">
							<RouterLink to="/">Home</RouterLink>
						</li>
						<li class="breadcrumb-item" aria-current="page">
							Profile
						</li>
					</ol>
				</nav>
			</div>
			<div
				class="d-flex flex-row justify-content-lg-start justify-content-center mb-5" style="height: 69dvh;"
			>
				<div class="d-flex flex-column">
					<div
						class="d-flex flex-column gap-4 fs-6 p-2 pe-5"
						v-if="selectedInProfile === 'Profile'"
					>
						<p class="fs-4 fw-semibold">Profile</p>
						<button
							class="bg-transparent border-0 text-start ms-5"
							@click="selectedInProfile = 'Personal'"
						>
							Personal Information
						</button>
						<button
							class="bg-transparent border-0 text-start ms-5"
							@click="selectedInProfile = 'Orders'"
						>
							My Orders
						</button>
					</div>
				</div>
				<div
					class="d-flex flex-column gap-5 mb-5"
					id="Personal"
					v-if="selectedInProfile === 'Personal'"
				>
					<div class="d-flex flex-row align-items-center gap-5">
						<button href="" class="bg-transparent border-0">
							<img
								src="../assets/left.svg"
								class="mt-1"
								width="10"
								alt=""
								@click="selectedInProfile = 'Profile'"
							/>
						</button>
						<p class="fs-6 m-0">Personal Information</p>
					</div>
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
					<div
						class="d-flex flex-lg-row flex-column justify-content-center align-content-center gap-5"
					>
						<button
							class="fs-6 bg-primary border-0 text-white"
							style="padding: 14px 50px"
						>
							Save
						</button>
					</div>
				</div>
				<div class="container" v-if="selectedInProfile === 'Orders'">
					<div class="d-flex flex-row align-items-center gap-5 mb-5">
						<button href="" class="bg-transparent border-0">
							<img
								src="../assets/left.svg"
								class="mt-1"
								width="10"
								alt=""
								@click="selectedInProfile = 'Profile'"
							/>
						</button>
						<p class="fs-6 m-0">Orders</p>
					</div>
					<div
						class="row text-center fs-6 text-white pt-3 bg-primary justify-content-lg-between justify-content-around"
					>
						<div class="col-lg-2 col-1">
							<p>ORDER ID</p>
						</div>
						<div class="col-lg-6 col-1">
							<p>PRODUCTS</p>
						</div>
						<div class="col-lg-2 col-1">
							<p>QUANTITY</p>
						</div>
						<div class="col-lg-2 col-1">
							<p>Total</p>
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
