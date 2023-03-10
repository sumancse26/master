<template>
	<div class="main-comp">
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
				<img src="@/assets/images/post-2.jpg.webp" alt="" />
				<div class="text">
					<div class="title d-flex">
						<p class="">Php</p>
						<span>March 8, 2023</span>
					</div>
					<p class="meta-tag">For backend mostly used language is PHP.</p>
				</div>
			</div>
		</div>

		<!-- Recent post section -->
		<div class="recent-post">
			<div class="top row p-0 m-0">
				<span>Recent Post</span>
				<div class="border"></div>
			</div>
			<div class="row">
				<div class="col-md-4 p-0 m-0">
					<img src="@/assets/images/post-3.jpg.webp" alt="" />
					<div class="post-info">
						<div class="post-header d-flex justify-content-start align-items-center mt-3">
							<div class="post-category">
								<span>Travel</span>
							</div>
							<div class="post-date">
								<span>10 March, 2023.</span>
							</div>
						</div>
						<div class="post-title">
							<a href="">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a>
						</div>
					</div>
				</div>

				<div class="col-md-4 p-0 m-0">
					<img src="@/assets/images/post-4.jpg.webp" alt="" />
					<div class="post-info">
						<div class="post-header d-flex justify-content-start align-items-center mt-3">
							<div class="post-category">
								<span>Fashion</span>
							</div>
							<div class="post-date">
								<span>10 March, 2023.</span>
							</div>
						</div>
						<div class="post-title">
							<a href="">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a>
						</div>
					</div>
				</div>

				<div class="col-md-4 p-0 m-0">
					<img src="@/assets/images/post-5.jpg.webp" alt="" />
					<div class="post-info">
						<div class="post-header d-flex justify-content-start align-items-center mt-3">
							<div class="post-category">
								<span>Food</span>
							</div>
							<div class="post-date">
								<span>10 March, 2023.</span>
							</div>
						</div>
						<div class="post-title">
							<a href="">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- lower content section -->
		<div class="content row">
			<div class="left-content col-md-8">
				<div class="upper-left">
					<img src="@/assets/images/post-2.jpg.webp" alt="" />
					<div class="text">
						<div class="d-flex justify-content-start align-items-center">
							<p class="meta-tag mb-0">Vue 3</p>
							<span class="date">March 10, 2023</span>
						</div>
						<p class="d-flex post-title">
							<span>Ask HN:</span> <span class="heading-title">Powerful framework today</span>
						</p>
					</div>
				</div>

				<div class="row mt-5">
					<div class="lower-left col-md-6 pr-3">
						<img src="@/assets/images/post-5.jpg.webp" alt="" />
						<div class="post-tag d-flex justify-content-start align-items-center mt-3">
							<p>css</p>
							<span>10 March, 2023</span>
						</div>
						<p>CSS Float: A Tutorial</p>
					</div>
					<div class="lower-left col-md-6">
						<img src="@/assets/images/post-1.jpg.webp" alt="" />
						<div class="post-tag d-flex justify-content-start align-items-center mt-3">
							<p>Git</p>
							<span>10 March, 2023</span>
						</div>
						<p>About Git: A Tutorial about git</p>
					</div>
				</div>
			</div>
			<div class="right-sidebar col-md-4">right content</div>
		</div>
	</div>
</template>

<style scoped>
	* {
		--bs-gutter-x: unset;
	}
	.parent-hero {
		margin-top: 30px;
	}
	.hero-section {
		padding: 0;
		position: relative;
		--bs-gutter-x: unset;
	}
	.hero-section img {
		width: 95%;
	}
	.hero-section .text {
		position: absolute;
		z-index: 9;
		left: 5%;
		bottom: 3%;
		color: #fff;
	}
	.hero-section .text .title p {
		margin: 0;
		padding: 0;
		margin-right: 15px;
		background: #f97316;
		padding: 2px 13px;
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
		font-size: 18px;
		padding-top: 7px;
		font-weight: 600;
		font-family: 'Open Sans', sans-serif;
	}
	.hero-section .text .meta-tag {
		margin: 0;
		padding-top: 15px;
		padding-right: 20px;
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;
		font-size: 20px;
		letter-spacing: 2px;
		color: #f8f9fa;
	}

	.hero-section .text .meta-tag:hover {
		color: #f97316;
		cursor: pointer;
		text-decoration: underline;
	}

	/* recent post */

	.recent-post {
		display: flex;
		margin-top: 30px;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 55px;
	}
	.recent-post .top {
		width: 100%;
		padding: 0 !important;
		margin: 0 !important;
		margin-bottom: 30px !important;
	}
	.recent-post img {
		width: 95%;
		height: 65%;
		object-fit: cover;
	}
	.recent-post .top span {
		padding: 25px 0 2px 0;
	}
	.recent-post .top .border {
		width: 65px;
		height: 6px;
		margin: 0;
		padding: 0;
		background-color: #312e81 !important;
		margin-left: 5px;
	}
	.recent-post .post-header .post-category {
		background: #f97316;
		padding: 2px 15px;
		border-radius: 5px;
		cursor: pointer;
		margin-right: 20px;
	}

	.recent-post .post-header .post-category span {
		font-size: 16px;
		letter-spacing: 1px;
		font-weight: 500;
		color: #fff;
		line-height: 25px;
		font-family: 'Open Sans', sans-serif;
		text-transform: capitalize;
	}
	.recent-post .post-header .post-date {
		font-family: 'Open Sans', sans-serif;
		text-transform: capitalize;
		font-size: 16px;
		font-weight: 500;
		color: #9ca3af;
		letter-spacing: 2px;
	}
	.recent-post .post-info .post-title {
		margin-top: 15px;
		margin-right: 10px;
		line-height: 25px;
	}
	.recent-post .post-info .post-title a {
		color: rgb(72, 69, 69);
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 1px;
		/* font-family: cursive; */
		text-transform: capitalize;
		font-family: 'Open Sans', sans-serif;
		cursor: pointer;
		text-decoration: unset;
	}
	.recent-post .post-info .post-title a:hover {
		text-decoration: underline;
	}

	/* main content section */

	.content .left-content {
		padding-right: 2%;
	}
	.content .left-content .upper-left {
		position: relative;
	}
	.content .left-content .upper-left img {
		width: 100%;
	}
	.content .left-content .upper-left .text {
		position: absolute;
		left: 2%;
		bottom: 5%;
		line-height: 24px;
	}

	.content .left-content .upper-left .text .meta-tag {
		padding: 3px 10px;
		background-color: #0369a1;
		border-radius: 5px;
		color: #fff;
		letter-spacing: 1px;
		font-size: 16px;
		font-weight: 500;
		text-transform: capitalize;
		font-family: cursive;
		margin-right: 15px;
		cursor: pointer;
	}
	.content .left-content .upper-left .text .date {
		color: #555050;
		letter-spacing: 1px;
		font-size: 16px;
		font-weight: 500;
		text-transform: capitalize;
		font-family: cursive;
	}
	.content .left-content .upper-left .text .post-title {
		margin: 0;
		margin-top: 10px;
		cursor: pointer;
	}
	.content .left-content .upper-left .text .post-title .heading-title:hover {
		color: #f97316;
		text-decoration: underline;
	}
	.content .left-content .upper-left .text p span {
		color: #fff;
		letter-spacing: 2px;
		font-size: 25px;
		font-weight: 700;
		text-transform: capitalize;
		font-family: cursive;
	}

	/* lower left content */

	.content .left-content .lower-left:first-child {
		padding-right: 1%;
	}
	.content .left-content .lower-left img {
		width: 100%;
		height: 50%;
	}
	.content .left-content .lower-left .post-tag p {
		background: #f97316;
		font-size: 16px;
		font-weight: 500;
		font-family: 'Open Sans', sans-serif;
		text-transform: capitalize;
		padding: 2px 5px;
		letter-spacing: 1px;
		border-radius: 5px;
		margin-right: 15px;
		margin-bottom: 0;
		color: #fff;
	}
	.content .left-content .lower-left .post-tag span {
		font-size: 16px;
		font-weight: 500;
		font-family: 'Open Sans', sans-serif;
		text-transform: capitalize;
		padding: 2px 5px;
		letter-spacing: 1px;
		color: #7f7979;
	}
	.content .left-content .lower-left p {
		margin-top: 10px;
		font-size: 18px;
		font-weight: 700;
		font-family: 'Open Sans', sans-serif;
		text-transform: capitalize;
		letter-spacing: 2px;
		color: #1e293b;
	}
	.content .left-content .lower-left p:hover {
		text-decoration: underline;
	}
</style>
