<template>
	<div class="Projects text-white md:px-4 lg:px-9 space-y-12">

		<!-- Left Card -->
		<div class="project-card project-card-left">
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
		<div class="project-card project-card-right">
			<div class="body">
				<div class="header">
					<div class="title">Nasa ParaWing-5C</div>
					<div class="flex-grow"></div>
				</div>
				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</div>
			</div>
			<div class="images">
				<TheCarousel></TheCarousel>
			</div>
		</div>

		<!-- Left Card -->
		<div class="project-card project-card-left">
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
		<div class="project-card project-card-right">
			<div class="body">
				<div class="header">
					<div class="title">Nasa ParaWing-5C</div>
					<div class="flex-grow"></div>
				</div>
				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
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
	@apply md:rounded-lg bg-white md:text-sm xl:text-base border-2 border-white md:mx-auto flex-grow lg:w-4/5 xl:w-2/3 flex text-left;
	
	.body {
		@apply text-earie md:w-1/2 xl:w-3/5 p-3 leading-tight md:px-4 lg:py-3 xl:py-6 lg:px-5 xl:px-8 box-content;
		
		.header {
			@apply font-medium font-sans md:text-base xl:text-lg md:ml-4 mb-3 xl:mb-6 flex-grow flex flex-row;			
		}
		.title {
				@apply border-b-3 lg:border-b-4 border-dodger leading-loose;
			}
		.content {
			@apply text-justify overflow-clip;
		}
	}
	.images {
		@apply h-64 md:h-full flex-grow justify-center;
	}
}
.project-card-right {
	@apply md:flex-row flex-col-reverse;
}
.project-card-left {
	@apply flex-col-reverse md:flex-row-reverse;
}
</style>