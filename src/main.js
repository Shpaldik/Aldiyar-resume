import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js'; // Указываем путь к модулю router относительно текущего расположения файла

createApp(App).use(router).mount('#app');

z