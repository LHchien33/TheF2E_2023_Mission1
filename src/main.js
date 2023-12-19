import './assets/all.scss';
// eslint-disable-next-line no-unused-vars
import { Offcanvas, Modal } from 'bootstrap';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.mount('#app');
