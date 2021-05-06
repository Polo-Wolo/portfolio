<template>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import EducationCard from '@/components/Cards/EducationCard.vue'

export default defineComponent({
	name: "Education",
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
