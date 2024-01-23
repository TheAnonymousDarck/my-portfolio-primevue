<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import type { ContactForm } from '@/interfaces/ContactForm';

const toast = useToast();

const contactFormData = ref<ContactForm>({
    name: '',
    subject: '',
    email: '',
    description: ''
});

const onSubmit = async (): Promise<void> => {
    console.log("Formulario enviado:", contactFormData.value);

    // Enviar un toast
    toast.add({
        severity: 'success',
        summary: '¡Formulario Enviado!',
        detail: '¡Gracias por ponerte en contacto conmigo!',
        life: 3000 // Duración del toast en milisegundos
    });
}

console.log(contactFormData.value);

</script>

<template>
    <section class="content-section-form">
        <h1> Contact </h1>

        <form @submit.prevent="onSubmit" class="mt-6">
            <div class="flex flex-row gap-3 md:w-1/2">
                <div class="input-container">
                    <label for="name">Name</label>
                    <InputText id="name" v-model="contactFormData.name" aria-describedby="name-help" />
                </div>

                <div class="input-container">
                    <label for="subject">Subject</label>
                    <InputText id="subject" v-model="contactFormData.subject" aria-describedby="subject-help" />
                </div>

                <div class="input-container">
                    <label for="email">Email</label>
                    <InputText id="email" type="email" v-model="contactFormData.email" aria-describedby="email-help"
                        maxlength="45" required />
                </div>
            </div>

            <div class="flex flex-col mt-6">
                <div class="input-container">
                    <label for="description">Description</label>
                    <Textarea id="description" v-model="contactFormData.description" aria-describedby="text-error" rows="12"
                        cols="30" maxlength="650" required />
                </div>
            </div>
            <Button type="submit" label="Submit" class="w-full mt-6" />
        </form>

        <Toast />
    </section>
</template>

<style scoped>
.content-section-form {
    @apply flex flex-col items-center justify-center dark:text-white;
}

.input-container {
    @apply flex flex-col gap-1;
}
</style>
