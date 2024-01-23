<template>
    <div class="">
        <Menubar :model="items" class="flex justify-center">
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <!-- <font-awesome-icon :icon="item.icon" /> -->
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <button v-else-if="item.label === 'theme'" @click="darkMode.changeDarkMode">
                    <font-awesome-icon
                        :icon="darkMode.toggleDarkMode.value ? 'fa-solid fa-moon text-primary-500' : 'fa-solid fa-sun'"
                        class="text-indigo-500" />
                    <!-- <i :class="darkMode.toggleDarkMode.value ? 'pi pi-moon text-primary-500' : 'pi pi-sun'"></i> -->
                </button>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <!-- <font-awesome-icon :icon="item.icon" /> -->
                    <span class="ml-2">{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="ml-2 pi pi-fw pi-angle-down" />
                </a>
            </template>
        </Menubar>

    </div>
</template>

<script setup lang="ts">
// import router from "@/router";
import { ref } from 'vue';

import Menubar from "primevue/menubar"
import type { MenuItem } from "primevue/menuitem";

import { useDarkMode } from "@/composables/useDarkMode";

const darkMode = useDarkMode();

const items = ref<MenuItem[]>([
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
    },
    {
        label: 'About Me',
        icon: 'pi pi-info',
        // route: '/about-section'
        // route: '#about'
    },
    {
        label: 'Skills',
        icon: 'pi pi-wrench',
        // route: '/skills-section'
    },
    {
        label: 'Projects',
        icon: 'pi pi-briefcase',
        // route: '/projects-section'
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        // route: '/contact-section',
        // command: () => router.push('')
    },
    {
        label: 'Lang',
        icon: 'pi pi-language',
    },
    {
        label: 'theme',
        // icon: darkMode.toggleDarkMode.value ? 'fa-solid fa-moon text-primary-500' : 'fa-solid fa-sun',
        // icon: toValue(darkMode.changeIcon),
        class: 'text-center text-xl p-1'
    },
]);
</script>
<style scoped></style>