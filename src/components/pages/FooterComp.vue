<template>
	<div class="footer row">
		<div class="name col-md-4">
			<p class="blog-name">Techiegonic</p>
			<p class="privacy">Privacy Policy Advertisement</p>
			<p class="copyright">© Copyright ©2023 All rights reserved | This template is made by Suman Sarkar</p>
		</div>
		<div class="about-us col-md-2">
			<span class="title">About Us</span>
			<p class="about">About Us</p>
			<p class="join">Join Us</p>
			<p class="contact">Contact Us</p>
		</div>
		<div class="categories col-md-2">
			<span class="title">Categories</span>
			<p class="about">Web Design</p>
			<p class="join">JavaScript</p>
			<p class="contact">Jquery</p>
			<!-- <p class="contact">Css</p> -->
		</div>

		<div class="newsletter col-md-4">
			<p>Join Our newsletter</p>
			<input type="text" placeholder="Enter your email" />
			<div class="social-section d-flex">
				<i class="fa fa-facebook" aria-hidden="true"></i>
				<i class="fa fa-twitter" aria-hidden="true"></i>
				<i class="fa fa-instagram" aria-hidden="true"></i>
				<i class="fa fa-linkedin" aria-hidden="true"></i>
			</div>
		</div>
	</div>
</template>

<style scoped>
	* {
		--bs-gutter-x: unset;
	}
	.footer {
		display: flex;
		align-items: center;
	}
	.footer .name .blog-name {
		font-size: 30px;
		font-family: 'Shantell Sans', cursive;
		color: #312e81;
		font-weight: 600;
		margin: 0;
	}
	.footer .name .privacy,
	.footer .name .copyright {
		font-size: 16px;
		letter-spacing: 2px;
		font-family: 'Shantell Sans', cursive;
		color: #88888a;
		font-weight: 500;
		margin: 0;
		margin-top: 20px;
		margin-bottom: 10px;
	}
	.footer .name .copyright {
		font-size: 12px;
	}

	.footer .categories .title,
	.footer .about-us .title {
		font-size: 18px;
		font-weight: 600;
		text-transform: capitalize;
		letter-spacing: 1px;
		font-family: 'Open Sans', sans-serif;
		margin-bottom: 20px !important;
	}
	.footer .categories .about,
	.footer .about-us .about {
		margin-top: 20px;
	}
	.footer .categories p,
	.footer .about-us p {
		font-size: 16px;
		font-weight: 500;
		text-transform: capitalize;
		letter-spacing: 1px;
		font-family: 'Open Sans', sans-serif;
		color: #88888a;
		margin: 0;
	}
	.footer .categories p:hover,
	.footer .about-us p:hover {
		cursor: pointer;
		color: #000;
	}
	.footer .newsletter {
		margin-top: 15px;
	}
	.footer .newsletter p {
		margin: 0;
		font-size: 20px;
		font-weight: 600;
		letter-spacing: 1px;
		font-family: open-sans;
		text-transform: capitalize;
	}
	.footer .newsletter input {
		height: 38px;
		padding-left: 20px;
		margin-top: 20px;
	}
	.footer .newsletter .social-section i:first-child {
		padding-left: 0;
	}
	.footer .newsletter .social-section i:hover {
		cursor: pointer;
	}
	.footer .newsletter .social-section i {
		padding: 15px;
	}

	/* responsive style section */

	@media screen and (min-width: 1366px) {
		.footer {
			height: 10% !important;
		}
	}
</style>
