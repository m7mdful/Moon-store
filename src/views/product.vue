<script setup>
	import productCard from '../components/productCard.vue';
	import shop9 from '../assets/img/shop9.png'
</script>

<template>
	<div class="container">
		<nav aria-label="breadcrumb ">
			<ol class="breadcrumb fs-6">
				<li class="breadcrumb-item active" aria-current="page">
					<RouterLink to="/">Home</RouterLink>
				</li>
				<li class="breadcrumb-item active" aria-current="page">
					<RouterLink to="/Shop">Shop</RouterLink>
				</li>
				<li class="breadcrumb-item" aria-current="page">Product</li>
			</ol>
		</nav>
		<div
			class="d-flex flex-lg-row flex-column align-content-center"
			style="gap: 130px"
		>
			<div class="d-flex flex-column gap-5">
				<div class="d-flex ms-2 justify-content-center">
					<img
						class="imagscaling"
						src="../assets/img/shop9.png"
						alt=""
					/>
				</div>
				<div class="d-flex flex-row gap-2 justify-content-center">
					<button class="bg-transparent border-0">
						<img src="../assets/img/shop5.png" width="60" alt="" />
					</button>
					<button class="bg-transparent border-0">
						<img src="../assets/img/shop5.png" width="60" alt="" />
					</button>
					<button class="bg-transparent border-0">
						<img src="../assets/img/shop5.png" width="60" alt="" />
					</button>
					<button class="bg-transparent border-0">
						<img src="../assets/img/shop5.png" width="60" alt="" />
					</button>
				</div>
			</div>
			<div class="d-flex flex-column text-center text-lg-start">
				<p class="fs-4 fw-semibold">MARIN WHITE DINNER PLATE</p>
				<div
					class="d-flex flex-row justify-content-lg-start justify-content-around gap-4 align-items-center fs-6"
				>
					<img class="mb-3" src="../assets/star.svg" alt="" />
					<p class="">(1256 Reviews)</p>
					<p>Stock: <span style="color: #c69b7b">In stock</span></p>
				</div>
				<div class="d-flex gap-2 fs-5">
					<p>$35</p>
					<p class="text-decoration-line-through">$50</p>
				</div>
				<div class="d-flex gap-2 fs-6 mt-5 fw-semibold">
					<p>Color:</p>
					<p style="color: #c69b7b">Blue</p>
				</div>
				<div class="d-flex gap-2">
					<div class="d-flex gap-2 mb-3">
						<span
							class="border-black bg-white border"
							style="width: 40px; height: 40px"
						></span>
						<span
							class="border-black bg-secondary"
							style="width: 40px; height: 40px"
						></span>
						<span
							class="border-black bg-primary"
							style="width: 40px; height: 40px"
						></span>
						<span
							class="border-black bg-danger"
							style="width: 40px; height: 40px"
						></span>
						<span
							class="border-black bg-success mb-5"
							style="width: 40px; height: 40px"
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
								<img src="../assets/Minus.svg" alt="" />
							</button>
							<p class="mt-2">1</p>
							<button class="border-0 bg-transparent">
								<img src="../assets/Plus.svg" alt="" />
							</button>
						</div>
						<button
							class="bg-primary border-0 text-white p-3"
							style="width: 230px"
						>
							ADD TO CART
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
						>
							<img src="../assets/heart.svg" alt="" />
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Vero quidem enim porro quo
								explicabo doloremque, reiciendis culpa dolore
								non veniam ratione, maiores laborum natus
								repudiandae eligendi accusamus quod magni. Rem.
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Vero quidem enim porro quo
								explicabo doloremque, reiciendis culpa dolore
								non veniam ratione, maiores laborum natus
								repudiandae eligendi accusamus quod magni. Rem.
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Vero quidem enim porro quo
								explicabo doloremque, reiciendis culpa dolore
								non veniam ratione, maiores laborum natus
								repudiandae eligendi accusamus quod magni. Rem.
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
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="$30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="$30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="$30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="$30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
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
