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
      <div class="px-4 py-2 hover:bg-gray-300 rounded-full hover:text-blue-800">
         <i class="fas fa-calendar-alt fa-fw text-2xl"></i>
         <span class="text-lg ml-3 hidden lg:inline-block">달력보기</span>
      </div>
       <div class="px-4 py-2 hover:bg-gray-300 rounded-full hover:text-blue-800">
          <i class="fas fa-check-circle fa-fw text-2xl"></i>
          <span class="text-lg ml-3 hidden lg:inline-block">오늘의일정</span>
      </div>
       <div class="px-4 py-2 hover:bg-gray-300 rounded-full hover:text-blue-800">
          <i class="fas fa-signal  fa-fw text-2xl"></i>
          <span class="text-lg ml-3 hidden lg:inline-block">공부통계</span>
      </div>
       <div class="px-4 py-2 hover:bg-gray-300 rounded-full hover:text-blue-800">
          <i class="far fa-user fa-fw text-2xl"></i>
          <span class="text-lg ml-3 hidden lg:inline-block">프로필</span>
      </div>
      <div class="px-4 py-2 hover:bg-gray-300 rounded-full hover:text-blue-800">
          <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
          <span class="text-lg ml-3 hidden lg:inline-block">더보기</span>
      </div>
    </div>
      <div class="flex flex-col items-center lg:mr-3">
        <button class="bg-blue-800 mt-3 text-white rounded-full lg:w-full h-12 w-12 lg:pr-3">
         <span class="hidden lg:block"> 일정 추가</span>
        <i class="fas fa-plus lg:hidden"></i>
        </button>
      </div>
    </div>  
    
  </div>
  <div class="flex-1">
    <div class="flex h-screen">
      <div class="flex-1 border-r border-gray-300 overflow-y-auto">
      <div class="flex flex-col">
       <div class="border-b border-gray-300 mt-10 font-bold text-lg px-2">
        P.L.A.N
        </div>
        <div class="flex px-2 py-3 border-b-8 mb-10">
          <img src="https://picsum.photos/200" alt="" class="w-10 h-10 rounded-full hover:opacity-80"/>
          <div class="flex flex-1 flex-col">
            <textarea class="focus:outline-none resize-none w-full text-lg text-gray-300 font-bold px-2" placeholder="오늘의 study 일정은?"></textarea>
            <div class="text-right">
              <button class="bg-blue-800 text-white rounded-full text-sm px-4 py-2 hover:opacity-80">추가하기</button>
            </div>
          </div>
        </div>
        </div>
        <div class="flex flex-1 flex-col -mt-5">
          <div class="flex ml-1 px-2 border-b border-gray-100 mb-6 py-3" v-for="todo in 10" :key="todo">
          <input type="checkbox"/>
          <div class="ml-3 font-bold text-lg">
            <span>1</span>
            <span>.</span>
          </div>
          <div class="text-blue-500 ml-3 font-bold">react 공부하기</div>
          </div>
          
        </div>
      </div>
       <StatisticNav/>
    </div>
    <!-- <div class="border-b border-gray-300 w-full mt-9">
      <span class="text-2xl font-bold ml-3">P.L.A.N</span>
    </div> -->
  </div>
  </div>
</template>

<script>
import StatisticNav from './components/StatisticNav.vue'

export default {
  components: {
    StatisticNav
}
}
</script>

<style>

</style>