<!-- Projects.vue -->
<template>
  <section>
    <div>
      <h1 class="text-3xl text-center font-bold">Проекты:</h1>
      <div class="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-10 mt-10">
        <router-link to="/ADProject">
          <div class="project-container bg-gray border border-border p-5 rounded-xl hover:border-green duration-300 transform hover:-translate-y-1 w-full md:w-auto">
            <p class="text-center text-2xl md:text-3xl">ADProject</p>
            <img class="rounded-xl mt-5 md:mt-9 mx-auto" src="/public/ADP.png" alt="" width="300" height="200">
          </div>
        </router-link>
        <router-link to="/MakeResume">
          <div class="project-container bg-gray border border-border p-5 rounded-xl hover:border-green duration-300 transform hover:-translate-y-1 w-full md:w-auto">
            <p class="text-center text-2xl md:text-3xl">Make-Resume</p>
            <img class="rounded-xl mt-5 md:mt-9 mx-auto" src="/public/Cards.png" alt="" width="300" height="200">
          </div>
        </router-link>
        <router-link to="/DinaBlog">
          <div class="project-container bg-gray border border-border p-5 rounded-xl hover:border-green duration-300 transform hover:-translate-y-1 w-full md:w-auto">
            <p class="text-center text-2xl md:text-3xl">Dina-blog</p>
            <img class="rounded-xl mt-5 md:mt-9 mx-auto" src="/public/DinaBlog.jpg" alt="" width="330" height="200">
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects'
};
</script>
