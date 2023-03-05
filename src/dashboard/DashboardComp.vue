<template>
	<div class="dashboard">
		<div class="sidebar">
			<Sidebar />
		</div>
		<div class="right-sidebar">
			<div class="header">header</div>
			<div class="content">content</div>
			<div class="footer">footer</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from './components/SidebarComp.vue';
	export default {
		components: {
			Sidebar,
		},
	};
</script>

<style scoped src="./css/dashboard.css"></style>
