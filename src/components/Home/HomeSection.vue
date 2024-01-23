<script async setup lang="ts">
import Image from 'primevue/image';
import ProgressSpinner from 'primevue/progressspinner';
import { useGithubUserStore } from '../../stores/githubUser';
const userStore = useGithubUserStore();
</script>

<template>
    <section class="section-content">
        <h1>
            David Enrique Resendiz Nuñez
        </h1>
        <p class="">
            Developer Jr
        </p>
        <Suspense>
            <Image :src="userStore.githubUser.avatar_url ?? '/img/avatar.svg'" alt=" Image" class="mt-2"
                image-class="rounded-full" width="350" />
            <template #fallback>
                <ProgressSpinner aria-label="Loading" />
            </template>
        </Suspense>

    </section>
</template>
<style scoped>
.section-content {
    @apply flex flex-col justify-center items-center text-center dark:text-white;
}
</style>