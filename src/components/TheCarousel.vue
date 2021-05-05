<template>

	<Carousel class="flex-grow group h-full" :settings="settings">
		<Slide v-for="url in urls" :key="url">
			<img class="carousel__item" :src="url" :alt="url">
		</Slide>

		<template #addons>
			<Navigation />
		</template>
	</Carousel>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
// import { PicturesUrl } from '@/models'

export default defineComponent({
	name: 'TheCarousel',
	components: {
		Carousel,
		Slide,
		Navigation,
	},
	props: {
		urls: {
			type: Object as PropType<Array<string>>,

		}
	},
	// why incorrect ?
	data: () => ({
		// carousel settings
		settings: {
			itemsToShow: 1,
			snapAlign: 'center',
			wrapAround: true,
		},
	}),
});
</script>

<style lang="scss" scoped>
.carousel__item {
	@apply bg-earie flex object-cover bg-center text-white w-full justify-center items-center rounded-md min-h-300;
}
</style>