<template>
	<div class="home">
		<div class="flex items-center justify-center md:ml-16 pt-20 md:pt-4 px-4">
			<div class="flex flex-col items-center w-full sm:max-w-xs md:max-w-lg p-4 bg-white rounded-lg md:rounded-2xl md:flex-row shadow-lg">
				<div class="-mt-28 md:-my-16 md:-ml-32 transform rotate-90" style="clip-path: url(#roundedPolygon)">
					<img
						class="w-auto h-52 transform -rotate-90"
						src="../assets/jpeg/sunset_24_juil_2020.jpg"
						alt="Paul Walczak"
					/>
				</div>
				<div class="flex flex-col space-y-6 flex-grow px-6">
					<div class="flex flex-col items-center md:items-start">
						<h2 class="text-xl font-medium text-earie">Paul Walczak</h2>
						<p class="text-base font-medium text-gray-400">Engineering Student</p>
					</div>
					<div class="flex items-center justify-center space-x-8 md:space-x-6 md:justify-start">

						<a href="https://www.linkedin.com/in/paul-walczak-639106194/" target="_blank" class="transition-transform transform hover:scale-110 text-earie hover:text-dodger">
							<span class="sr-only">Linked-In</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667 v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548 S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248 h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z"></path>
							</svg>
						</a>

						<a href="https://github.com/Polo-Wolo" target="_blank" class="transition-transform transform hover:scale-110 text-earie hover:text-dodger">
							<span class="sr-only">Github</span>
							<svg aria-hidden="true" class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"></path>
							</svg>
						</a>

						<a href="https://github.com/Polo-Wolo" target="_blank" class="transition-transform transform hover:scale-110 text-earie hover:text-dodger">
							<span class="sr-only">Email</span>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</a>

						<a href="https://github.com/Polo-Wolo" target="_blank" class="transition-transform transform hover:scale-110 text-earie hover:text-dodger">
							<span class="sr-only">Email</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
						</a>
					</div>
				</div>
			</div>
		</div>

		<svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
			<defs>
			<!-- rounded polygon generator => https://weareoutman.github.io/rounded-polygon/ -->
			<!-- polygon size 190 * 190 almost the same size as the image -->
			<clipPath id="roundedPolygon">
				<path d="M91.5 5.5829037686548a28 28 0 0 1 28 0l65.530743608719 37.83419246269a28 28 0 0 1 14 24.248711305964l0 75.668384925381a28 28 0 0 1 -14 24.248711305964l-65.530743608719 37.83419246269a28 28 0 0 1 -28 0l-65.530743608719 -37.834192462691a28 28 0 0 1 -14 -24.248711305964l1.2051399627924e-13 -75.668384925381a28 28 0 0 1 14 -24.248711305964"
				/>
			</clipPath>
			</defs>
		</svg>

	</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Home',
});
</script>
