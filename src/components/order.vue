<!-- Mohammed Al Naji -->
<script setup>
defineProps({
	OrderId: String,
	total: String,
	date: String,
	Status: String,
});
</script>

<template>
	<div class="d-block d-lg-none">
		<div class="d-flex flex-column">
			<div class="d-flex flex-column gap-3">
				<div class="d-flex flex-row justify-content-between fs-5">
					<p class="fw-semibold">Order ID:</p>
					<p class="fw-semibold">#{{ OrderId }}</p>
				</div>
				<div class="d-flex flex-column gap-3">
					<div class="d-flex flex-row justify-content-between fs-5">
						<p class="fw-light">Total:</p>
						<p>{{ total }}</p>
					</div>
					<div class="d-flex flex-row justify-content-between fs-5">
						<p class="fw-light">Date:</p>
						<p class="fw-light">{{ date }}</p>
					</div>
					<div class="d-flex flex-row justify-content-between fs-5">
						<div v-if="Status === '1'">
							<p style="color: #c69b7b">Ordered</p>
						</div>
						<div v-if="Status === '2'">
							<p style="color: green">Processed</p>
						</div>
						<div v-if="Status === '3'">
							<p style="color: orange">Shipped</p>
						</div>
						<div v-if="Status === '4'">
							<p class="text-primary">Delivered</p>
						</div>
						<div v-if="Status === '5'">
							<p style="color: red">Cancelled</p>
						</div>
					</div>
				</div>
				<hr />
			</div>
		</div>
	</div>

	<div class="d-none d-lg-block">
		<div
			class="row text-center fs-6 align-items-center fs-6 justify-content-between py-4"
		>
			<div class="col-4">
				<p class="fw-semibold">#{{ OrderId }}</p>
			</div>
			<div class="col-1">
				<p>{{ total }}</p>
			</div>
			<div class="col-2">
				<div class="d-flex flex-row justify-content-center gap-5 py-1">
					<p class="mt-2">{{ date }}</p>
				</div>
			</div>
			<div class="col-2" v-if="Status === '1'">
				<p style="color: #c69b7b">Ordered</p>
			</div>
			<div class="col-2" v-if="Status === '2'">
				<p style="color: green">Processed</p>
			</div>
			<div class="col-2" v-if="Status === '3'">
				<p style="color: orange">Shipped</p>
			</div>
			<div class="col-2" v-if="Status === '4'">
				<p class="text-primary">Delivered</p>
			</div>
			<div class="col-2" v-if="Status === '5'">
				<p style="color: red">Cancelled</p>
			</div>
		</div>
		<hr />
	</div>
</template>

<style scoped></style>
