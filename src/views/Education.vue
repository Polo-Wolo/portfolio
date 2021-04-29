<template>
  <div class="text-white">
    <!-- component -->
	<div class="container mx-auto w-full h-full">
		<div class="relative wrap overflow-hidden p-4 md:p-9 h-full">
			<!-- Line -->
			<div class="border-2-2 absolute border-opacity-50 border-white h-full border left-6.75 md:left-50.25 lg:left-1/2"></div>
			
			<!-- right timeline -->
			<div class="timeline-card timeline-card-yellow">
				<div class="date-card">
					<div class="lg:flex-grow"></div>
					<div class="date">Ongoing  2019-2024</div>
				</div>
				<div class="circle"></div>
				<div class="box">
					<div class="header">
						<div class="title">General engineering degree</div>
					</div>
					<div class="body">
						<p class="content">I am currently studying at ENIB to become a general engineer in electronics, computer science and mechatronics.</p>
					</div>
				</div>
			</div>

			<!-- left timeline -->
			<div class="timeline-card timeline-card-green lg:flex-row-reverse">
				<div class="date-card">
					<div class="date">Juil. 2020</div>
					<div class="hidden lg:flex-grow"></div>
				</div>
				<div class="circle"></div>
				<div class="box">
					<div class="header">
						<div class="title">Volunteer as a Vacation Camp Animator</div>
					</div>
					<div class="body">
						<p class="content">I was a volunteer animator for a vacation camp in the ESTIVAL association of the Mennaisian community.</p>
					</div>
				</div>
			</div>
			
			<!-- right timeline -->
			<div class="timeline-card">
				<div class="date-card">
					<div class="lg:flex-grow"></div>
					<div class="date">Janv. 2020</div>
				</div>
				<div class="circle">
				</div>
				<div class="box">
					<div class="header">
						<div class="title">Sauveteur Secouriste du Travail - SST</div>
					</div>
					<div class="body">
						<p class="content">Awarded of the Sauveteur Secouriste du Travail (First Aid at Work) certificate in Plouzané.</p>
						<p class="content">Realised with National Engineering School of Brest - ENIB.</p>
					</div>
				</div>
			</div>

			<!-- left timeline -->
			<div class="timeline-card lg:flex-row-reverse">
				<div class="date-card">
					<div class="date">Juil. 2019</div>
					<div class="hidden lg:flex-grow"></div>
				</div>
				<div class="circle"></div>
				<div class="box">
					<div class="header">
						<div class="title">Scientific Baccalauréat</div>
					</div>
					<div class="body">
						<p class="content">Awarded of Baccalauréat with distinction at Saint-Louis high school in Châteaulin (2012-2019).</p>
						<p class="content"> - Specialization Computer Science and Digital Science</p>
						<p class="content"> - European section and Breton</p>
						<p class="content">Realised with Saint-Louis high school in Châteaulin.</p>
					</div>
				</div>
			</div>
			
			<!-- right timeline -->
			<div class="timeline-card">
				<div class="date-card">
					<div class="lg:flex-grow"></div>
					<div class="date">Avr. 2020</div>
				</div>
				<div class="circle"></div>
				<div class="box">
					<div class="header">
						<div class="title">Brevet National de Sécurité et de Sauvetage Aquatique - BNSSA</div>
					</div>
					<div class="body">
						<p class="content">Awarded of Brevet National de Sécurité et de Sauvetage Aquatique (National Aquatic Safety and Rescue Certificate) in Landerneau.</p>
						<p class="content">Realised with Aqualorn pool.</p>
					</div>
				</div>
			</div>

			<!-- left timeline -->
			<div class="timeline-card lg:flex-row-reverse">
				<div class="date-card">
					<div class="date">Avr. 2020</div>
					<div class="hidden lg:flex-grow"></div>
				</div>
				<div class="circle"></div>
				<div class="box">
					<div class="header">
						<div class="title">Premiers Secours en Equipe de niveau 1 - PSE1</div>
					</div>
					<div class="body">
						<p class="content">Awarded of Premiers Secours en Équipe de niveau 1 (the First Aid Team Level 1) certification in Landerneau.</p>
						<p class="content">Realised with the Sauveteurs Secouristes Léonards - SSL29.</p>
					</div>
				</div>
			</div>

			<!-- right timeline -->
			<div class="timeline-card timeline-card-green">
				<div class="date-card">
					<div class="lg:flex-grow"></div>
					<div class="date">Oct. 2017</div>
				</div>
				<div class="circle"></div>
				<div class="box">
					<div class="header">
						<div class="title">Solidarity journey in Haïti</div>
					</div>
					<div class="body">
						<p class="content">Solidarity stay with young Haïtians from the Noël des Anges Centre (educational center for young people in advanced poverty).</p>
						<p class="content">Realised with Saint-Louis high school in Châteaulin.</p>
					</div>
				</div>
			</div>

			<!-- left timeline -->
			<div class="timeline-card lg:flex-row-reverse">
				<div class="date-card">
					<div class="date">Juin 2017</div>
					<div class="lg:flex-grow"></div>
				</div>
				<div class="circle"></div>
				<div class="box">
					<div class="header">
						<div class="title">PET for School</div>
					</div>
					<div class="body">
						<p class="content">Awarded PET for School in Brest</p>
						<p class="content"><u>English level :</u> B1 Cambridge.</p>
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
		@apply order-2 md:order-1 lg:w-5/12 w-1/7 flex items-start;
	}
	.date {
		@apply text-white py-5 text-xs md:text-base font-medium;
	}
	.circle {
		@apply z-20 flex items-center order-1 bg-earie border-3 border-dodger shadow-lg w-6 h-6 md:w-8 md:h-8 rounded-full;
	}
	.circle-red{
		@apply z-20 flex items-center order-1 bg-earie border-3 border-red-500 shadow-lg w-6 h-6 md:w-8 md:h-8 rounded-full;
	}
	.circle-green{
		@apply z-20 flex items-center order-1 bg-earie border-3 border-green-500 shadow-lg w-6 h-6 md:w-8 md:h-8 rounded-full;
	}
}
.timeline-card-yellow{
	.header {
		@apply bg-yellow-500 flex rounded-t-lg shadow-lg text-right py-1 md:py-2 px-3 md:px-6 font-sans items-center;
	}
	.circle {
		@apply z-20 flex items-center order-1 bg-earie border-3 border-yellow-500 shadow-lg w-6 h-6 md:w-8 md:h-8 rounded-full;
	}
}
.timeline-card-green{
	.header {
		@apply bg-green-500 flex rounded-t-lg shadow-lg text-right py-1 md:py-2 px-3 md:px-6 font-sans items-center;
	}
	.circle {
		@apply z-20 flex items-center order-1 bg-earie border-3 border-green-500 shadow-lg w-6 h-6 md:w-8 md:h-8 rounded-full;
	}
}
</style>