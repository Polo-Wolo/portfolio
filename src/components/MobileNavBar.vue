<template>
	<div class="mobile-nav">
		<router-link to="/"><img class="h-10 ml-3 transform hover:scale-105 hover:from-transparent" src="../assets/svg/PW.svg"></router-link>
		<div class="flex-grow"></div>
		<div class="actualPage text-sm text-white font-light justify-center">
			<router-link to="/education">Education</router-link>
			<router-link to="/workexperiences">Work experiences</router-link>
			<router-link to="/projects">Projects</router-link>
			<router-link to="/hobbies">Hobbies</router-link>
			<router-link to="/contact">Contact</router-link>
		</div>
		<div class="flex-grow"></div>
		<button class="focus:outline-none ml-5" @click="toggleDisplay">
			<svg v-if="!display" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
			<svg v-if="display" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>
	<div :class="display ? 'fixed' : '-translate-y-full absolute'" class="nav-list transform duration-300 ease-in-out py-4 -z-10 text-sm text-white font-light flex flex-col leading-relaxed space-y-2 justify-center w-full bg-earie inset-x-0 shadow-md">
		<router-link @click="toggleDisplay" to="/">Home</router-link>
		<router-link @click="toggleDisplay" to="/education">Education</router-link>
		<router-link @click="toggleDisplay" to="/workexperiences">Work experiences</router-link>
		<router-link @click="toggleDisplay" to="/projects">Projects</router-link>
		<router-link @click="toggleDisplay" to="/hobbies">Hobbies</router-link>
		<router-link @click="toggleDisplay" to="/contact">Contact</router-link>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	Name: 'MobileNavBar',
	data() {
		return {
			display: false
		}
	},
	methods: {
		toggleDisplay : function() {
			this.display = !this.display;
		}
	}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mobile-nav {
	@apply z-50 lg:hidden w-full top-0 fixed h-14 px-8 items-center flex text-white bg-earie shadow-lg mb-4;
}

.nav-list {
	@apply rounded-b-lg z-40;
	a {
		@apply flex-none focus:outline-none;
		&.router-link-active {
			@apply bg-dodger block rounded-full;
		}
	}
}

.actualPage {
	a {
		@apply hidden;
		@apply flex-none focus:outline-none;
		&.router-link-active {
			@apply block;
		}
	}
}
</style>
