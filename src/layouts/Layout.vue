<template>
  <component :is="layout"></component>
</template>

<script>
import DefaultLayout from './DefaultLayout.vue';
import LayoutWithoutNav from './LayoutWithoutNav.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
export default {
    components: {
        DefaultLayout, LayoutWithoutNav
    },
    setup() {
        const router = useRoute() 
        const layout = computed(()=> router.meta.layout || 'DefaultLayout')

        return {
            layout,
        }
    }
}
</script>

<style>

</style>