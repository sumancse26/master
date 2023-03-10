<template>
	<div id="header-layout">
		<div class="header d-flex align-items-center justify-content-between row">
			<div class="logo col-md-2">
				<h1>Techiegonic</h1>
			</div>
			<div class="category-list col-md-7">
				<ul class="d-flex">
					<li><a>News</a></li>
					<li><a>Fashion</a></li>
					<li><a>Technology</a></li>
					<li><a>Travel</a></li>
					<li><a>Food</a></li>
				</ul>
			</div>
			<div class="social-section col-md-3">
				<i class="fa fa-facebook" aria-hidden="true"></i>
				<i class="fa fa-twitter" aria-hidden="true"></i>
				<i class="fa fa-instagram" aria-hidden="true"></i>
				<i class="fa fa-linkedin" aria-hidden="true"></i>
			</div>
		</div>
	</div>
	<div class="main-content">
		<div class="content-search d-flex input-group mb-3">
			<span class="material-symbols-outlined"> search </span>
			<input
				type="text"
				class="form-control"
				placeholder="Search here ..."
				aria-label="Username"
				aria-describedby="basic-addon1"
			/>
		</div>
	</div>

	<!--hero section -->
	<div class="parent-hero d-flex row">
		<div class="hero-section col-md-6">
			<img src="@/assets/images/post-1.jpg.webp" alt="" />
			<div class="text">
				<div class="title d-flex">
					<p class="">Javascript</p>
					<span>March 8, 2023</span>
				</div>
				<p class="meta-tag">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</p>
			</div>
		</div>

		<div class="hero-section col-md-6">
			<img src="@/assets/images/post-1.jpg.webp" alt="" />
			<div class="text">
				<div class="title d-flex">
					<p class="">Javascript</p>
					<span>March 8, 2023</span>
				</div>
				<p class="meta-tag">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
	#header-layout {
		border-bottom: 2px solid #e5e7eb;
		overflow: hidden;
		overflow-y: auto;
	}
	.header {
		padding: 0 200px;
		height: 100%;
	}
	.header .logo h1 {
		color: #312e81;
		margin: 0;
		padding: 0;
		font-family: 'Shantell Sans', cursive;
		font-size: 30px;
		font-weight: 600;
	}
	.header .category-list ul {
		margin: 0;
		padding: 0;
		height: 40px;
		align-items: center;
		list-style: none;
	}
	.header .category-list ul li[data-v-57dba9d2] {
		width: 135px;
		text-align: center;
	}

	.header .category-list ul li a {
		font-size: 20px;
		font-family: 'Open Sans', sans-serif;
		letter-spacing: 2px;
		font-weight: 500;
		color: #57616f;
		cursor: pointer;
		transition: border-bottom;
		transition-timing-function: ease-in-out;
	}
	.header .category-list ul li a:hover {
		color: #f97316;
		border-bottom: 2px solid #312e81;
	}
	.header .social-section {
		display: flex;
		justify-content: flex-end !important;
		align-items: center;
	}
	.header .social-section i {
		padding: 10px;
		cursor: pointer;
		font-size: 16px;
		font-weight: 500;
	}

	.main-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.main-content .content-search {
		width: 50% !important;
		margin: 50px 0;
	}
	.main-content input {
		height: 50px;
		position: relative;
		padding-left: 50px;
		font-family: 'Open Sans', sans-serif;
		font-size: 16px;
		letter-spacing: 2px;
		box-shadow: unset;
		border-top-left-radius: 5px !important;
		border-bottom-left-radius: 5px !important;
	}
	.main-content input:focus {
		border: 1px solid #312e81;
		border-radius: 5px !important;
	}
	.main-content span {
		position: absolute !important;
		z-index: 9;
		color: #57616f;
		font-size: 20px;
		font-weight: 600;
		top: 16px;
		left: 20px;
	}

	.parent-hero {
		padding: 0 200px;
		width: 100%;
	}
	.hero-section {
		/* width: 100%; */
		padding: 0;
	}
	.hero-section img {
		width: 5%;
		position: relative;
	}
	.hero-section .text {
		position: absolute;
		z-index: 9;
		left: 12%;
		bottom: 30%;
		color: #fff;
	}

	.hero-section .text .title p {
		margin: 0;
		padding: 0;
		margin-right: 15px;
		background: #f97316;
		/* padding: 3px 13px; */
		letter-spacing: 1px;
		font-size: 18px;
		font-family: 'Open Sans', sans-serif;
		border-radius: 3px;
	}
	.hero-section .text .title span {
		margin: 0;
		padding: 0;
		letter-spacing: 1px;
		color: #eceef2;
		/* color: #8310dd; */
		font-size: 16px;
		padding-top: 7px;
		font-weight: 500;
		font-family: 'Open Sans', sans-serif;
	}
	.hero-section .text .meta-tag {
		margin: 0;
		padding-top: 15px;
		font-family: 'Open Sans', sans-serif;
		font-weight: 700;
		font-size: 16px;
		letter-spacing: 2px;
		width: 65%;
	}
</style>
