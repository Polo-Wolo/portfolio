<template>
  <div class="Education text-white">
    <!-- component -->
	<div class="container mx-auto w-full h-full">
		<div class="relative wrap overflow-hidden p-9 h-full">
			<!-- Line -->
			<div class="border-2-2 absolute border-opacity-50 border-white h-full border left-52 lg:left-1/2"></div>

			<!-- right timeline -->
			<div class="timeline-card">
				<div class="date-card">
					<div class="lg:flex-grow"></div>
					<div class="date">Juillet 2019</div>
				</div>
				<div class="circle">
					<h1 class="number">1</h1>
				</div>
				<div class="background">
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
					<div class="date">Juillet 2019</div>
					<div class="hidden lg:flex-grow"></div>
				</div>
				<div class="circle">
					<h1 class="number">2</h1>
				</div>
				<div class="background">
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
					<div class="date">Juillet 2019</div>
				</div>
				<div class="circle">
					<h1 class="number">3</h1>
				</div>
				<div class="background">
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
					<div class="date">Juillet 2019</div>
					<div class="hidden lg:flex-grow"></div>
				</div>
				<div class="circle">
					<h1 class="number">4</h1>
				</div>
				<div class="background">
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
					<div class="date">Juillet 2019</div>
				</div>
				<div class="circle">
					<h1 class="number">5</h1>
				</div>
				<div class="background">
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
	@apply mb-8 flex justify-between w-full;

	.header {
		@apply bg-dodger flex rounded-t-lg shadow-lg text-right py-2 px-6 font-sans items-center;
	}
	.body {
		@apply bg-white rounded-b-lg px-6 py-4 ;
	}
	.title {
		@apply text-left text-white text-lg font-medium;
	}
	.year {
		@apply text-white text-sm font-medium;
	}
	.background {
		@apply order-1 w-2/3 lg:w-5/12 rounded-xl border-2 border-white;
	}
	.content {
		@apply text-sm text-justify leading-loose tracking-wide text-earie;
	}
	.date-card {
		@apply order-1 lg:w-5/12 w-1/6 flex items-start;
	}
	.date {
			@apply text-white py-2 font-medium;
	}
	.circle {
		@apply z-20 flex items-center order-1 bg-earie border-3 border-dodger shadow-lg w-10 h-10 rounded-full;
	}
	.number {
		@apply mx-auto font-semibold text-lg text-white;
	}
}
</style>