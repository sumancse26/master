<template>
	<div class="sidebar">
		<div class="sidebar-header d-flex align-items-center justify-content-start">
			<span class="material-symbols-outlined"> emoji_people </span>
			<h3>Blog Admin</h3>
		</div>
		<div class="dashboard-content d-flex align-items-center justify-content-start rounded">
			<span class="material-symbols-outlined"> av_timer </span>
			<h5>Dashboard</h5>
		</div>
		<!-- User section -->
		<div class="accordion accordion-flush sidebar-accordion" id="accordionFlushExample">
			<div class="accordion-item">
				<h2 class="accordion-header accordion-header-custom" id="flush-headingOne">
					<button
						class="rounded accordion-button collapsed accordion-header-custom"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#flush-collapseOneUser"
						aria-expanded="false"
						aria-controls="flush-collapseOne"
					>
						<span class="material-symbols-outlined"> person_filled </span>
						User List
					</button>
				</h2>
				<div
					id="flush-collapseOneUser"
					class="accordion-collapse collapse user-name"
					aria-labelledby="flush-headingOne"
					data-bs-parent="#accordionFlushExample"
				>
					<div class="accordion-body">
						<p class="m-0 p-0 d-flex align-items-center justify-content-start">
							<span class="material-symbols-outlined"> radio_button_checked </span
							><span class="cat-item">User1</span>
						</p>
						<p class="m-0 p-0 d-flex align-items-center justify-content-start">
							<span class="material-symbols-outlined"> radio_button_checked </span>User2
						</p>
						<p class="m-0 p-0 d-flex align-items-center justify-content-start">
							<span class="material-symbols-outlined"> radio_button_checked </span>User3
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Category section -->
		<div class="accordion accordion-flush sidebar-accordion" id="accordionFlushExample">
			<div class="accordion-item">
				<h2 class="accordion-header accordion-header-custom" id="flush-headingOne">
					<button
						class="rounded accordion-button collapsed accordion-header-custom"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#flush-collapseOne"
						aria-expanded="false"
						aria-controls="flush-collapseOne"
					>
						<span class="material-symbols-outlined"> filter_list </span>
						Category List
					</button>
				</h2>
				<div
					id="flush-collapseOne"
					class="accordion-collapse collapse category-name"
					aria-labelledby="flush-headingOne"
					data-bs-parent="#accordionFlushExample"
				>
					<div class="accordion-body">
						<p class="m-0 p-0 d-flex align-items-center justify-content-start">
							<span class="material-symbols-outlined"> radio_button_checked </span
							><span class="cat-item">Sports</span>
						</p>
						<p class="m-0 p-0 d-flex align-items-center justify-content-start">
							<span class="material-symbols-outlined"> radio_button_checked </span>Politics
						</p>
						<p class="m-0 p-0 d-flex align-items-center justify-content-start">
							<span class="material-symbols-outlined"> radio_button_checked </span>Science
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Category section -->
		<div class="accordion accordion-flush sidebar-accordion" id="accordionFlushExample">
			<div class="accordion-item">
				<h2 class="accordion-header accordion-header-custom" id="flush-headingOne">
					<button
						class="rounded accordion-button collapsed accordion-header-custom"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#flush-collapseOnePost"
						aria-expanded="false"
						aria-controls="flush-collapseOne"
					>
						<span class="material-symbols-outlined"> post_add </span>
						Post List
					</button>
				</h2>
				<div
					id="flush-collapseOnePost"
					class="accordion-collapse collapse blog"
					aria-labelledby="flush-headingOne"
					data-bs-parent="#accordionFlushExample"
				>
					<div class="accordion-body">
						<p class="m-0 p-0 d-flex align-items-center justify-content-start">
							<span class="material-symbols-outlined"> radio_button_checked </span
							><span class="cat-item">Post 1</span>
						</p>
						<p class="m-0 p-0 d-flex align-items-center justify-content-start">
							<span class="material-symbols-outlined"> radio_button_checked </span>Post 2
						</p>
						<p class="m-0 p-0 d-flex align-items-center justify-content-start">
							<span class="material-symbols-outlined"> radio_button_checked </span>Post 3
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped src="../css/sidebar.css"></style>
