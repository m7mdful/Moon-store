<script setup></script>

<template>
	<div class="d-flex flex-column">
		<div class="position-relative">
			<img
				class="d-lg-flex flex-lg-column w-100"
				src="../assets/img/hompage1.png"
				alt=""
			/>
			<div
				class="positioning d-flex flex-column justify-content-center align-items-center gap-3 p-5"
			>
				<img class="imagescaling" src="../assets/Icon.svg" alt="" />
				<p class="pcolor fw-lighter">
					Handcrafted in Viet Nam since 1650
				</p>
				<h2 class="pcolor">BAT TRANG <br />DINNER SET</h2>
				<button class="bg-white border-0 p-1 px-5 shopbtn fw-semibold">
					SHOP NOW
				</button>
			</div>
		</div>
		<div>
			<div
				class="d-flex flex-wrap justify-content-evenly align-content-around p-5"
			>
				<div
					class="d-flex flex-column justify-content-center align-items-center gap-1"
				>
					<img
						src="../assets/img/Htableware.png"
						alt=""
						width="200"
					/>
					<h6>TABLEWARE</h6>
				</div>
				<div
					class="d-flex flex-column justify-content-center align-items-center gap-1"
				>
					<img
						src="../assets/img/Htableware.png"
						alt=""
						width="200"
					/>
					<h6>TABLEWARE</h6>
				</div>
				<div
					class="d-flex flex-column justify-content-center align-items-center gap-1"
				>
					<img
						src="../assets/img/Htableware.png"
						alt=""
						width="200"
					/>
					<h6>TABLEWARE</h6>
				</div>
				<div
					class="d-flex flex-column justify-content-center align-items-center gap-1"
				>
					<img
						src="../assets/img/Htableware.png"
						alt=""
						width="200"
					/>
					<h6>TABLEWARE</h6>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.positioning {
	position: absolute;
	top: 0;
	left: 10%;
	width: 30%;
	height: 100%;
	background: #826f66;
	@media screen and (max-width: 992px) {
		position: unset;
		top: unset;
		left: unset;
		width: unset;
		height: unset;
	}
}
.pcolor {
	color: #fffdfb;
}

.shopbtn {
	color: #826f66;
}
.imagescaling {
	width: 50px;
	@media screen and (min-width: 992px) {
		width: unset;
	}
}
</style>
