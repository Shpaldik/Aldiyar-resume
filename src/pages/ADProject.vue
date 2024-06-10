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
            <p class="mt-5 text-left md:text-center">ADProject - это мой новый будущий стартап проект про веб-платформу, которая ставит своей целью объединить всех, кто стремится поступить в учебные заведения или начать новую жизнь в Соединенных Штатах Америки! <br> Этот форум буджет предоставлять уникальную возможность обсудить все аспекты поступления, адаптации и жизни в США. <br> Именно этому проекту нужен фуллстек разработка. Для этого выбрал Nuxt/Node.js</p>
            <p class="mt-10 font-bold text-left md:text-center">Использованный стек: Nuxt.js, Tailwind, SCSS</p>
          </div>
        </div>
      </div>
    </section>
    <Footer class="mt-20"/>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

  