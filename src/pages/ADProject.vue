<template>
  <div>
    <Header />
    <section class="mt-10 md:mt-40">
      <div class="max-w-screen-lg mx-auto">
        <h1 class="text-3xl text-center font-bold">ADProject</h1>
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-start mt-10">
          <video class="rounded-xl mt-10 md:mt-0 w-full md:w-1/2" controls>
            <source src="/public/ADP.mp4" type="video/mp4">
          </video>
          <div class="ml-0 md:ml-20 mt-10 md:mt-0 md:w-1/2">
            <h3 class="text-xl font-bold text-center">Описание:</h3>
            <p class="mt-5 text-left md:text-center">
              ADProject - это инновационная веб-платформа, разработанная с использованием современных технологий для создания удобного и функционального форума. Этот проект требует полного стека разработки, включая Nuxt.js для фронтенда и Node.js для бэкенда.
            </p>
            <p class="mt-5 text-left md:text-center">
              В проекте реализованы такие функции, как аккордеоны, роутинг, создание тем и мобильная адаптация. Моя цель продолжить развиваться в области бэкенд разработки, используя современные технологии и подходы.
            </p>
            <p class="mt-10 font-bold text-left md:text-center">
              Использованный стек: Nuxt.js, Tailwind CSS, SCSS
            </p>
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

  