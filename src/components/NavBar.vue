<template>
  <div id="nav">
			<router-link to="/"><img class="h-8 w-10 ml-10 lg:ml-16 xl:ml-24 transform hover:scale-105 hover:from-transparent" src="../assets/PW.svg"></router-link>
			<div class="flex-grow"></div>
			<div class="flex-inline space-x-10 lg:space-x-16 items-center">
				<router-link to="/">Home</router-link>
				<router-link to="/education">Education</router-link>
				<router-link to="/projects">Projects</router-link>
				<router-link to="/hobbies">Hobbies</router-link>
			</div>
			<!-- <div class="btn btn-dodger ml-16 lg:ml-32 xl:ml-64">Contact</div> -->
			<router-link class="btn btn-dodger ml-16 lg:ml-32 xl:ml-64" to="/contact">Contact</router-link>
		</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
	@apply hidden z-50 lg:flex w-full top-0 fixed h-16 px-16 items-center text-sm leading-tight justify-center bg-earie text-white font-light shadow-lg mb-4;

	a {
		&.router-link-active {
			@apply text-dodger underline;
		}
	}
}
</style>
