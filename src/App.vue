<template>
	<div id="nav">
		<router-link to="/"><img class="h-8 w-10 ml-16 transform hover:scale-105 hover:from-transparent" src="../src/assets/PW.svg"></router-link>
		<div class="flex-grow"></div>
		<div class="flex-inline space-x-16 items-center">
			<router-link to="/">Home</router-link>
			<router-link to="/education">Education</router-link>
			<router-link to="/projects">Projects</router-link>
			<router-link to="/hobbies">Hobbies</router-link>
		</div>
		<div class="btn btn-dodger ml-64">Contact</div>
	</div>
	<router-view/>
</template>

<style lang="scss">
#nav {
	@apply h-16 px-16 items-center text-sm flex justify-center bg-earie text-white font-thin shadow-lg mb-4;

	a {
		&.router-link-exact-active {
			@apply text-dodger underline font-normal;
		}
	}
}

</style>

style