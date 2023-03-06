<template>
	<div class="sidebar-header d-flex align-items-center justify-content-center">
		<span class="material-symbols-outlined"> emoji_people </span>
		<h3>Blog Admin</h3>
	</div>
	<div class="dashboard-content d-flex align-items-center justify-content-">
		<span class="material-symbols-outlined"> av_timer </span>
		<h5>Dashboard</h5>
	</div>

	<div class="accordion accordion-flush sidebar-accordion" id="accordionFlushExample">
		<div class="accordion-item">
			<h2 class="accordion-header accordion-header-custom" id="flush-headingOne">
				<button
					class="accordion-button collapsed accordion-header-custom"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#flush-collapseOne"
					aria-expanded="false"
					aria-controls="flush-collapseOne"
				>
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
					<p class="m-0 p-0">Category Name</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped src="../css/sidebar.css"></style>
