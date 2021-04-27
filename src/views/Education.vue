<template>
  <div class="Education text-white">
    <!-- component -->
	<div class="container mx-auto w-full h-full">
		<div class="relative wrap overflow-hidden p-4 md:p-9 h-full">
			<!-- Line -->
			<div class="border-2-2 absolute border-opacity-50 border-white h-full border left-6.75 md:left-52.25 lg:left-1/2"></div>

			<!-- right timeline -->
			<div class="timeline-card">
				<div class="date-card">
					<div class="lg:flex-grow"></div>
					<div class="date">Juil 2019</div>
				</div>
				<div class="circle">
				</div>
				<div class="box">
					<div class="header">
						<div class="title">Bacalauréat Scientifique</div>
					</div>
					<div class="body">
						<p class="content">Obtention du Baccalauréat au lycée Saint-Louis de Châteaulin</p>
						<p class="content">Spécialité Informatique et science du numérique</p>
						<p class="content">Section Européenne et Breton</p>
					</div>
				</div>
			</div>

			<!-- left timeline -->
			<div class="timeline-card lg:flex-row-reverse">
				<div class="date-card">
					<div class="date">Juil 2019</div>
					<div class="hidden lg:flex-grow"></div>
				</div>
				<div class="circle"></div>
				<div class="box">
					<div class="header">
						<div class="title">Bacalauréat Scientifique</div>
					</div>
					<div class="body">
						<p class="content">Obtention du Baccalauréat au lycée Saint-Louis de Châteaulin</p>
						<p class="content">Spécialité Informatique et science du numérique</p>
						<p class="content">Section Européenne et Breton</p>
					</div>
				</div>
			</div>
			
			<!-- right timeline -->
			<div class="timeline-card">
				<div class="date-card">
					<div class="lg:flex-grow"></div>
					<div class="date">Juil 2019</div>
				</div>
				<div class="circle"></div>
				<div class="box">
					<div class="header">
						<div class="title">Bacalauréat Scientifique</div>
					</div>
					<div class="body">
						<p class="content">Obtention du Baccalauréat au lycée Saint-Louis de Châteaulin</p>
						<p class="content">Spécialité Informatique et science du numérique</p>
						<p class="content">Section Européenne et Breton</p>
					</div>
				</div>
			</div>

			<!-- left timeline -->
			<div class="timeline-card lg:flex-row-reverse">
				<div class="date-card">
					<div class="date">Juil 2019</div>
					<div class="hidden lg:flex-grow"></div>
				</div>
				<div class="circle"></div>
				<div class="box">
					<div class="header">
						<div class="title">Bacalauréat Scientifique</div>
					</div>
					<div class="body">
						<p class="content">Obtention du Baccalauréat au lycée Saint-Louis de Châteaulin</p>
						<p class="content">Spécialité Informatique et science du numérique</p>
						<p class="content">Section Européenne et Breton</p>
					</div>
				</div>
			</div>

			<!-- right timeline -->
			<div class="timeline-card">
				<div class="date-card">
					<div class="lg:flex-grow"></div>
					<div class="date">Juil 2019</div>
				</div>
				<div class="circle"></div>
				<div class="box">
					<div class="header">
						<div class="title">Bacalauréat Scientifique</div>
					</div>
					<div class="body">
						<p class="content">Obtention du Baccalauréat au lycée Saint-Louis de Châteaulin</p>
						<p class="content">Spécialité Informatique et science du numérique</p>
						<p class="content">Section Européenne et Breton</p>
					</div>
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
.timeline-card {
	@apply mb-8 flex justify-between space-y-4 w-full;

	.header {
		@apply bg-dodger flex rounded-t-lg shadow-lg text-right py-1 md:py-2 px-3 md:px-6 font-sans items-center;
	}
	.body {
		@apply bg-white rounded-b-lg px-3 md:px-4 py-2 md:py-3 ;
	}
	.title {
		@apply font-sans text-left text-white text-sm md:text-lg font-medium;
	}
	.box {
		@apply order-2 md:order-1 w-2/3 lg:w-5/12 rounded-xl border-2 border-white;
	}
	.content {
		@apply font-sans text-xs md:text-sm text-justify md:leading-relaxed tracking-wide text-earie;
	}
	.date-card {
		@apply order-2 md:order-1 lg:w-5/12 w-1/6 flex items-start;
	}
	.date {
		@apply text-white py-5 text-xs md:text-base font-medium;
	}
	.circle {
		@apply z-20 flex items-center order-1 bg-earie border-3 border-dodger shadow-lg w-6 h-6 md:w-8 md:h-8 rounded-full;
	}
}
</style>