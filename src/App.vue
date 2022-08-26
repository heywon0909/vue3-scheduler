<template>
  <div class="flex h-screen">
    <div class="w-1/4  ml-10 mt-5 flex flex-col justify-between">
      <div>
        <div class="flex flex-row">
          <i class="fas fa-paw text-3xl fa-fw text-blue-800 ml-4"></i>
          <span class="ml-2 text-2xl">study</span>
        </div>
    <div class="flex flex-col items-start">
      <div class="px-4 py-2 hover:bg-gray-300 rounded-full hover:text-blue-800">
         <i class="fas fa-calendar-alt fa-fw text-2xl"></i>
         <span class="text-lg ml-3">달력보기</span>
      </div>
       <div class="px-4 py-2 hover:bg-gray-300 rounded-full hover:text-blue-800">
          <i class="fas fa-check-circle fa-fw text-2xl"></i>
          <span class="text-lg ml-3">오늘의일정</span>
      </div>
       <div class="px-4 py-2 hover:bg-gray-300 rounded-full hover:text-blue-800">
          <i class="fas fa-signal  fa-fw text-2xl"></i>
          <span class="text-lg ml-3">공부통계</span>
      </div>
       <div class="px-4 py-2 hover:bg-gray-300 rounded-full hover:text-blue-800">
          <i class="far fa-user fa-fw text-2xl"></i>
          <span class="text-lg ml-3">프로필</span>
      </div>
      <div class="px-4 py-2 hover:bg-gray-300 rounded-full hover:text-blue-800">
          <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
          <span class="text-lg ml-3">더보기</span>
      </div>
    </div>
      <div class="mr-2">
        <button class="bg-blue-800 mt-3 text-white rounded-full w-full h-12">
         일정 추가
        </button>
      </div>
    </div>  
    <div class="mb-3 mr-3">
        <button class="bg-gray-50 mt-3 rounded-full w-full h-20 px-3 flex items-center">
         <img src="http://picsum.photos/100" alt="" class="rounded-full w-12 h-12 mt-3"/>
         <div class="ml-5 flex flex-col items-start">
          <div class="text-sm font-bold">박혜원</div>
          <div class="text-sm text-gray-500">hw7319@naver.com</div>
         </div>
         <i class="fas fa-ellipsis-h fa-fw text-2xl ml-auto text-sm "></i>
        </button>
    </div>
  </div>
  <div class="flex-1 bg-blue-400">
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>