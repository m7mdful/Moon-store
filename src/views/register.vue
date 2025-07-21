<!-- Abdullah Albashrawi -->
<template>
	<div class="d-flex flex-column flex-md-row-reverse vh-100">
		<!-- Left side -->
		<div
			class="d-flex flex-column justify-content-center align-items-center w-100 w-md-50 text-white p-4"
			style="background-color: #3a3845; z-index: -1"
		>
			<h1>
				<img
					src="../assets/logo-2.svg"
					alt="Logo"
					style="z-index: 1000; width: 345px; height: 136px"
				/>
			</h1>
		</div>

		<!-- Right side -->
		<div
			class="w-100 w-md-50 d-flex flex-column justify-content-center align-items-center px-4 py-5"
			style="background-color: #ffffff"
		>
			<p class="mb-1 text-center" style="font-size: 45px">
				Create Account
			</p>
			<p class="text-muted mb-5 text-center" style="font-size: 27px">
				Sign up to get started
			</p>

			<!-- Form -->
			<form class="w-100" style="max-width: 450px">
				<div class="mb-3">
					<label for="name" style="font-size: 24px">Full Name</label>
					<input
						type="text"
						id="name"
						class="form-control"
						style="padding: 10px; height: 37px; max-width: 404px"
					/>
				</div>

				<div class="mb-3">
					<label for="email" style="font-size: 24px"
						>Email Address</label
					>
					<input
						type="email"
						id="email"
						class="form-control"
						style="padding: 10px; height: 37px; max-width: 404px"
					/>
				</div>

				<div class="mb-3">
					<label for="password" style="font-size: 24px"
						>Password</label
					>
					<input
						type="password"
						id="password"
						class="form-control"
						style="padding: 10px; height: 37px; max-width: 404px"
					/>
				</div>

				<div class="mb-4">
					<label for="confirm" style="font-size: 24px"
						>Confirm Password</label
					>
					<input
						type="password"
						id="confirm"
						class="form-control"
						style="padding: 10px; height: 37px; max-width: 404px"
					/>
				</div>

				<div class="d-grid mb-5 mt-5 text-center">
					<router-link to="/login">
						<button
							type="submit"
							class="d-flex justify-content-center align-items-center text-white"
							style="
								height: 32px;
								width: 100%;
								max-width: 404px;
								font-size: 18px;
								padding: 10px;
								border-radius: 10px;
								border: 1px solid #d9d9d9;
								background-color: #3a3845;
								transition: all 0.3s;
							"
						>
							Sign Up
						</button>
					</router-link>
				</div>

				<!-- Link to Login -->
				<p class="text-center" style="font-size: 20px">
					Already have an account?

					<router-link
						to="/login"
						style="color: #0f3dde; text-decoration: none"
						>Login</router-link
					>
				</p>
			</form>
		</div>
	</div>
</template>

<script setup>
// logic can be added here later
</script>
