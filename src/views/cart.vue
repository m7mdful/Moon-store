<!-- Mohammed Al Naji -->
<script setup>
import cartItem from "../components/cartItem.vue";
import image from "../assets/img/shop9.png";
import { ref, onMounted, computed } from "vue";
import { getuser } from "../dData.js";
import { user } from "../dData.js";
import { useRouter } from "vue-router";
const router = useRouter();
onMounted(async () => {
	await getuser();
	if (!user.name) {
		// Redirect to login if user is not logged in
		window, alert("You need to log in to access");
		router.push("/");
	}
});


const cartTotal = computed(() => {
	if (!user.cart || !Array.isArray(user.cart)) {
		return 0;
	}
	return user.cart.reduce((total, item) => {
		return total + (item.product?.price || 0) * (item.quantity || 0);
	}, 0);
});


const cartLength = computed(() => {
	return user.cart?.length || 0;
});
</script>

<template>
	<div class="d-flex flex-column gap-4">
		<div class="mb-4">
			<div
				class="d-flex flex-column gap-4 justify-content-start align-content-center"
			>
				<div class="container">
					<div
						class="d-flex flex-row justify-content-start align-items-start mt-2 fs-6"
					>
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li
									class="breadcrumb-item active"
									aria-current="page"
								>
									<RouterLink to="/">Home</RouterLink>
								</li>
								<li class="breadcrumb-item" aria-current="page">
									Cart
								</li>
							</ol>
						</nav>
					</div>
					<p class="fs-24 fw-semibold my-5">Cart (<span>{{ cartLength }}</span> items)</p>
					<div class="d-none d-lg-block">
						<div
							class="row text-center fs-5 text-white p-1 pt-3 bg-primary justify-content-between rounded-4"
						>
							<div class="col-auto">
								<img src="../assets/Trash.svg" alt="" />
							</div>
							<div class="col-2">
								<p>PHOTO</p>
							</div>
							<div class="col-4">
								<p>PRODUCT</p>
							</div>
							<div class="col-1">
								<p>PRICE</p>
							</div>
							<div class="col-2">
								<p>QUANTITY</p>
							</div>
							<div class="col-2">
								<p>SUBTOTAL</p>
							</div>
						</div>
					</div>
					<cartItem
						v-for="item in user.cart"
						:image="item.product.image"
						:title="item.product.title"
						:price="item.product.price"
						:quantity="item.quantity"
						:subtotal="item.product.price * item.quantity"
						:id="item._id"
					/>
					<div
						class="d-flex flex-wrap justify-content-between align-items-center gap-5"
					>
						<div
							class="d-flex flex-wrap justify-content-center align-items-center gap-2 p-1"
						>
							<input
								class="p-2 rounded-0"
								placeholder="Coupon code"
								type="text"
								style="
									border-style: solid;
									border-color: black;
									border-width: 1px;
								"
							/>
							<button
								class="fs-7 fw-semibold bg-primary text-white"
								style="
									border-style: solid;
									border-color: black;
									border-width: 1px;
									padding: 5px 22px;
								"
							>
								APPLY COUPON
							</button>
						</div>
						<div>
							<button
								class="fs-7 fw-semibold bg-primary text-white"
								style="
									border-style: solid;
									border-color: black;
									border-width: 1px;
									padding: 5px 22px;
								"
							>
								UPDATE CART
							</button>
						</div>
					</div>
					<div class="d-flex flex-row-reverse mt-4">
						<div
							class="d-flex flex-column bg-primary text-white p-5 gap-3"
							style="width: 390px"
						>
							<p class="fs-4">Cart totals</p>
							<div
								class="fs-6 d-flex flex-row justify-content-between"
							>
								<p>Subtotal</p>
								<p>${{ cartTotal.toFixed(2) }}</p>
							</div>
							<div
								class="fs-6 d-flex flex-row justify-content-between"
							>
								<p>Cart totals</p>
								<p>${{ cartTotal.toFixed(2) }}</p>
							</div>
							<div class="d-flex justify-content-center mt-4">
								<router-link to="/checkout">
									<button
										class="bg-transparent fw-semibold fs-7 text-white"
										style="
											border: 1px solid white;
											padding: 8px 90px;
										"
									>
										PROCEED TO CHECKOUT
									</button>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.margining {
	margin-left: 200px;
	margin-right: 200px;
	@media screen and (max-width: 992px) {
		margin-left: 30px;
		margin-right: 30px;
	}
}
</style>
