// main.js
import './assets/main.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import Resume from './pages/Resume.vue';
import ADProject from './pages/ADProject.vue';

const app = createApp(App);
const routes = [
  { path: '/', name: 'Resume', component: Resume },
  { path: '/ADProject', name: 'ADProject', component: ADProject },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(router);
app.mount('#app');
