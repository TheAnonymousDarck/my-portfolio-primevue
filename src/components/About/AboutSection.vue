<script setup lang="ts">
import { interests as arrayInterests } from '@/assets/data/interests';
import { ref } from 'vue';
import type { Interest } from '@/interfaces/Interest';
const interests = ref<Interest[]>(arrayInterests);
</script>

<template>
    <section class="dark:text-white">
        <div class="content-section">
            <h1>About me</h1>

            <div class="container-about-me">
                <p>
                    Hola, soy Enrique Resendiz, un entusiasta de la tecnología que disfruta de la música metal y se sumerge
                    en
                    el mundo de los videojuegos. <br>
                    Tengo experiencia en tecnologías backend como Laravel o firebase y frontend
                    como
                    Tailwind Css, Bootstrap o Vue. <br>
                    Busco constantemente desafíos que me permitan poner a prueba mi conocimiento,
                    así como adquirir conocimiento nuevo para crear soluciones innovadoras.
                </p>
            </div>

            <div class="container-personal-interest">
                <h1>Intereses Personales</h1>
                <div class="container-cards-personal-interest">
                    <div class="card-personal-interest" v-for="(interest, index) in interests" :key="index">
                        <font-awesome-icon :icon="interest.icon" />
                        <span>{{ interest.name }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- <SectionFoot /> -->
    </section>
</template>

<style scoped>
/* TODO: posible cambio para los textos */
.container-about-me {
    @apply mb-5;
}

.container-about-me p {
    @apply leading-relaxed text-pretty m-2;
}

.container-personal-interest {
    @apply flex flex-col flex-wrap py-4;
}

.container-cards-personal-interest {
    @apply flex flex-wrap justify-center gap-3 pt-4;
}

.card-personal-interest {
    @apply w-28 h-28 text-white bg-indigo-500 border-spacing-3 flex flex-col items-center justify-center rounded-xl transition duration-150 ease-in-out hover:bg-indigo-600;
}
</style>