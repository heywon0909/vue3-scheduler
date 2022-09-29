<template>
  <div class="flex h-screen container mx-auto">
    <div class="w-1/5  pt-5 flex flex-col justify-between border-r border-blue-80">
      <div>
        <div class="pb-3 w-full flex flex-col lg:inline-block lg:items-start items-center pr-3 mb-6 border-b border-gray-300">
          <i class="fas fa-paw text-3xl fa-fw text-blue-800 ml-4"></i>
          <span class="ml-2 text-2xl hidden lg:inline-block">study</span>
        </div>
        <div class="lg:-ml-2 px-3 py-3 lg:w-full w-45 mb-3 flex flex-col items-center lg:border border-gray-300 rounded-lg">
          <img src="http://picsum.photos/100" alt="" class="lg:w-40 h-50 mt-3 rounded-sm hover:opacity-80"/>
            <button class="mt-3   h-20 px-3 flex items-center">
         
         <div class="flex flex-col items-start">
          <div class="text-sm font-bold -mt-10 lg:mt-0">박혜원</div>
          <div class="text-sm text-gray-500 hidden lg:block">hw7319@naver.com</div>
         </div>
         <i class="fas fa-ellipsis-h fa-fw text-2xl ml-auto text-sm hidden lg:inline-block"></i>
          </button>
      </div>
    <div class="flex flex-col lg:items-start items-center">
     <template v-for="route in routes" :key="route">
      <router-link :to="route.path" :class="`px-4 py-2 hover:bg-gray-300 rounded-full hover:text-blue-800 ${router.currentRoute.value.name === route.name ? 'text-blue-800':''}`" v-if="route.meta.isNav">
            <i :class="route.icon"></i>
            <span class="text-lg ml-3 hidden lg:inline-block">{{route.title}}</span>
      </router-link>
      </template>
    </div>
      <div class="flex flex-col items-center lg:mr-3">
        <button class="bg-blue-800 mt-3 text-white rounded-full lg:w-full h-12 w-12 lg:pr-3">
         <span class="hidden lg:block"> 일정 추가</span>
        <i class="fas fa-plus lg:hidden"></i>
        </button>
      </div>
    </div>  
    
  </div>
     <router-view/>
  </div>
</template>

<script>
import { onBeforeMount,ref } from 'vue';
import Calendar from '../pages/Calendar.vue';
import router from '../router';
export default {
  components: {
    Calendar
  },
    setup() {
        const routes = ref([])
        onBeforeMount(() => {
          routes.value = router.options.routes
          console.log(router.currentRoute.value);
        })
        return { routes,router
        }
    },
}
</script>

<style>

</style>