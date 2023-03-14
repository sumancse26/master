<template>
	<div class="layout">
		<Header />
		<div class="content">
			<MainContent />
		</div>
		<Footer />
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
		grid-template-rows: auto auto auto;
	}
	.layout .content {
		padding: 0 200px;
	}
</style>
