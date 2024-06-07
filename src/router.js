// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Resume from './pages/Resume.vue'; // Добавьте этот импорт
import ADProject from './pages/ADProject.vue';
import MakeResume from './pages/MakeResume.vue';
import DinaBlog from './pages/DinaBlog.vue';

const routes = [
  { path: '/', name: 'Resume', component: Resume },
  { path: '/ADProject', name: 'ADProject', component: ADProject },
  { path: '/MakeResume', name: 'MakeResume', component: MakeResume },
  { path: '/DinaBlog', name: 'DinaBlog', component: DinaBlog }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

