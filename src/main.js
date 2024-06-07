// main.js
import './assets/main.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import Resume from './pages/Resume.vue';
import ADProject from './pages/ADProject.vue';
import MakeResume from './pages/MakeResume.vue';
import DinaBlog from './pages/DinaBlog.vue';

const app = createApp(App);
const routes = [
  { path: '/', name: 'Resume', component: Resume },
  { path: '/ADProject', name: 'ADProject', component: ADProject },
  { path: '/MakeResume', name: 'MakeResume', component: MakeResume },
  { path: '/DinaBlog', name: 'DinaBlog', component: DinaBlog },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(router);
app.mount('#app');
