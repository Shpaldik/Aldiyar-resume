<template>
  <div>
    <Header />
    <section class="mt-10 md:mt-40 mb-20 md:text-center">
      <div class="max-w-screen-lg mx-auto">
        <h1 class="text-3xl text-center font-bold">ShResume</h1>
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-start mt-10">
          <video class="rounded-xl mt-10 md:mt-0 w-full md:w-1/2" controls>
            <source src="/public/MakeResume.mp4" type="video/mp4">
          </video>
          <div class="ml-0 md:ml-20 mt-10 mb:mt-0 md:w-1/2">
            <h3 class="text-xl font-bold text-center">Описание:</h3>
            <p class="mt-5 text-left md:text-center mb-5 md:mb-0">ShResume - это простая онлайн-платформа, которая поможет вам создать простое резюме и скачать его. Используется роутер, двустороннее связывание, конвертация в txt файл и т.д.</p>
            <p class="mt-5 text-left md:text-center">Использованный стек: Vue.js, Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
    <Footer class="mt-20" />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>
