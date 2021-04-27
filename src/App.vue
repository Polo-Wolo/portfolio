<template>
	<div class="relative my-14 lg:my-16 w-full h-screen bg-scroll bg-gradient-to-bl from-dodger-bg to-earie">
		<div>
			<MobileNavBar></MobileNavBar>
			<NavBar></NavBar>
		</div>
		<router-view/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'
import MobileNavBar from '@/components/MobileNavBar.vue'

export default defineComponent({
	components :{
		MobileNavBar,
		NavBar
	}
})
</script>


<style lang="scss">

</style>
