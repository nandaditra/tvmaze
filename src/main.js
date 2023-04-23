import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './index.css'
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });

// Make BootstrapVue available throughout your project
// 5. Create and mount the root instance.
// Make sure to _use_ the router instance to make the
// whole app router-aware.

export const eventBus = createApp(App)

createApp(App).use(router).mount('#app')
