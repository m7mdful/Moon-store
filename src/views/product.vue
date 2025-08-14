<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import productCard from "../components/productCard.vue";
import shop9 from "../assets/img/shop9.png";
import {
	product,
	getProductById,
	addToCart,
	addToWishlist,
	user,
	getuser,
	removeFromWhishlist,
	getProducts,
} from "../dData.js";

const route = useRoute();
const router = useRouter();
const loading = ref(true);
const error = ref(null);
const selectedImage = ref(null);
const selectedColorName = ref(null);
const quantity = ref(1);
const isAdding = ref(false);
const similarItems = ref([]);

// Load product + user so wishlist is available
const loadProductData = async () => {
	loading.value = true;
	error.value = null;
	try {
		if (!route.params.id) throw new Error("No product ID provided");
		await Promise.all([getProductById(route.params.id), getuser()]);
		if (!product.populated?.image?.length)
			throw new Error("Invalid product data");
		selectedImage.value = product.populated.image[0];
		selectedColorName.value = product.populated.colors[0];
		await loadSimilar(); // <-- load similar after product loaded
	} catch (err) {
		console.error("Error loading product:", err);
		error.value = err.message || "Failed to load product";
	} finally {
		loading.value = false;
	}
};

const loadSimilar = async () => {
	// Guard
	const cat = product.populated?.category;
	if (!cat) {
		similarItems.value = [];
		return;
	}
	// Fetch by category
	similarItems.value = [];
	await getProducts(
		`?category=${encodeURIComponent(cat)}`,
		similarItems.value
	);
	// Exclude current product and limit to 4
	const currentId = route.params.id?.toString();
	similarItems.value = similarItems.value
		.filter((p) => p._id?.toString() !== currentId)
		.slice(0, 4);
};

onMounted(loadProductData);

watch(
	() => route.params.id,
	async () => {
		await loadProductData();
	}
);

// Is current product in wishlist?
const isInWishlist = computed(() => {
	const pid = route.params.id?.toString();
	const list = user.whishlist || [];
	return list.some((w) => {
		const wid = w.product?._id?.toString?.() || w.product?.toString?.();
		return wid === pid;
	});
});

// Toggle wishlist
const wishToggling = ref(false);
const toggleWishlist = async () => {
	if (wishToggling.value) return;
	wishToggling.value = true;
	try {
		if (isInWishlist.value) {
			const item = (user.whishlist || []).find((w) => {
				const wid =
					w.product?._id?.toString?.() || w.product?.toString?.();
				return wid === route.params.id;
			});
			if (item) await removeFromWhishlist(item._id); // backend expects wishlist item _id
		} else {
			await addToWishlist(route.params.id); // backend expects productId
		}
		// dData functions already update the reactive `user`, so no extra refresh needed
	} catch (e) {
		console.error("Error toggling wishlist:", e);
	} finally {
		wishToggling.value = false;
	}
};

const addToCartHandler = async () => {
	try {
		await addToCart(route.params.id, quantity.value);
		isAdding.value = true;
		setTimeout(() => (isAdding.value = false), 2000);
	} catch (error) {
		console.error("Error adding to cart:", error);
	}
};
</script>

<template>
	<div class="container">
		<div v-if="loading" class="text-center py-5">
			<div class="spinner-border" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>

		<div
			v-else-if="error"
			class="alert alert-danger text-center"
			role="alert"
		>
			{{ error }}
			<div class="mt-3">
				<button class="btn btn-primary" @click="router.push('/shop')">
					Return to Shop
				</button>
			</div>
		</div>

		<div v-else>
			<nav aria-label="breadcrumb ">
				<ol class="breadcrumb fs-6">
					<li class="breadcrumb-item active" aria-current="page">
						<RouterLink to="/">Home</RouterLink>
					</li>
					<li class="breadcrumb-item active" aria-current="page">
						<RouterLink to="/Shop">Shop</RouterLink>
					</li>
					<li class="breadcrumb-item" aria-current="page">
						{{ product.populated.title }}
					</li>
				</ol>
			</nav>
			<div
				class="d-flex flex-lg-row flex-column align-content-center"
				style="gap: 130px"
			>
				<div class="d-flex flex-column gap-5">
					<div class="d-flex ms-2 justify-content-center imagscaling">
						<img
							class=""
							:src="selectedImage"
							alt=""
							style="width: 90%"
						/>
					</div>
					<div class="d-flex flex-row gap-2 justify-content-center">
						<button
							v-for="(img, idx) in product.populated.image"
							:key="idx"
							class="bg-transparent border-0"
							@click="selectedImage = img"
						>
							<img :src="img" width="60" alt="" />
						</button>
					</div>
				</div>
				<div class="d-flex flex-column text-center text-lg-start">
					<p class="fs-4 fw-semibold">
						{{ product.populated.title }}
					</p>
					<div
						class="d-flex flex-row justify-content-lg-start justify-content-around gap-4 align-items-center fs-6"
					>
						<img class="mb-3" src="../assets/star.svg" alt="" />
						<p class="">(1256 Reviews)</p>
						<p>
							Stock:
							<span style="color: #c69b7b">{{
								product.stock ? "In stock" : "Out of stock"
							}}</span>
						</p>
					</div>
					<div class="d-flex gap-2 fs-5">
						<p>${{ product.populated.price }}</p>
						<!-- <p class="text-decoration-line-through">$50</p> -->
					</div>
					<div class="d-flex gap-2 fs-6 mt-5 fw-semibold">
						<p>Color:</p>
						<p style="color: #c69b7b">
							{{ selectedColorName }}
						</p>
					</div>
					<div class="d-flex gap-2">
						<div class="d-flex gap-2 mb-3">
							<span
								v-for="(color, idx) in product.populated.colors"
								:key="color"
								class="border-black border"
								:style="{
									width: '40px',
									height: '40px',
									backgroundColor: color,
									marginBottom: idx === 0 ? '5px' : '',
									outline:
										selectedColorName === color
											? '2px solid #c69b7b'
											: 'none',
									cursor: 'pointer',
								}"
								@click="selectedColorName = color"
							></span>
						</div>
					</div>
					<div class="d-flex flex-column gap-3">
						<div class="d-flex flex-row gap-2 w-100">
							<div
								class="d-flex flex-row justify-content-center gap-5 py-1"
								style="
									width: 130px;
									height: 48;
									border: 1px;
									border-style: solid;
								"
							>
								<button class="border-0 bg-transparent">
									<img
										src="../assets/Minus.svg"
										alt=""
										@click="
											quantity > 1
												? quantity--
												: (quantity = 1)
										"
									/>
								</button>
								<p class="mt-2">{{ quantity }}</p>
								<button class="border-0 bg-transparent">
									<img
										src="../assets/Plus.svg"
										alt=""
										@click="quantity++"
									/>
								</button>
							</div>
							<button
								class="bg-primary border-0 text-white p-3"
								style="width: 230px"
								@click="addToCartHandler"
							>
								{{ isAdding ? "DONE !" : "ADD TO CART" }}
							</button>
						</div>
						<div class="d-flex flex-row gap-2">
							<button
								class="bg-transparent"
								style="
									width: 320px;
									height: 37px;
									border-width: 1px;
									border-style: solid;
									border-color: #3a3845;
								"
							>
								BUY NOW
							</button>
							<button
								class="bg-transparent"
								style="
									width: 40px;
									height: 37px;
									border-width: 1px;
									border-style: solid;
									border-color: #3a3845;
								"
								@click="toggleWishlist"
								:disabled="wishToggling"
								:aria-pressed="isInWishlist"
								:title="
									isInWishlist
										? 'Remove from wishlist'
										: 'Add to wishlist'
								"
							>
								<h4 class="mt-3">
									<i
										:class="[
											'bi',
											isInWishlist
												? 'bi-heart-fill text-danger'
												: 'bi-heart',
										]"
									></i>
								</h4>
							</button>
						</div>
					</div>
					<div class="d-flex flex-column gap-2 mt-5">
						<p class="fw-semibold fs-7">Share this</p>
						<div class="d-flex flex-row gap-4">
							<i
								class="bi bi-facebook"
								style="color: #c69b7b; font-size: 20px"
							></i>
							<i
								class="bi bi-twitter-x"
								style="color: #c69b7b; font-size: 20px"
							></i>
							<i
								class="bi bi-instagram"
								style="color: #c69b7b; font-size: 20px"
							></i>
							<i
								class="bi bi-linkedin"
								style="color: #c69b7b; font-size: 20px"
							></i>
						</div>
					</div>
					<div class="d-flex flex-column my-5 text-start">
						<div class="d-flex flex-column">
							<button
								class="d-flex justify-content-between p-3 bg-transparent border-top border-0 fs-6"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#one"
								aria-expanded="false"
								aria-controls="collapse"
							>
								<p class="m-0">Details</p>
								<i class="bi bi-plus"></i>
							</button>
							<div
								class="collapse mx-3"
								id="one"
								style="width: 360px"
							>
								<p class="">
									{{ product.populated.description }}
								</p>
							</div>
							<button
								class="d-flex justify-content-between p-3 bg-transparent border-top border-0 fs-6"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#two"
								aria-expanded="false"
								aria-controls="collapse"
							>
								<p class="m-0">Dimensions</p>
								<i class="bi bi-plus"></i>
							</button>
							<div
								class="collapse mx-3"
								id="two"
								style="width: 360px"
							>
								<p class="text-wrap">
									{{ product.populated.dms }}
								</p>
							</div>
							<button
								class="d-flex justify-content-between p-3 bg-transparent border-top border-0 fs-6"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#three"
								aria-expanded="false"
								aria-controls="collapse"
							>
								<p class="m-0">Reviews</p>
								<i class="bi bi-plus"></i>
							</button>
							<div
								class="collapse mx-3"
								id="three"
								style="width: 360px"
							>
								<p class="text-wrap">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="d-flex flex-column gap-2" style="margin: 60px 0px">
				<h2 class="fs-3 fw-semibold">SIMILAR ITEMS</h2>
				<div
					class="d-flex flex-wrap align-content-center"
					style="gap: 30px"
				>
					<template v-if="similarItems.length">
						<productCard
							v-for="item in similarItems"
							:key="item._id"
							:id="item._id"
							:imgSrc="item.image?.[0]"
							:title="item.title"
							:price="item.price"
							:description="item.description"
						/>
					</template>
					<p v-else class="text-muted">No similar items.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.imagscaling {
	width: 540px;
	@media screen and (max-width: 992px) {
		width: unset;
	}
}
</style>
