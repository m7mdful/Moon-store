<!-- Mohammed Al Naji -->
<script setup></script>

<template>
	<div
		class="d-flex flex-column justify-content-center align-items-center bg-color"
	>
        <!-- logo and the button -->
		<div class="d-flex flex-lg-row flex-column justify-content-center">
			<div
				class="d-flex flex-column justify-content-lg-start align-content-lg-start gap-2 py-4 p-lg-5  footerwidth"
			>
				<img src="../assets/logo-3.svg" width="150" alt="" />
				<p class="text-semiWhite fs-6">
					Lorem ipsum dolor sit amet consectetur adipiscing elit
					aliquam mauris sed ma
				</p>
				<button
					class="d-flex flex-row bg-transparent border-1 btnborder pcolor px-3 gap-1 py-2 fs-6"
				>
					GET STARTED
					<img
						src="../assets/Arrow_Right.svg"
						width="12"
						class=""
						alt=""
					/>
				</button>
			</div>

            <!-- links -->
			<div
				class="d-flex flex-wrap justify-lg-content-center p-lg-5 p-3"
				style="width: auto; gap: 70px;"
			>
				<div
					class="d-flex flex-column justify-content-start align-content-start gap-2"
				>
					<p class="fs-5 text-white">ABOUT US</p>
					<a class="fw-light fs-6 text text-decoration-none text-semiWhite" href="">Mission</a>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">Mission</a>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">Mission</a>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">Mission</a>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">Mission</a>
				</div>
				<div
					class="d-flex flex-column justify-content-start align-content-start gap-2"
				>
					<p class="fs-5 text-white">SERVICES</p>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">Web design</a>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">Web design</a>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">Web design</a>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">Web design</a>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">Web design</a>
				</div>
				<div
					class="d-flex flex-column justify-content-start align-content-start gap-2"
				>
					<p class="fs-5 text-white">PORTFOLIO</p>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">E-commerce</a>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">E-commerce</a>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">E-commerce</a>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">E-commerce</a>
					<a class="fw-light fs-6 text-decoration-none text-semiWhite" href="">E-commerce</a>
				</div>
			</div>
		</div>

    <!-- copyright -->
		<div>
            <div class="d-flex flex-wrap pcolor border-top px-5 py-2 pcopyright ">
                <p class="text-center fs-6 ">Copyright &copy; 2025 Moon| All Rights Reserved | <span><a href="" class="cpr">Terms & Conditions</a></span> | <span><a href="" class="cpr">Privacy Policy</a></span></p>
            </div>
        </div>
	</div>
</template>

<style scoped>
.bg-color {
	background: #3a3845;
}
.pcolor {
	color: #e5e5e5;
}


.btnborder {
	border-style: solid;
	border-color: #f7f6f5;
	width: max-content;
}

.footerwidth {
	width: 30%;
	border-right: 1px solid #e5e5e5;
	@media screen and (max-width: 992px) {
		width: auto;
		border-right: 0px;
		border-bottom: 1px solid #e5e5e5;
        margin:0px 20px;
	}
}
.fontsize{
    font-size: 12px;
}

.pcopyright{
	color:	#6D758F;
}
.cpr{
	color: #807F86;
}
</style>
