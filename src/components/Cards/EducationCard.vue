<template>
    <div class="timeline-card" :class="{'lg:flex-row-reverse': left}">
        <div class="date-card">
            <div :class="{'lg:flex-grow': !left}"></div>
            <div class="date">{{ education.date }}</div>
            <div class="hidden" :class="{'lg:flex-grow': left}"></div>
        </div>
        <div class="circle" :class="circleColorClass"></div>
        <div class="box">
            <div class="header" :class="backgroundColorClass">
                <div class="title">{{ education.title }}</div>
            </div>
            <div class="content">
                <p v-for="(paragraph, index) in education.content" :key="index">{{ paragraph }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Education } from '@/models'

export default defineComponent({
    name: "EducationCard",
    props: {
        education: {
            type: Object as PropType<Education>,
            required: true
        },
        left: {
            type: Boolean,
            required: true
        }
    },
    computed:{
        backgroundColorClass: function() {
            switch (this.education.color) {
                case "green":
                    return "bg-green-500";

                case "yellow":
                    return "bg-yellow-500";

                case "blue":
                    return "bg-dodger";

                default:
                    return "bg-dodger";
            }
        },
        circleColorClass: function() {
            switch (this.education.color) {
                case "green":
                    return "border-green-500";

                case "yellow":
                    return "border-yellow-500";

                case "blue":
                    return "border-dodger";

                default:
                    return "border-dodger";
            }
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
        @apply z-20 flex items-center order-1 bg-earie border-3 shadow-lg w-6 h-6 xl:w-8 xl:h-8 rounded-full;
    }
	.box {
        @apply order-2 md:order-1 w-2/3 lg:w-5/12 rounded-lg border-2 border-white;
        .header {
            @apply rounded-t-md shadow-lg text-xs lg:text-sm xl:text-lg py-1 md:py-2 px-3 md:px-5 xl:px-6 font-sans items-center;
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
