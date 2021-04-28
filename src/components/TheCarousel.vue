<template>
	<Carousel class="w-full group" :settings="settings" :breakpoints="breakpoints">
		<Slide v-for="slide in 5" :key="slide">
			<div class="carousel__item">{{ slide }}</div>
		</Slide>

		<template #addons>
			<Navigation />
		</template>
	</Carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default defineComponent({
	name: 'TheCarousel',
	components: {
		Carousel,
		Slide,
		Navigation,
	},
	data: () => ({
		// carousel settings
		settings: {
			itemsToShow: 1.3,
			snapAlign: 'center',
			wrapAround: true,
		},
	}),
});
</script>

<style lang="scss" scoped>
.carousel__item {
	@apply bg-earie flex text-white w-full justify-center items-center rounded-md min-h-300;
}
.carousel__slide {
	@apply p-2;
}
</style>