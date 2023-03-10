<template>
	<div class="dashboard">
		<div class="sidebar content">
			<Sidebar />
		</div>
		<div class="right-sidebar">
			<Details />
			<Content />
			<Footer />
		</div>
	</div>
</template>

<script>
	import Sidebar from './components/SidebarComp.vue';
	import Details from './components/DetailsDashboard.vue';
	import Content from './components/ContentComp.vue';
	import Footer from './components/FooterComp.vue';
	export default {
		components: {
			Sidebar,
			Details,
			Content,
			Footer,
		},
	};
</script>

<style scoped src="./css/dashboard.css"></style>
