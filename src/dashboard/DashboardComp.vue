<template>
	<div class="dashboard">
		<div class="sidebar content">
			<Sidebar />
		</div>
		<div class="right-sidebar">
			<Details />
			<Content />
			<div class="footer">footer</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from './components/SidebarComp.vue';
	import Details from './components/DetailsDashboard.vue';
	import Content from './components/ContentComp.vue';
	export default {
		components: {
			Sidebar,
			Details,
			Content,
		},
	};
</script>

<style scoped src="./css/dashboard.css"></style>
<!-- <style scoped src="../css/dashbboard.css"></style> -->
