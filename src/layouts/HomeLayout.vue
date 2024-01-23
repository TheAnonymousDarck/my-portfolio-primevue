<template>
    <HeaderApp />
    <main class="mx-auto py-7 max-w-7xl sm:px-6 lg:px-8">
        <RouterView />
    </main>
    <Toast />
    <FooterApp />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderApp from '@/components/Base/HeaderApp.vue';
import FooterApp from '@/components/Base/FooterApp.vue';
import Toast from 'primevue/toast';
</script>
<style scoped></style>