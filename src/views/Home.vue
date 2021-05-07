<template>
	<div class="flex items-center justify-center md:ml-16 pt-20 md:pt-4 px-4">

		<UserCard></UserCard>

	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserCard from '@/components/Cards/UserCard.vue'

export default defineComponent({
	name: 'Home',
	components: {
		UserCard,
	}
});
</script>
