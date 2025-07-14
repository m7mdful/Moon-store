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
				<p class="pcolor fontsize">
					Lorem ipsum dolor sit amet consectetur adipiscing elit
					aliquam mauris sed ma
				</p>
				<button
					class="d-flex flex-row bg-transparent border-1 btnborder pcolor px-3 gap-1"
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
				class="d-flex flex-wrap justify-lg-content-center gap-5 p-lg-5 p-3 pcolor"
				style="width: auto;"
			>
				<div
					class="d-flex flex-column justify-content-start align-content-start gap-2"
				>
					<h5>ABOUT US</h5>
					<h6>Mission</h6>
					<h6>Mission</h6>
					<h6>Mission</h6>
					<h6>Mission</h6>
					<h6>Mission</h6>
				</div>
				<div
					class="d-flex flex-column justify-content-start align-content-start gap-2"
				>
					<h5>SERVICES</h5>
					<h6>Web design</h6>
					<h6>Web design</h6>
					<h6>Web design</h6>
					<h6>Web design</h6>
					<h6>Web design</h6>
				</div>
				<div
					class="d-flex flex-column justify-content-start align-content-start gap-2"
				>
					<h5>PORTFOLIO</h5>
					<h6>E-commerce</h6>
					<h6>E-commerce</h6>
					<h6>E-commerce</h6>
					<h6>E-commerce</h6>
					<h6>E-commerce</h6>
				</div>
			</div>
		</div>

    <!-- copyright -->
		<div>
            <div class="d-flex flex-wrap pcolor border-top px-5 py-2 ">
                <p class="text-center fontsize">Copyright &copy; 2025 Moon| All Rights Reserved | <span><a href="" class="pcolor">Terms & Conditions</a></span> | <span><a href="" class="pcolor">Privacy Policy</a></span></p>
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
h6 {
	font-weight: lighter;
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
</style>
