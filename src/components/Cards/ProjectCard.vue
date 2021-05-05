<template>
    <div class="project-card" :class=" right ? 'project-card-right' : 'project-card-left' ">
			<div class="body">
				<div class="header">
					<div class="title">{{ project.title }}</div>
					<div class="flex-grow"></div>
					<div class="text-earie flex space-x-1  items-center">
						<p>{{ project.date }}</p> 
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
						<p>| {{ project.time_spent }}h</p>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
				</div>
				<div class="content">
					{{ project.content }} 
				</div>
			</div>
			<div class="images">
				<TheCarousel :urls="project.pictures_url"></TheCarousel>
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
        right: {
            type: Boolean,
            required: false,
            default: false
        }
    },
})
</script>

<style lang="scss" scoped>
.project-card {
	@apply md:rounded-lg bg-white text-sm leading-tight md:leading-normal 2xl:text-base border-2 border-white md:mx-auto flex-grow lg:w-4/5 xl:w-2/3 flex text-left md:h-72 lg:h-80;
	
	.body {
		@apply text-earie md:w-2/3 lg:w-3/5 p-3 md:px-5 lg:py-3 xl:py-6 lg:px-5 xl:px-8;
		
		.header {
			@apply font-medium font-sans md:text-base md:ml-4 mb-3 flex-grow flex flex-row;			
		}
		.title {
				@apply border-b-3 lg:border-b-4 border-dodger leading-loose;
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
