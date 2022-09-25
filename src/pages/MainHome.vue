<template>
  <div class="flex-1">
    <div class="flex h-screen">
      <div class="flex-1 border-r border-gray-300">
       <MainTodayPlan/>
      </div>
       <StatisticNav/>
    </div>
    <!-- <div class="border-b border-gray-300 w-full mt-9">
      <span class="text-2xl font-bold ml-3">P.L.A.N</span>
    </div> -->
  </div>
</template>

<script>
import MainTodayPlan from '../components/MainTodayPlan.vue';
import StatisticNav from '../components/StatisticNav.vue';
export default {
    components: {
        MainTodayPlan,
        StatisticNav
    }
}
</script>

<style>

</style>