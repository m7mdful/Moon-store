<script setup></script>

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
					class="d-flex flex-row justify-content-around gap-4 align-items-center fs-6"
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
				<div class="d-flex gap-2 fs-6 mt-5 fw-semibold">
					<div class="d-flex gap-2 mb-3">
						<span
							class=" border-black bg-white border" style="width: 40px; height: 40px"
						></span>
						<span
							class=" border-black bg-secondary" style="width: 40px; height: 40px"
						></span>
						<span class="border-black bg-primary" style="width: 40px; height: 40px"></span>
						<span class=" border-black bg-danger" style="width: 40px; height: 40px"></span>
						<span
							class=" border-black bg-success mb-5" style="width: 40px; height: 40px"
						></span>
					</div>
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
