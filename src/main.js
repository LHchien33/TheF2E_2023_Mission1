import './assets/all.scss';
// eslint-disable-next-line no-unused-vars
import { Offcanvas } from 'bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
