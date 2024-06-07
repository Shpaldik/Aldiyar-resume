<template>
  <div>
    <Resume /> 
    <router-view></router-view>
  </div>
</template>

<script>
import Resume from './pages/Resume.vue';

export default {
  components: {
    Resume
  }
};
</script>
