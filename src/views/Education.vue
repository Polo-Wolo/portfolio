<template>
  <div class="text-white">
    <!-- component -->
	<div class="container mx-auto w-full h-full">
		<div class="relative wrap overflow-hidden p-4 md:p-9 h-full">
			<!-- Line -->
			<div class="border-2-2 absolute border-opacity-50 border-white h-full border left-6.75 md:left-50.25 lg:left-1/2"></div>
			
			<EducationCard
				v-for="(education, index) in educations"
				:key="index"
				:education="education"
				:left="Boolean(index % 2)"
				>
			</EducationCard>

		</div>
	</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import EducationCard from '@/components/Cards/EducationCard.vue'

export default defineComponent({
	components: {
		EducationCard
	},
	computed: {
		...mapGetters({
			educations: "educations"
		})
	}
});
</script>

<style lang="scss" scoped>
// .timeline-card-yellow{
// 	.header {
// 		@apply bg-yellow-500 flex rounded-t-lg shadow-lg text-right py-1 md:py-2 px-3 md:px-6 font-sans items-center;
// 	}
// 	.circle {
// 		@apply z-20 flex items-center order-1 bg-earie border-3 border-yellow-500 shadow-lg w-6 h-6 md:w-8 md:h-8 rounded-full;
// 	}
// }
// .timeline-card-green{
// 	.header {
// 		@apply bg-green-500 flex rounded-t-lg shadow-lg text-right py-1 md:py-2 px-3 md:px-6 font-sans items-center;
// 	}
// 	.circle {
// 		@apply z-20 flex items-center order-1 bg-earie border-3 border-green-500 shadow-lg w-6 h-6 md:w-8 md:h-8 rounded-full;
// 	}
// }
</style>