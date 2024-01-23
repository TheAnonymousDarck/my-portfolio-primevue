import { default } from '../presets/lara/toolbar/index';
<template>
    <a :href="props.route" class="section-foot">
        {{ props.text }}
    </a>
</template>
<script setup lang="ts">

const props = defineProps({
    route: {
        type: String,
        required: true,
        default: '#',
    },
    text: {
        type: String,
        required: false,
        default: 'más información',
    }
});
</script>

<style scoped>
.section-foot {
    @apply flex justify-end hover:text-indigo-400;
}
</style>