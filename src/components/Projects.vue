<template>
  <section>
    <div>
      <h1 class="text-3xl text-center font-bold">Проекты:</h1>
      <div class="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mt-10 relative overflow-hidden">
        <!-- Левая кнопка для ПК -->
        <div class="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <button @click="scrollProjects(-1)" class="text-green-500 hover:text-green-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <!-- Проекты -->
        <div class="flex flex-col md:flex-row gap-5 md:gap-10 transition-transform ease-in-out duration-500"
             :style="{ transform: `translateX(${translateX}px)` }"
             ref="projectContainer">
          <div v-for="(project, index) in visibleProjects" :key="index" class="project-container bg-gray border border-gray-300 p-5 rounded-xl hover:border-green duration-300 transform hover:-translate-y-1 w-full md:w-auto mt-3">
            <a :href="project.url" target="_blank" rel="noopener noreferrer">
              <p class="text-center text-2xl md:text-3xl">{{ project.title }}</p>
              <img class="rounded-xl mt-5 md:mt-9 mx-auto" :src="project.imageSrc" :alt="project.title" width="300" height="200">
            </a>
          </div>
        </div>

        <div class="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <button @click="scrollProjects(1)" class="text-green-500 hover:text-green-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        { title: 'ADProject', imageSrc: '/ADP.png', route: 'ADProject' },
        { title: 'Make-Resume', imageSrc: '/Cards.png', route: 'MakeResume' },
        { title: 'Dina-blog', imageSrc: '/DinaBlog.jpg', route: 'DinaBlog' },
        { title: 'Weather-Site', imageSrc: '/Weather.png', url: 'https://new-weather-site.vercel.app/' }
      ],
      currentIndex: 0,
      visibleProjects: [],
      translateX: 0,
      containerWidth: 0
    };
  },
  mounted() {
    this.updateVisibleProjects();
    this.containerWidth = this.$refs.projectContainer.offsetWidth;
  },
  methods: {
    updateVisibleProjects() {
      this.visibleProjects = [];
      for (let i = this.currentIndex; i < this.currentIndex + 3; i++) {
        if (i < this.projects.length) {
          this.visibleProjects.push(this.projects[i]);
        }
      }
    },
    scrollProjects(direction) {
      const numVisibleProjects = 3;
      const projectWidth = this.containerWidth + 10; // Adjust 10 as per your gap in CSS

      if (direction === -1 && this.currentIndex > 0) {
        this.currentIndex--;
      } else if (direction === 1 && this.currentIndex < this.projects.length - numVisibleProjects) {
        this.currentIndex++;
      }

      this.translateX = -this.currentIndex * projectWidth;
      this.updateVisibleProjects();
    }
  }
};
</script>

<style scoped>
.project-container {
  transition: transform 0.5s ease-in-out;
}
</style>
