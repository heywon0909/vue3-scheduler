<template>
  <div class="hidden lg:w-1/3 lg:block px-2 py-2">
        <div class="rounded-xl flex flex-col w-full">
        <div class="mt-5 px-4 py-2 bg-gray-100 flex items-center justify-between border-b border-gray-300">
          <span class="font-bold text-lg">나의 공부 순위(지난달)</span>
          <i class="fas fa-search"></i>
        </div>
        <div class="bg-gray-100 px-4 py-2 hover:bg-gray-200" v-for="rank in 7" :key="rank">
          <div class="flex flex-1 justify-between items-center">
            <div class="text-xl fond-bold bg-blue-400 w-12 h-12 rounded-full py-3 px-2 text-white">1위</div>
            <div class= "text-xl ml-3">javascript</div>
            <div class="text-xl text-gray-500">80%</div>
          </div>
        </div>
        <div class="bg-gray-100 px-4 py-2  hover:bg-gray-200 flex justify-between">
          <div class="font-bold">더보기</div>
          <i class="fas fa-ellipsis-h"></i>
        </div>
        </div>
        
        <!-- <div class="flex flex-col w-full mt-10">
          <div class="font-bold text-xl px-4 border-b border-gray-400">오늘의 완료된 study</div>
          <div class="px-4 flex items-center" v-for="mission in 7" :key="mission">
            <i class="fas fa-check-circle text-2xl text-green-600 px-2 py-2"></i>
                <span class="px-2 font-bold">자바스크립트 공부하기</span>
                <div class="text-gray-500 ml-auto">1h</div>
          </div>
           <div class="px-4 py-2  hover:bg-gray-200 flex justify-between cursor-pointer">
          <div class="font-bold cursor-pointer">
            더보기
          </div>
            <i class="fas fa-ellipsis-h cursor-pointer"></i>
           </div>
        </div> -->

        
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>