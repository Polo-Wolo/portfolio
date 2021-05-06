<template>
	<div class="relative pt-14 lg:pt-16 w-full h-full min-h-screen bg-scroll bg-gradient-to-bl from-dodger-bg to-earie flex flex-col items-stretch">
		<div>
			<MobileNavBar></MobileNavBar>
			<NavBar></NavBar>
		</div>
		<div class="py-4">
			<router-view/>
		</div>
		<Footer></Footer>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'
import MobileNavBar from '@/components/MobileNavBar.vue'
import Footer from '@/components/Footer.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
	components :{
		MobileNavBar,
		NavBar,
		Footer
	},
	computed: {
		...mapGetters({
			projects: "projects",
			educations: "educations"
		})
	}
})
</script>
