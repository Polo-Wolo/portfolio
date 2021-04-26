<template>
  <div class="Education text-white">
    <!-- component -->
	<div class="container mx-auto w-full h-full">
		<div class="relative wrap overflow-hidden p-10 h-full">
			<!-- Line -->
			<div class="border-2-2 absolute border-opacity-50 border-white h-full border" style="left: 49.9%"></div>

			<!-- right timeline -->
			<div class="right-card">
				<div class="order-1 w-5/12"></div>
				<div class="circle">
					<h1 class="number">1</h1>
				</div>
				<div class="background">
					<h3 class="title">Lorem Ipsum</h3>
					<p class="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</div>

			<!-- left timeline -->
			<div class="left-card">
				<div class="order-1 w-5/12"></div>
				<div class="circle">
					<h1 class="number">2</h1>
				</div>
				<div class="background">
					<h3 class="title">Lorem Ipsum</h3>
					<p class="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</div>
			
			<!-- right timeline -->
			<div class="right-card">
				<div class="order-1 w-5/12"></div>
				<div class="circle">
					<h1 class="number">3</h1>
				</div>
				<div class="background">
					<h3 class="title">Lorem Ipsum</h3>
					<p class="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</div>

			<!-- left timeline -->
			<div class=" left-card">
				<div class="order-1 w-5/12"></div>
				<div class="circle">
					<h1 class="number">4</h1>
				</div>
				<div class="background">
					<h3 class="title">Lorem Ipsum</h3>
					<p class="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Education',
});
</script>

<style lang="scss" scoped>

.left-card {
	@apply mb-8 flex justify-between flex-row-reverse items-center w-full;

	.title {
		@apply mb-3 font-bold text-white text-xl;
	}
	.background {
		@apply order-1 bg-earie rounded-lg shadow-lg w-5/12 px-6 py-4;
	}
	.body {
		@apply text-sm  leading-snug tracking-wide text-white text-opacity-100;
	}
}

.right-card {
	@apply mb-8 flex justify-between items-center w-full;

	.title {
		@apply mb-3 font-bold text-earie text-xl;
	}
	.background {
		@apply order-1 bg-white rounded-lg shadow-lg w-5/12 px-6 py-4;
	}
	.body {
		@apply text-sm leading-snug tracking-wide text-earie text-opacity-100;
	}
}	

.circle {
		@apply z-20 flex items-center order-1 bg-earie border-2 border-dodger shadow-lg w-8 h-8 rounded-full;
}
.number {
		@apply mx-auto font-semibold text-lg text-white;
}
</style>