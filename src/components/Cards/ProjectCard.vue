<template>
    <div class="project-card">
		<div class="header">
			<div class="title">{{ project.title }}</div>
			<div class="flex-grow"></div>
			<div class="text-earie flex space-x-1 items-center">
				<div>{{ project.date }}</div>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
				<div>| {{ project.time_spent }}h</div>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>
		</div>
		<div class="images">
			<TheCarousel :urls="project.pictures_url"></TheCarousel>
		</div>
		<div class="content">
			{{ project.content }} 
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Project } from '@/models'
import TheCarousel from '../TheCarousel.vue';

export default defineComponent({
    components: {
		TheCarousel,
	},
    props: {
        project: {
            type: Object as PropType<Project>,
            required: true
        },
    },
})
</script>

<style lang="scss" scoped>
.project-card {
	@apply mx-auto md:rounded-lg border-2 border-white flex flex-col bg-white  w-full lg:w-4/5 xl:w-3/5 2xl:w-1/2 space-y-3 pb-2 md:pb-4 pt-2;

	.header {
		@apply text-earie flex text-sm xl:text-base md:pr-6 px-4 md:pl-12;

		.title {
			@apply text-sm lg:text-base border-b-3 border-dodger leading-loose font-sans font-medium;
		}
	}
	.images {
		@apply md:px-4 h-120 md:h-96 lg:h-120;
	}
	.content {
		@apply text-earie text-justify px-2 md:px-4 text-sm xl:text-base;
	}
}
</style>
