import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import { PrimeVue, Lara } from '@/config/PrimeConfig'
import { Button, Badge, Ripple, StyleClass, ToastService } from '@/modules/PrimeComponents'
import { FontAwesomeIcon, icons } from '@/modules/FaIcons'
import { SectionFoot } from '@/commons'

icons

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(ToastService);

pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});

// eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
app.component('Button', Button);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Badge', Badge);
app.component('SectionFoot', SectionFoot);
app.directive('ripple', Ripple);
app.directive('styleClass', StyleClass);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')