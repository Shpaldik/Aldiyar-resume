<template>
  <header class="p-4 md:p-7 fixed top-0 left-0 w-full bg-blue z-10">
    <div class="flex justify-between items-center mx-4 middle:mx-0 md:mx-20">
      <div class="flex items-center">
        <router-link to="/">
          <img src="/public/profile.svg" alt="" width="30">
        </router-link>
        <router-link to="/" class="text-3xl text-white ml-2 md:ml-3">Resume</router-link>
      </div>
      <div class="middle:hidden md:flex items-center gap-10">
        <router-link to="/" @click.native="scrollToSection('info-section')" class="hover:text-green duration-300">Обо мне</router-link>
        <router-link to="/" @click.native="scrollToSection('projects-section')" class="hover:text-green duration-300">Проекты</router-link>
        <router-link to="/" @click.native="scrollToSection('history-section')" class="hover:text-green duration-300">Опыт</router-link>
      </div>
      <div class="">
        <a href="https://t.me/shpaldik">
          <button class="bg-green text-white py-2 px-4 rounded-xl font-bold smaller:text-sm md:w-auto">Написать мне</button>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>
