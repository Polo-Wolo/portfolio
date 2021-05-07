<template>
    <div class="timeline-card" :class="{'lg:flex-row-reverse': left}">
        <div class="date-card">
            <div :class="{'lg:flex-grow': !left}"></div>
            <div class="date">{{ workexperience.date }}</div>
            <div class="hidden" ></div>
        </div>
        <div class="circle"></div>
        <div class="box">
            <div class="header">
                <div class="title"><a :href="workexperience.link" target="_blank"><u>{{ workexperience.linked_title }}</u></a>{{ workexperience.title_type }}</div>
            </div>
            <div class="content">
                <p v-for="(paragraph, index) in workexperience.content" :key="index">{{ paragraph }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { WorkExperience } from '@/models'

export default defineComponent({
    name: "WorkExperienceCard",
    props: {
        workexperience: {
            type: Object as PropType<WorkExperience>,
            required: true
        },
        left: {
            type: Boolean,
            required: true
        }
    }
})
</script>

<style lang="scss" scoped>
.timeline-card {
	@apply mb-8 flex justify-between space-y-4 w-full;
    .date-card {
        @apply order-2 md:order-1 lg:w-5/12 w-1/7 flex items-start;
        .date {
            @apply text-white py-5 text-xs lg:text-base font-medium;
        }
    }
    .circle {
        @apply border-dodger z-20 flex items-center order-1 bg-earie border-3 shadow-lg w-6 h-6 xl:w-8 xl:h-8 rounded-full;
    }
	.box {
        @apply order-2 md:order-1 w-2/3 lg:w-5/12 rounded-lg border-2 border-white;
        .header {
            @apply bg-dodger rounded-t-md shadow-lg text-xs lg:text-sm xl:text-lg py-1 md:py-2 px-3 md:px-5 xl:px-6 font-sans items-center;
            .title {
                @apply font-sans text-left text-white font-medium;
            }
        }
        .content {
            @apply bg-white px-3 md:px-3 py-2 md:py-2 xl:px-4 xl:py-3 font-sans text-xs xl:text-base text-justify md:leading-relaxed tracking-wide text-earie;
        }
	}
}
</style>
