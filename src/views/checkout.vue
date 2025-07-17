<script setup></script>

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
						class=" fs-5 fw-semibold d-flex justify-content-between align-items-center"
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
						class=" fs-5 d-flex justify-content-between align-items-center"
					>
						<p>Product</p>
						<p>Subtotal</p>
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
