<script setup lang="ts">
import type { Skill } from '../interfaces/Skill';

// const props = defineProps({
defineProps({
    skill: {
        type: Object as () => Skill,
        required: true,
    },
});
</script>

<template>
    <div class="flex flex-col gap-3 justify-center h-max">
        <a class="w-28 h-28 xl: w-32 xl:h-32 2xl:w-36 2xl:h-36" :href="skill.docLink" target="_blank">
            <img class="w-10 h-10" :src="skill.src" :alt="`${skill.name} icon`" />
        </a>
        <span class="text-dark-blue text-center font-medium text-2xl select-none">{{ skill.name }}</span>
    </div>
</template>

<style scoped>
/* .skill {
    flex flex-col gap-3 justify-center h-max;
} */
/* 
.skill-icon-box {
    /* Reponsivity */
/* w-28 h-28 xl: w-32 xl:h-32 2xl:w-36 2xl:h-36;
} */

/* .skill-icon {
    w-full h-full;
} */

/* .skill-name {
    text-dark-blue text-center font-medium text-2xl select-none;
} */
</style>