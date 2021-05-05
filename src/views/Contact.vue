<template>
	<div class="bg-white p-3 md:p-6 md:rounded-lg shadow-lg mx-auto max-w-2xl">
		<div class="text-white pl-8 text-xl rounded-lg bg-dodger flex justify-center items-center py-2 mb-6">
			Contact me
		</div>
		<form class="w-full mx-auto">
			<div class="flex flex-wrap -mx-3">
				<div class="w-full px-3 mb-3 md:mb-0">
					<div class="text-earie text-left ml-4 mb-2" for="grid-sender">
						Sender
					</div>
					<input class="appearance-none w-full border-gray-100 bg-gray-100 text-earie border-2 rounded py-3 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:border-dodger" id="grid-first-name" type="text" placeholder="Jane">
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-3">
				<div class="w-full px-3">
					<div class="text-earie text-left ml-4 mb-2">
						E-mail
					</div>
					<input class="appearance-none w-full border-gray-100 bg-gray-100 text-earie border-2 rounded py-3 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:border-dodger" id="email" type="email" placeholder="youremail@yourdomain.com">
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-3">
				<div class="w-full px-3">
					<div class="text-earie text-left ml-4 mb-2">
						Message
					</div>
					<textarea class=" no-resize appearance-none w-full border-gray-100 bg-gray-100 text-earie border-2 rounded py-3 px-4 mb-3 leading-tight focus:border focus:outline-none focus:bg-white focus:border-dodger h-48 resize-none" id="message" placeholder="Type your message here !"></textarea>
				</div>
			</div>
			<button class="btn btn-dodger mx-auto">Send</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Contact',
});
</script>