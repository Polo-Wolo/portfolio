<template>
	<div class="Projects text-white px-9">
		<h1>This is my Projects page</h1>
		<div >
			<TheCarousel></TheCarousel>
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
