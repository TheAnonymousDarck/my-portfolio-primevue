import { ref } from "vue";
import type { Skill } from "@/interfaces/Skill";
import type { Tecnology } from "@/interfaces/Tecnology";
import { tecnlogies as tec } from './tecnologies';


const tecnologies = ref<Tecnology[]>(tec);

export const skills: Skill[] = [
    {
        tecnology: tecnologies.value[6],
        type: 'hard',
    },
    {
        tecnology: tecnologies.value[7],
        type: 'hard',
    },
    {
        tecnology: tecnologies.value[10],
        type: 'hard',
    },
    {
        tecnology: tecnologies.value[12],
        type: 'hard',
    },
    {
        tecnology: tecnologies.value[16],
        type: 'hard',
    },
    {
        tecnology: tecnologies.value[14],
        type: 'hard',
    },
    {
        name: 'Trabajo en equipo',
        icon: 'hands',
        type: 'soft',
    },
    {
        name: 'Aprendizaje contino',
        icon: 'hands',
        type: 'soft',
    },
    {
        name: 'Proactivo',
        icon: 'hands',
        type: 'soft',
    },
];
