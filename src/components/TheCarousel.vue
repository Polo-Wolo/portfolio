<template>

	<Carousel class="flex-grow group h-full" :settings="settings">
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
// import { PicturesUrl } from '@/models'

export default defineComponent({
	name: 'TheCarousel',
	components: {
		Carousel,
		Slide,
		Navigation,
	},
	// props: {
	// 	urls: {
	// 		type: Object as PropType<PicturesUrl> | string,

	// 	}
	// },
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
	@apply bg-earie flex bg-cover bg-center text-white w-full justify-center items-center rounded-md min-h-300;
}
</style>