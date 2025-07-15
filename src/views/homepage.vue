<script setup></script>

<template>
	<div class="d-flex flex-column gap-5">
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
				<p class="pcolor fw-light fs-5">
					Handcrafted in Viet Nam since 1650
				</p>
				<h2 class="pcolor fs-2 fw-semibold">BAT TRANG <br />DINNER SET</h2>
				<button class="bg-white border-0 p-1 px-5 shopbtn fw-semibold fs-5">
					SHOP NOW
				</button>
			</div>
		</div>
		<div>
			<div
				class="d-flex flex-wrap justify-content-center align-content-around p-5" style="gap:30px"
			>
				<div
					class="d-flex flex-column justify-content-center align-items-center gap-1"
				>
					<img
						src="../assets/img/Htableware.png"
						alt=""
						
					/>
					<p class="fs-4 fw-semibold">TABLEWARE</p>
				</div>
				<div
					class="d-flex flex-column justify-content-center align-items-center gap-1"
				>
					<img
						src="../assets/img/Htableware.png"
						alt=""
						
					/>
					<p class="fs-4 fw-semibold">TABLEWARE</p>
				</div>
				<div
					class="d-flex flex-column justify-content-center align-items-center gap-1"
				>
					<img
						src="../assets/img/Htableware.png"
						alt=""
						
					/>
					<p class="fs-4 fw-semibold">TABLEWARE</p>
				</div>
				<div
					class="d-flex flex-column justify-content-center align-items-center gap-1"
				>
					<img
						src="../assets/img/Htableware.png"
						alt=""
						
					/>
					<p class="fs-4 fw-semibold">TABLEWARE</p>
				</div>
			</div>
		</div>
        <div class="d-flex flex-lg-row flex-column justify-content-center align-content-center text-center">
            <div class="d-flex flex-column align-items-center gap-2 resdiv bg-light" style="padding: 6rem;">
                <h1 class="fs-3 fw-semibold">UP TO %40 OFF OUR  CHRISTMAS COLLECTION</h1>
                <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                <button class="bg-transparent fs-6 fw-bold" style="border-bottom: 1.5px; border-style: solid; border-top: 0; border-left: 0; border-right: 0; padding-bottom: 0;">SHOP NOW</button>
            </div>
            <div class="overflow-hidden">
                <img src="../assets/img/Image.png" alt="">
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <h1 class="fs-3 fw-bold">BEST SELLERS</h1>
        </div>
        <div class="d-flex flex-wrap justify-content-start align-content-start gap-3">

        </div>
	</div>
</template>

<style scoped>
.resdiv{
width: 555px;
height: 348px;
align-self: center;
justify-self: center;
@media screen and (max-width: 992px) {
    width: auto;
height: auto;
align-self: center;
justify-self: center;
}
}


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
