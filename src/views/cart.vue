<script setup></script>

<template>
	<div class="d-flex flex-column gap-4">
		<div
			class="d-flex flex-row justify-content-start align-items-start mt-2 fs-6 container margining"
		>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item active" aria-current="page">
						<RouterLink to="/">Home</RouterLink>
					</li>
					<li class="breadcrumb-item" aria-current="page">Cart</li>
				</ol>
			</nav>
		</div>
		<div class="margining">
			<div
				class="d-flex flex-column gap-4 justify-content-start align-content-center"
			>
				<p class="fs-5">Cart (3 items)</p>
				<div class="container">
					<div class="row text-center fs-6 text-white p-1 pt-3 bg-primary justify-content-between">
						<div class="col-auto">
							<img src="../assets/Trash.svg" alt="" />
						</div>
                        <div class="col-2">
                            <p>PHOTO</p>
                        </div>
						<div class="col-4">
							<p>PRODUCT</p>
						</div>
						<div class="col-1">
							<p>PRICE</p>
						</div>
						<div class="col-2">
							<p>QUANTITY</p>
						</div>
						<div class="col-2">
							<p>SUBTOTAL</p>
						</div>
					</div>
                    <div class="row text-center fs-6">
                        <div class="col-auto">
                            
                        </div>
                        <div class="col-2">
                            <img src="../assets/img/shop9.png" alt="">
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.margining {
	margin-left: 200px;
	margin-right: 200px;
	@media screen and (max-width: 992px) {
		margin-left: 30px;
		margin-right: 30px;
	}
}
</style>
