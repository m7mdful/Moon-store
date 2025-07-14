<script setup></script>

<template>
	<nav class="py-4 border-bottom">
		<!-- The main div -->
		<div
			class="d-flex justify-content-between px-3 justify-content-lg-around"
		>
			<!-- Button dropdown for mobile -->
			<div>
				<button
					class="d-lg-none"
					data-bs-toggle="dropdown"
					aria-expanded="false"
					style="background: none; border: none"
				>
					<img src="../assets/Menu.svg" alt="Menu" />
				</button>
				<ul class="dropdown-menu">
					<li><router-link class="dropdown-item" to="/">Home</router-link></li>
					<li>
						<router-link class="dropdown-item" to="/shop"
							>Shop</router-link
						>
					</li>
					<li>
						<router-link class="dropdown-item" to="/about"
							>About</router-link
						>
					</li>
					<li>
						<router-link class="dropdown-item" to="/contact"
							>Contact</router-link
						>
					</li>
					<li>
						<div class="dropdown-divider"></div>
					</li>
					<li>
						<div
							class="d-flex flex-row justify-content-around align-items-center gap-1"
						>
							<a href=""
								><img src="../assets/Heart.svg" alt=""
							/></a>
							<a href=""
								><img src="../assets/Avatar.svg" alt=""
							/></a>
						</div>
					</li>
				</ul>
			</div>

			<!-- Logo(Desk,Mob) -->
			<div>
				<img src="../assets/logo.svg" alt="" />
			</div>
			<!-- Mobile cart icon -->
			<div class="d-lg-none mt-2">
				<a href=""><img src="../assets/Vector.svg" alt="" /></a>
			</div>
			<!-- Navigation links and search bar for Desktop -->
			<div
				class="d-none d-lg-flex justify-content-around align-items-center gap-5 primary-color fsize"
			>
				<router-link to="/" class="text-decoration-none primary-color"
					>Home</router-link
				>
				<router-link
					to="/shop"
					class="text-decoration-none primary-color"
					>Shop</router-link
				>
				<router-link
					to="/about"
					class="text-decoration-none primary-color"
					>About</router-link
				>
				<router-link
					to="/contact"
					class="text-decoration-none primary-color"
					>Contact</router-link
				>
			</div>

			<div
				class="d-none d-lg-flex justify-content-center align-items-center gap-4"
			>
				<div
					class="collapse collapse-horizontal input-group flex-nowrap ms-3"
					id="search"
				>
					<input
						class="form-control"
						type="search"
						placeholder="Search"
					/>
				</div>
				<button
					class="bg-transparent border-0"
					data-bs-toggle="collapse"
					data-bs-target="#search"
					aria-expanded="false"
					aria-controls="#search"
					href=""
				>
					<img src="../assets/Search.svg" alt="" />
				</button>
				<a href=""><img src="../assets/Avatar.svg" alt="" /></a>
				<a href=""><img src="../assets/Heart.svg" alt="" /></a>
				<a href=""><img src="../assets/Vector.svg" alt="" /></a>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.primary-color {
	color: #3a3845;
}
.primary-bg-color {
	background-color: #3a3845;
}

.secondary-color {
	color: #f7f6f5;
}
.natural-bg-color {
	background-color: #f7f6f5;
}

.natural2-color {
	color: #807f86;
}
.natural2-bg-color {
	background-color: #807f86;
}

.fsize {
	font-size: 14px;
}
</style>
