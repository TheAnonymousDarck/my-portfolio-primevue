<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Skill } from '@/interfaces/Skill';
import { skills as arraySkills } from '@/assets/data/skills';
import SkillTecCard from './SkillTecCard.vue';
import { SectionFoot } from '@/commons';

const skills = ref<Skill[]>(arraySkills);
const mainSkills = computed(() => skills.value.filter(skill => skill.tecnology?.main === true));
</script>

<template>
    <section class=" content-section">
        <h1>Mi Stack</h1>
        <div>
            <div class="container-stack">
                <div class="container-cards-stack">
                    <div v-for="(skill, index) in mainSkills" :key="index">

                        <SkillTecCard :skill=skill />

                    </div>
                </div>
            </div>

            <SectionFoot route="#" />
            <!-- route="/skills" -->
        </div>
    </section>
</template>

<style scoped>
.container-stack {
    @apply flex flex-col flex-wrap py-4;
}

.container-cards-stack {
    @apply flex flex-wrap justify-center gap-3 pt-4;
}
</style>
