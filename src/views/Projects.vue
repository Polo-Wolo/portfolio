<template>
	<div class="Projects text-white px-9 space-y-12">

		<!-- Left Card -->
		<div class="project-card">
			<div class="body">
				<div class="header">
					<div class="title">Nasa ParaWing-5C</div>
					<div class="flex-grow"></div>
				</div>
				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</div>
			</div>
			<div class="images">
				<TheCarousel></TheCarousel>
			</div>
		</div>

		<!-- Right Card -->
		<div class="project-card  flex-row-reverse">
			<div class="body">
				<div class="header">
					<div class="title">Nasa ParaWing-5C</div>
					<div class="flex-grow"></div>
				</div>
				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</div>
			</div>
			<div class="images">
				<TheCarousel></TheCarousel>
			</div>
		</div>

		<!-- Left Card -->
		<div class="project-card">
			<div class="body">
				<div class="header">
					<div class="title">Nasa ParaWing-5C</div>
					<div class="flex-grow"></div>
				</div>
				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</div>
			</div>
			<div class="images">
				<TheCarousel></TheCarousel>
			</div>
		</div>


		<!-- Right Card -->
		<div class="project-card  flex-row-reverse">
			<div class="body">
				<div class="header">
					<div class="title">Nasa ParaWing-5C</div>
					<div class="flex-grow"></div>
				</div>
				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</div>
			</div>
			<div class="images">
				<TheCarousel></TheCarousel>
			</div>
		</div>


	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheCarousel from '../components/TheCarousel.vue';

export default defineComponent({
	name: 'Projects',
	components: {
		TheCarousel,
	},
});
</script>

<style lang="scss" scoped>
.project-card {
	@apply rounded-lg bg-white border-2 border-white mx-auto w-2/3 flex text-left;
	
	.body {
		@apply text-earie w-3/5 pb-8 pt-6 px-8 box-content ;
		
		.header {
			@apply font-medium font-sans text-2xl ml-4 mb-6 w-full flex flex-row;

			.title {
				@apply border-b-4 border-dodger leading-loose;
			}
		}
		.content {
			@apply text-justify w-full overflow-clip;
		}
	}
	.images {
		@apply h-full flex-grow;
	}
}
</style>