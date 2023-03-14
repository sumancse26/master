<template>
	<div id="header-layout">
		<div class="header">
			<div class="header-content d-flex align-items-center justify-content-between row">
				<span class="material-symbols-outlined menubar" @click="toggleMenubarHandler"> menu </span>
				<div class="logo col-md-7 d-flex justify-content-end">
					<h1 class="p-0 m-0">Techiegonic</h1>
				</div>
				<div class="login-signup col-md-5 d-flex justify-content-end">
					<p class="login p-0 m-0">Login</p>
					<p class="signup p-0 m-0">Sign Up</p>
				</div>
			</div>
		</div>

		<div class="row navbar d-flex">
			<div class="category-list col-md-6">
				<ul class="d-flex" :class="{ list: isMenubarToggle, 'show-list': !isMenubarToggle }">
					<li><a>News</a></li>
					<li><a>Fashion</a></li>
					<li><a>Technology</a></li>
					<li><a>Travel</a></li>
					<li><a>Food</a></li>
				</ul>
			</div>
			<div class="content-search d-flex input-group col-md-6">
				<span class="material-symbols-outlined"> search </span>
				<input
					type="text"
					class="form-control"
					placeholder="Search here ..."
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
			</div>
			<!-- <div class="social-section col-md-4">
				<i class="fa fa-facebook" aria-hidden="true"></i>
				<i class="fa fa-twitter" aria-hidden="true"></i>
				<i class="fa fa-instagram" aria-hidden="true"></i>
				<i class="fa fa-linkedin" aria-hidden="true"></i>
			</div> -->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isMenubarToggle: false,
			};
		},
		methods: {
			toggleMenubarHandler() {
				this.isMenubarToggle = !this.isMenubarToggle;
			},
		},
	};
</script>
<style scoped>
	* {
		--bs-gutter-x: unset !important;
		--bs-gutter-y: unset !important;
	}
	#header-layout {
		border-bottom: 2px solid #e5e7eb;
	}
	#header-layout .header {
		background-color: #f5f5f5;
	}
	#header-layout .header-content {
		padding: 15px 200px;
	}
	#header-layout .header-content .logo h1 {
		color: #312e81;
		margin: 0;
		padding: 0;
		font-family: 'Shantell Sans', cursive;
		font-size: 30px;
		font-weight: 600;
	}
	#header-layout .header-content .login-signup .login,
	#header-layout .header-content .login-signup .signup {
		font-size: 18px;
		font-weight: 600;
		background-color: #4338ca;
		letter-spacing: 1px;
		font-family: cursive;
		color: #fff;
		padding: 3px 10px !important;
		text-align: center;
		margin-right: 10px !important;
		border-radius: 5px;
	}
	#header-layout .header-content .login-signup .signup {
		margin-right: 0 !important;
		background-color: #4d7c0f;
	}
	#header-layout .header-content .login-signup .login:hover,
	#header-layout .header-content .login-signup .signup:hover {
		cursor: pointer;
	}
	#header-layout .navbar {
		padding: 10px 200px;
	}
	#header-layout .category-list ul {
		margin: 0;
		padding: 0;
		height: 40px;
		align-items: center;
		list-style: none;
	}
	#header-layout .category-list ul li {
		text-align: center;
	}

	#header-layout .category-list ul li a {
		font-size: 18px;
		padding: 0 20px;
		font-family: 'Open Sans', sans-serif;
		letter-spacing: 2px;
		font-weight: 500;
		color: #57616f;
		cursor: pointer;
		transition: border-bottom;
		transition-timing-function: ease-in-out;
	}
	#header-layout .category-list ul li a:first-child {
		padding-left: 0 !important;
	}
	#header-layout .category-list ul li a:hover {
		color: #f97316;
		border-bottom: 2px solid #312e81;
	}
	/* .header .social-section {
		display: flex;
		justify-content: flex-end !important;
		align-items: center;
	}
	.header .social-section i {
		padding: 10px;
		cursor: pointer;
		font-size: 16px;
		font-weight: 500;
	} */

	.content-search {
		display: flex;
		/* flex-direction: column; */
		justify-content: center;
		align-items: center;
		width: 30% !important;
		margin: 0;
	}
	.content-search input {
		height: 35px;
		position: relative;
		padding-left: 45px;
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		letter-spacing: 1px;
		box-shadow: unset;
		border-top-left-radius: 5px !important;
		border-bottom-left-radius: 5px !important;
	}
	.content-search input:focus {
		border: 1px solid #312e81;
		border-radius: 5px !important;
	}
	.content-search span {
		position: absolute !important;
		z-index: 9;
		color: #57616f;
		font-size: 20px;
		font-weight: 600;
		top: 9px;
		left: 15px;
	}

	.menubar {
		display: none;
	}

	@media screen and (min-width: 991px) and (max-width: 1365px) {
		.logo {
			width: 100% !important;
		}

		.header .category-list .show-list {
			display: none;
		}
		.header .category-list .list {
			position: absolute !important;
			left: 21% !important;
			top: 11% !important;
			display: flex !important;
			flex-direction: column !important;
		}
		.header .category-list .list li {
			text-align: start !important;
		}
		.header .category-list .list li a {
			font-size: 18px !important;
			font-weight: 600;
		}
		.header .menubar {
			display: inline-flex !important;
			font-size: 50px;
			font-weight: 600;
			margin: 0;
			padding: 0;
		}
		.header .list {
			display: inline-flex !important;
			position: absolute;
		}
	}
</style>
