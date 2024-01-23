<script setup lang="ts">
import type { Skill } from '@/interfaces/Skill';

defineProps({
    skill: {
        type: Object as () => Skill,
        required: true,
    },
});
</script>
 
<template>
    <div class="card-personal-interest">
        <img class="w-12 h-16 py-2" :src="skill.tecnology!.src" :alt="`${skill.tecnology!.name} icon`" />
    </div>
    <span class="flex justify-center text-center">{{ skill.tecnology!.name }}</span>
</template>

<style scoped>
.card-personal-interest {
    @apply w-28 h-28 text-white bg-indigo-500 border-spacing-3 flex flex-col items-center justify-center rounded-xl transition duration-150 ease-in-out hover:bg-indigo-600;
}
</style>