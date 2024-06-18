<template>
  <section>
    <div>
      <h1 class="text-3xl text-center font-bold">Проекты:</h1>
      <div class="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mt-10 relative overflow-hidden">
        <div class="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button @click="scrollProjects(-1)" class="text-green-500 hover:text-green-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div class="flex gap-5 md:gap-10">
          <div v-for="(project, index) in visibleProjects" :key="index" class="project-container bg-gray border border-gray-300 p-5 rounded-xl hover:border-green-500 duration-300 transform hover:-translate-y-1 w-full md:w-auto">
            <router-link :to="`/${project.route}`">
              <p class="text-center text-2xl md:text-3xl">{{ project.title }}</p>
              <img class="rounded-xl mt-5 md:mt-9 mx-auto" :src="project.imageSrc" :alt="project.title" width="300" height="200">
            </router-link>
          </div>
        </div>
        <div class="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button @click="scrollProjects(1)" class="text-green-500 hover:text-green-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5l7 7-7 7" />
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
        { title: 'ADProject', imageSrc: '/public/ADP.png', route: 'ADProject' },
        { title: 'Make-Resume', imageSrc: '/public/Cards.png', route: 'MakeResume' },
        { title: 'Dina-blog', imageSrc: '/public/DinaBlog.jpg', route: 'DinaBlog' },
        { title: 'Weather-Site', imageSrc: '/public/Weather.png', route: 'WeatherSite' }
        // Add more projects as needed
      ],
      currentIndex: 0,
      visibleProjects: []
    };
  },
  mounted() {
    this.updateVisibleProjects();
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
      if (direction === -1) {
        this.currentIndex = Math.max(this.currentIndex - 1, 0);
      } else if (direction === 1) {
        this.currentIndex = Math.min(this.currentIndex + 1, Math.max(this.projects.length - 3, 0));
      }
      this.updateVisibleProjects();
    }
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
