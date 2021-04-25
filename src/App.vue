<template>
	<div class="w-full h-screen bg-gradient-to-bl from-dodger-bg to-earie">
		<NavBar></NavBar>
		<router-view/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
	components :{
		NavBar
	}
})
</script>


<style lang="scss">

</style>
