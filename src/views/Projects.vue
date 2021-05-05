<template>
	<div class="text-white md:px-4 lg:px-9 space-y-12">

			<ProjectCard
				v-for="(project, index) in projects"
				:key="index"
				:project="project" 
				:right="Boolean(index % 2)"
				>
			</ProjectCard>
			
			
		<!-- import from VueX global store ? -->


		<!-- template Left Card -->
		<!-- <div class="project-card project-card-left">
			<div class="body">
				<div class="header">
					<div class="title">Nasa ParaWing-5C</div>
					<div class="flex-grow"></div>
					<div class="text-earie flex space-x-1  items-center">
						<p>2020-2021</p> 
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
						<p>| 54h</p>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
				</div>
				<div class="content">
					<p>When I was younger, my dad played with a traction kite, this kite made me dream !😍
					So in summer 2020 I decided to made my own kite with some upgrades. I started to search few plans and I begin by sewing the wings and the center with our old sewing machine (it tooks me about 40 hours).
					I have resumed this paused project in April 2021 and finish it by creating 48 flanges et 4 main lines (about 14 hours).
					<br>
					A child's dream come true! 😁
					Such good time to make it flight ! 🪁</p> 
				</div>
			</div>
			<div class="images">
				<TheCarousel></TheCarousel>
			</div>
		
		</div> -->

		<!-- Right Card -->
		<!-- <div class="project-card project-card-right">
			<div class="body">
				<div class="header">
					<div class="title">Nasa ParaWing-5C</div>
					<div class="flex-grow"></div>
					<div class="text-earie flex space-x-1 items-center">
						<p>2021</p> 
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
						<p>| 24h</p>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
				</div>
				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</div>
			</div>
			<div class="images">
				<TheCarousel></TheCarousel>
			</div>
		</div> -->

	

	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex'
// import TheCarousel from '../components/TheCarousel.vue';
import ProjectCard from '../components/Cards/ProjectCard.vue'

export default defineComponent({
	name: 'Projects',
	components: {
		// TheCarousel,
		ProjectCard
	},
	computed: {
		...mapGetters({
			projects: "projects"
		})
	}
});
</script>

<style lang="scss" scoped>
.project-card {
	@apply md:rounded-lg bg-white text-sm leading-tight md:leading-normal 2xl:text-base border-2 border-white md:mx-auto flex-grow lg:w-4/5 xl:w-2/3 flex text-left md:h-72 lg:h-80;
	
	.body {
		@apply text-earie md:w-2/3 lg:w-3/5 p-3 md:px-5 lg:py-3 xl:py-4 lg:px-5 xl:px-8;
		
		.header {
			@apply font-medium font-sans md:text-base md:ml-4 mb-3 flex-grow flex flex-row;			
			.title {
					@apply border-b-3 lg:border-b-4 border-dodger leading-loose;
			}
		}
		.content {
			@apply text-justify overflow-clip overflow-hidden;
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