<template>
    <Header />
    <section class="mt-10 md:mt-40">
      <div class="max-w-screen-lg mx-auto">
        <h1 class="text-3xl text-center font-bold">DinaBlog</h1>
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-start mt-10">
          <video class="rounded-xl mt-10 md:mt-0 w-full md:w-1/2" controls>
            <source src="/public/DinaBlog.mp4" type="video/mp4">
          </video>
          <div class="ml-0 md:ml-20 mt-10 md:mt-0 md:w-1/2">
            <h3 class="text-xl font-bold text-center">Описание:</h3>
            <p class="mt-5 text-left md:text-center">В этом проекте используется простая верстка на основе HTML, CSS и JavaScript для обеспечения простого прокручивания страницы и создания пользовательского интерфейса. Для стилизации интерфейса применяется фреймворк Tailwind CSS.
            </p>
            <p class="mt-10 font-bold text-left md:text-center">Использованный стек: JavaScript, Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
    <Footer class="mt-20"/>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  
  </script>
  