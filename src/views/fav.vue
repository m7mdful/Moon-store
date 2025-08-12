<template>
	<div class="container mt-5 px-2 px-md-4">
		<!-- Breadcrumb -->
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb fs-6 ps-2">
				<li class="breadcrumb-item">
					<router-link to="/" class="text-muted text-decoration-none"
						>Home</router-link
					>
				</li>
				<li class="breadcrumb-item active" aria-current="page">
					Wishlist
				</li>
			</ol>
		</nav>

		<!-- Title -->
		<p class="fw-semibold fs-24 my-5 ps-2">
			Wishlist ( {{ lengthh }} items)
		</p>
	
		<!-- Wishlist Items -->
		<section class="mb-5 d-flex justify-content-center">
			<div
				v-if="lengthh"
				class="row gy-5 w-100"
				style="max-width: 1100px"
			>
				<div
					v-for="item in user.whishlist"
					:key="item._id"
					class="col-6 col-md-4 col-lg-3 d-flex justify-content-start position-relative"
				>
					<!-- Delete Button -->
					<button
						class="btn position-absolute top-0 end-0 z-3 m-4 p-0 border-0"
						style="width: 30px; height: 30px"
						@click="openDeleteModal(item.id)"
					>
						<img
							src="../assets/icons8-delete-100.png"
							width="28"
							height="28"
						/>
					</button>

					<!-- Product Card -->
					<product-card
						:imgSrc="item.product.image"
						:title="item.product.title"
						:price="item.product.price"
						:description="item.product.description"
					/>
				</div>
			</div>
			<!-- Empty State -->
			<CartEmpt
				v-else
				msg="Your Wishlist is empty"
				smdet="Start exploring and add items you love!"
			/>
		</section>

		<!-- Bottom Buttons -->
		<div class="d-flex justify-content-center gap-3 mb-5 flex-wrap">
			<button
				class="btn btn-dark px-4 py-2 fs-4"
				style="width: 300px; height: 50px"
				@click="openCartModal"
			>
				Add All to Cart
			</button>

			<button
				class="btn btn-outline-danger d-flex align-items-center justify-content-center gap-2 px-4 py-2"
				style="width: 300px; height: 50px"
				@click="openClearAllModal"
			>
				<img
					src="../assets/icons8-delete-100.png"
					width="18"
					height="18"
				/>
				<span class="fs-4">Clear List</span>
			</button>
		</div>

		<!-- Confirmation Modal -->
		<div
			v-if="showConfirmModal"
			class="modal fade show d-block"
			style="background: rgba(0, 0, 0, 0.5)"
		>
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body text-center fs-5 py-4">
						{{ modalMessage }}
					</div>
					<div
						class="modal-footer justify-content-center border-0 pb-4"
					>
						<button
							type="button"
							class="btn btn-secondary fs-6 px-3"
							@click="closeModal"
						>
							Cancel
						</button>
						<button
							type="button"
							class="btn btn-danger fs-6 px-3"
							@click="confirmAction"
						>
							Yes, Confirm
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Add to Cart Modal -->
		<div
			v-if="showCartModal"
			class="modal fade show d-block"
			style="background: rgba(0, 0, 0, 0.5)"
		>
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body text-center fs-5 py-4">
						All items have been successfully added to your cart.
					</div>
					<div
						class="modal-footer justify-content-center border-0 pb-4"
					>
						<button
							type="button"
							class="btn btn-dark fs-5 px-4"
							@click="closeModal"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getuser } from "../dData.js";
import { user } from "../dData.js";
import { useRouter } from "vue-router";
const router = useRouter();
const lengthh= ref(0);
onMounted(async () => {
	await getuser();
  console.log(user);
	if (!user.name) {
		// Redirect to login if user is not logged in
		window, alert("You need to log in to access");
		router.push("/");
	}
  lengthh.value = user.whishlist.length;
});



import productCard from "../components/productCard.vue";
import CartEmpt from "../components/cardEmpt.vue";

import card1 from "../assets/img/shop1.png";
import card2 from "../assets/img/shop2.png";
import card3 from "../assets/img/shop3.png";
import card4 from "../assets/img/shop4.png";
import card5 from "../assets/img/shop5.png";
import card6 from "../assets/img/shop6.png";
import card7 from "../assets/img/shop7.png";
import card8 from "../assets/img/shop8.png";

// Products
const products = ref([
	{
		id: 1,
		imgSrc: card1,
		title: "Small Ecru Ceramic Compote",
		price: "49.00",
	},
	{ id: 2, imgSrc: card2, title: "Porcelain Dinner Plate", price: "49.00" },
	{ id: 3, imgSrc: card3, title: "Glass Candle Holder", price: "19.99" },
	{ id: 4, imgSrc: card4, title: "White Dinner Plate", price: "85.00" },
	{ id: 5, imgSrc: card5, title: "Wooden Side Table", price: "129.00" },
	{ id: 6, imgSrc: card6, title: "Art Wall Piece", price: "45.00" },
	{ id: 7, imgSrc: card7, title: "Ceramic Pitcher", price: "39.50" },
	{ id: 8, imgSrc: card8, title: "Linen Cushion", price: "25.00" },
]);

// Modal State
const showConfirmModal = ref(false);
const showCartModal = ref(false);
const selectedProductId = ref(null);
const isClearAll = ref(false);
const modalMessage = ref("");

// Functions
function openDeleteModal(id) {
	selectedProductId.value = id;
	isClearAll.value = false;
	modalMessage.value =
		"Are you sure you want to remove this item from your wishlist?";
	showConfirmModal.value = true;
}

function openClearAllModal() {
	selectedProductId.value = null;
	isClearAll.value = true;
	modalMessage.value = "Are you sure you want to clear your entire wishlist?";
	showConfirmModal.value = true;
}

function openCartModal() {
	showCartModal.value = true;
}

function closeModal() {
	showConfirmModal.value = false;
	showCartModal.value = false;
}

function confirmAction() {
	if (isClearAll.value) {
		products.value = [];
	} else if (selectedProductId.value !== null) {
		products.value = products.value.filter(
			(p) => p.id !== selectedProductId.value
		);
	}
	closeModal();
}
</script>
