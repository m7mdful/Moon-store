<!-- Mohammed Al Naji -->
<script setup></script>

<template>
	<div class="bg-primary">
		<div class="container">
			<div class="d-flex flex-column justify-content-between">
				<!-- logo and the button -->
				<div
					class="d-flex flex-lg-row flex-column justify-content-start"
				>
					<div
						class="d-flex flex-column justify-content-lg-start align-content-lg-start gap-2 footerwidth"
					>
						<img src="../assets/logo-3.svg" width="150" alt="" />
						<p class="text-semiWhite fs-6" style="width: 300px">
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit aliquam mauris sed ma
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
						class="d-flex flex-wrap justify-content-center py-5 px-5"
						style="width: auto; gap: 70px"
					>
						<div
							class="d-flex flex-column justify-content-start align-content-start gap-2"
						>
							<p class="fs-5 text-white">ABOUT US</p>
							<a
								class="fw-light fs-6 text text-decoration-none text-semiWhite"
								href=""
								>Mission</a
							>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>Mission</a
							>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>Mission</a
							>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>Mission</a
							>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>Mission</a
							>
						</div>
						<div
							class="d-flex flex-column justify-content-start align-content-start gap-2"
						>
							<p class="fs-5 text-white">SERVICES</p>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>Web design</a
							>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>Web design</a
							>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>Web design</a
							>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>Web design</a
							>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>Web design</a
							>
						</div>
						<div
							class="d-flex flex-column justify-content-start align-content-start gap-2"
						>
							<p class="fs-5 text-white">PORTFOLIO</p>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>E-commerce</a
							>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>E-commerce</a
							>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>E-commerce</a
							>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>E-commerce</a
							>
							<a
								class="fw-light fs-6 text-decoration-none text-semiWhite"
								href=""
								>E-commerce</a
							>
						</div>
					</div>
				</div>

				<!-- copyright -->
				<div class="d-flex flex-column">
					<div
						class="d-flex flex-wrap pcolor border-top px-5 py-2 pcopyright justify-content-center"
					>
						<p class="text-center fs-6">
							Copyright &copy; 2025 Moon| All Rights Reserved |
							<span
								><a href="" class="cpr"
									>Terms & Conditions</a
								></span
							>
							|
							<span
								><a href="" class="cpr">Privacy Policy</a></span
							>
						</p>
					</div>
				</div>
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
	width: 45%;
	border-right: 1px solid #e5e5e5;
	padding-left: 200px;
	padding-top: 32px;
	@media screen and (max-width: 992px) {
		width: auto;
		border-right: 0px;
		border-bottom: 1px solid #e5e5e5;
		margin: 0px 20px;
		padding: 50px;
		padding-top: 32px;
	}
}
.fontsize {
	font-size: 12px;
}

.pcopyright {
	color: #6d758f;
}
.cpr {
	color: #807f86;
}
</style>