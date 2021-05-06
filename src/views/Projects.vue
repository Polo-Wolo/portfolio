<template>
	<div class="text-white md:px-4 lg:px-9 space-y-12">

			<ProjectCard
				v-for="(project, index) in projects"
				:key="index"
				:project="project" 
				>
			</ProjectCard>

	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex'
import ProjectCard from '../components/Cards/ProjectCard.vue'

export default defineComponent({
	name: 'Projects',
	components: {
		ProjectCard
	},
	computed: {
		...mapGetters({
			projects: "projects"
		})
	}
});
</script>
