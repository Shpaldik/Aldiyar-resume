<template>
    <div>
        <project2 />
        <router-view></router-view>
    </div>
</template>

<script>
import project2 from '../components/projects/project2.vue'
export default {
    components: {
        project2
    }
}
</script>