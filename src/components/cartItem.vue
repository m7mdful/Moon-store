<!-- Mohammed Al Naji -->
<script setup>
import { removeFromCart,updateCartQuantity,getuser } from '../dData';
const props = defineProps({
	image: String,
	title: String,
	price: String,
	quantity: Number,
	subtotal: String,
	id: String,
});

const updateQuantity = async (newQuantity) => {
	await updateCartQuantity(props.id, newQuantity);
};
</script>

<template>
	<div class="d-block d-lg-none">
		<div class="d-flex flex-column">
			<div class="d-flex flex-column gap-3">
				<div>
					<button class="border-0 bg-transparent"
					@click="removeFromCart(props.id)">
						<img src="../assets/Close.svg" alt="" />
					</button>
				</div>
				<div
					class="d-flex flex-row gap-4 justify-content-between align-items-center fs-5"
				>
					<img class="rounded-4" :src="image" width="128" alt="" />
					<p class="fw-semibold">{{ props.title }}</p>
				</div>
				<div class="d-flex flex-column gap-3">
					<div class="d-flex flex-row justify-content-between fs-5">
						<p class="fw-light">PRICE:</p>
						<p>${{ props.price }}</p>
					</div>
					<div class="d-flex flex-row justify-content-between fs-5">
						<p class="fw-light">QUANTITY:</p>
						<div
							class="d-flex flex-row justify-content-center gap-5 py-1"
							style="
								width: 130px;
								height: 35px;
								border: 1px;
								border-style: solid;
							"
						>
							<button class="border-0 bg-transparent"
							@click="updateQuantity(quantity > 1 ? quantity - 1 : 1)">
								<img src="../assets/Minus.svg" alt="" />
							</button>
							<p class="mt-1">{{ props.quantity }}</p>
							<button class="border-0 bg-transparent"
							@click="updateQuantity(props.quantity + 1)">
								<img src="../assets/Plus.svg" alt="" />
							</button>
						</div>
					</div>
					<div class="d-flex flex-row justify-content-between fs-5">
						<p class="fw-light">SUBTOTAL:</p>
						<p style="color: #c69b7b">${{ props.subtotal }}</p>
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
			<div class="col-auto">
				<button class="border-0 bg-transparent"
				@click="removeFromCart(props.id)"
				>
					<img src="../assets/Close.svg" alt="" />
				</button>
			</div>
			<div class="col-2">
				<img class="rounded-4" :src="image" alt="" width="128" />
			</div>
			<div class="col-4 fs-4">
				<p>{{ title }}</p>
			</div>
			<div class="col-1 fs-4">
				<p>${{ price }}</p>
			</div>
			<div class="col-2 fs-4">
				<div
					class="d-flex flex-row justify-content-center gap-5 py-1 rounded-4"
					style="
						width: 130px;
						height: 48;
						border: 1px;
						border-style: solid;
					"
				>
					<button class="border-0 bg-transparent"
					@click="updateQuantity(quantity > 1 ? quantity - 1 : 1)"
					>
						<img src="../assets/Minus.svg" alt="" />
					</button>
					<p class="mt-2">{{ quantity }}</p>
					<button class="border-0 bg-transparent"
					@click="updateQuantity(quantity + 1)"
					>
						<img src="../assets/Plus.svg" alt="" />
					</button>
				</div>
			</div>
			<div class="col-2 fs-4">
				<p style="color: #c69b7b">${{ subtotal }}</p>
			</div>
		</div>
		<hr />
	</div>
</template>

<style scoped></style>
