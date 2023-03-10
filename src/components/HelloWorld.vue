<template>
	<div class="layout">
		<Header />
		<div class="content">
			<MainContent />
			<Footer />
		</div>
	</div>
</template>

<script>
	import Header from './pages/HeaderComp.vue';
	import MainContent from './pages/MainComp.vue';
	import Footer from './pages/FooterComp.vue';
	export default {
		components: {
			Header,
			MainContent,
			Footer,
		},
	};
</script>

<style scoped>
	.layout {
		display: grid;
		grid-template-rows: 80px auto auto;
	}
	.layout .content {
		padding: 0 200px;
	}
</style>
