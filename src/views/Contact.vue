<template>
	<div class="bg-white p-3 md:p-6 md:rounded-lg shadow-lg mx-auto max-w-2xl">
		<div class="text-white pl-8 text-xl rounded-lg bg-dodger flex justify-center items-center py-2 mb-6">
			Contact me
		</div>
		<form class="w-full mx-auto flex-col space-y-3">
			<div class="flex space-x-2 text-earie">
				<a href="mailto:paul.wzk.pro@gmail.com" class="flex space-x-2 items-center text-earie hover:text-dodger">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" stroke="none" stroke-width="none" fill="currentColor">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
					</svg>
					<div>
						paul.wzk.pro@gmail.com
					</div>
				</a>
			</div>
			<div class="flex space-x-2 text-earie">
				<a href="tel:+33615511406" class="flex space-x-2 items-center text-earie hover:text-dodger">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" stroke="none" stroke-width="none" fill="currentColor">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
					</svg>
					<div>
						06.15.51.14.06
					</div>
				</a>
			</div>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Contact',
});
</script>