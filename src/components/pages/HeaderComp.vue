<template>
	<div id="header-layout">
		<div class="header d-flex align-items-center justify-content-between row">
			<div class="logo col-md-2">
				<h1>Techiegonic</h1>
			</div>
			<div class="category-list col-md-7">
				<span class="material-symbols-outlined menubar" @click="toggleMenubarHandler"> menu </span>
				<ul class="d-flex" :class="{ list: isMenubarToggle, 'show-list': !isMenubarToggle }">
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
			font-size: 20px !important;
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
