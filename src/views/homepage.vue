<!-- Mohammed Al Naji -->
<script setup>
import productCard from "../components/productCard.vue";
import shop9 from "../assets/img/shop9.png";
</script>

<template>
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
			<p class="pcolor fw-light fs-5 mt-4">
				Handcrafted in Viet Nam since 1650
			</p>
			<h2 class="pcolor fs-2 fw-semibold mt-4">BAT TRANG <br />DINNER SET</h2>
			<RouterLink to="/shop">
				<button
					class="bg-white border-0 p-1 px-5 shopbtn fw-semibold fs-5 btnscale rounded-3"
				>
					SHOP NOW
				</button>
			</RouterLink>
		</div>
	</div>
	<div class="container-lg mt-5 p-0">
		<div class="container-flud p-4 overflow-auto">
			<!-- flex container -->
			<div
				class="d-flex flex-row flex-nowrap justify-content-md-center gap-lg-5 gap-4"
			>
				<!-- img -->
				<div class="text-center btnscale">
					<img  class="rounded-4" src="../assets/img/Htableware.png" alt="" />
					<p class="text-capitalize fw-semibold fs-6 pt-4">
						TABLEWARE
					</p>
				</div>

				<!-- img -->
				<div class="text-center btnscale">
					<img class="rounded-4" src="../assets/img/HomeCat.png" alt="" />
					<p class="text-capitalize fw-semibold fs-6 pt-4">
						TABLEWARE
					</p>
				</div>

				<!-- img -->
				<div class="text-center btnscale">
					<img class="rounded-4" src="../assets/img/HomeCat2.png" alt="" />
					<p class="text-capitalize fw-semibold fs-6 pt-4">
						TABLEWARE
					</p>
				</div>

				<!-- img -->
				<div class="text-center btnscale">
					<img class="rounded-4" src="../assets/img/HomeCat3.png" alt="" />
					<p class="text-capitalize fw-semibold fs-6 pt-4">
						TABLEWARE
					</p>
				</div>
			</div>
		</div>
		<div class="d-flex flex-column gap-5 pb-5">
			<div
				class="d-flex flex-lg-row flex-column justify-content-center align-content-center text-center"
			>
				<div
					class="d-flex flex-column align-items-center gap-2 resdiv bg-light"
					style="padding: 6rem"
				>
					<h1 class="fs-3 fw-semibold">
						UP TO %40 OFF OUR CHRISTMAS COLLECTION
					</h1>
					<p class="fs-5">
						Lorem ipsum dolor sit amet consectetur adipiscing eli
						mattis sit phasellus mollis sit aliquam sit nullam neque
						ultrices.
					</p>
					<RouterLink to="/shop">
						<button
							class="bg-transparent fs-6 fw-bold btnscale"
							style="
								border-bottom: 1.5px;
								border-style: solid;
								border-top: 0;
								border-left: 0;
								border-right: 0;
								padding-bottom: 0;
							"
						>
							SHOP NOW
						</button>
					</RouterLink>
				</div>
				<div class="overflow-hidden">
					<img src="../assets/img/Image.png" alt="" />
				</div>
			</div>
			<div class="d-flex justify-content-center align-items-center">
				<h1 class="fs-3 fw-bold">BEST SELLERS</h1>
			</div>
			<div
				class="d-flex flex-wrap justify-content-center align-content-center p-lg-2 p-1"
				style="gap: 15px"
			>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
			</div>
			<div>
				<div
					class="d-flex flex-lg-row flex-column justify-content-center align-content-center text-center"
				>
					<div
						class="d-flex flex-column align-items-center gap-2 resdiv bg-light"
						style="padding: 6rem"
					>
						<h1 class="fs-3 fw-semibold">
							MADE IN VIET NAM <br />SINCE 1450
						</h1>
						<p class="fs-5">
							Lorem ipsum dolor sit amet consectetur adipiscing
							eli mattis sit phasellus mollis sit aliquam sit
							nullam neque ultrices.
						</p>
						<RouterLink to="/about">
							<button
								class="bg-transparent fs-6 fw-bold btnscale"
								style="
									border-bottom: 1.5px;
									border-style: solid;
									border-top: 0;
									border-left: 0;
									border-right: 0;
									padding-bottom: 0;
								"
							>
								LEARN MORE
							</button>
						</RouterLink>
					</div>
					<div class="overflow-hidden">
						<img src="../assets/img/homepage2.png" alt="" />
					</div>
				</div>

				<div
					class="d-flex flex-lg-row flex-column justify-content-center align-content-center text-center"
					dir="rtl"
				>
					<div
						class="d-flex flex-column align-items-center gap-2 resdiv bg-light"
						style="padding: 6rem"
					>
						<h1 class="fs-3 fw-semibold">OUR HISTORY</h1>
						<p class="fs-5">
							Lorem ipsum dolor sit amet consectetur adipiscing
							eli mattis sit phasellus mollis sit aliquam sit
						</p>
						<RouterLink to="/about">
							<button
								class="bg-transparent fs-6 fw-bold btnscale"
								style="
									border-bottom: 1.5px;
									border-style: solid;
									border-top: 0;
									border-left: 0;
									border-right: 0;
									padding-bottom: 0;
								"
							>
								LEARN MORE
							</button>
						</RouterLink>
					</div>
					<div class="overflow-hidden">
						<img src="../assets/img/homepage4.png" alt="" />
					</div>
				</div>
			</div>
			<div class="d-flex justify-content-center align-items-center">
				<h1 class="fs-3 fw-bold">DISCOVER NEW ARRIVALS</h1>
			</div>
			<div
				class="d-flex flex-wrap justify-content-center align-content-center p-1 p-lg-2"
				style="gap: 15px"
			>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
				<productCard
					:imgSrc="shop9"
					title="Marin White Dinner Plate"
					price="30.50"
					description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
				/>
			</div>
			<div
				class="d-flex flex-column align-items-center text-center gap-5 sginin p-3"
			>
				<p class="fs-5">Sign up for emails</p>
				<h2 class="fs-3 fw-bold">FOR NEWS, COLLECTIONS & MORE</h2>
				<input
					class="bg-transparent text-center fs-5"
					placeholder="Enter your email"
					type="text"
					style="
						border-bottom: 1.5px;
						border-style: solid;
						border-top: 0;
						border-left: 0;
						border-right: 0;
						padding-bottom: 0;
						width: 300px;
					"
				/>
				<router-link to="/register">
					<button
						class="fw-semibold fs-7 text-primary bg-white btnscale"
						style="border: 2px solid #595667; padding: 15px 24px"
					>
						SIGN UP
					</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
.resdiv {
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
.sginin {
	color: #3a3845;
}
.imagescaling {
	width: 50px; 
}

@media screen and (min-width: 992px) {
	.imagescaling {
		width: unset; /* desktop scaling */
	
	}
}
</style>