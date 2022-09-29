<template>
  <div class="flex-1 flex relative">
       <div class="flex-1 w-full border-r border-blue-80">
        <div class="flex flex-col mt-5">
          <div class="w-full">
            <div class="text-2xl border-b border-blue-80 px-2 py-2 h-19">calendar</div>
          </div>
        </div>
         <div class="flex items-center justify-center mt-4">
          <div class="text-gray-500 mr-2"> prev </div>
          <div class="font-bold text-xl">2022.09</div>
          <div class="text-gray-500 ml-2"> next </div>
         </div>
         <div class="flex items-center justify-center flex-1 border-b border-gray-80">
           <div class="flex-1 flex justify-between mr-3 ml-3 p-3">
            <div class="">MON</div>
            <div class="">TUE</div>
            <div class="">WED</div>
            <div class="">THU</div>
            <div class="">FRI</div>
            <div class="">SAT</div>
            <div class="">SUN</div>
           </div>
         </div>
         <!-- v-for="week in 4" :key="week" -->
         <div class="flex justify-between  border-b border-blue-80 w-full" >
            <div class="w-full border-r border-blue-80 hover:bg-gray-50">
              <div class="flex flex-1">
              <div class="flex font-bold mr-2 hover:bg-blue-50 rounded-full w-8 h-8 justify-center items-center">1</div>
              </div>
              <div class="flex flex-col w-full" @mouseover="isListOpen = true" @mouseout="isListOpen = false" >
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
              </div>
              <div  class="text-right font-bold mr-2 lg:hidden block">
                <span>+4</span>
              </div>
              <div class="text-right font-bold mr-2 lg:block hidden">
                <span><i class="fas fa-ellipsis-h fa-fw text-xs"></i></span>
                
              </div>
            </div>
            <div class="absolute mt-7 bg-white shadow w-44 ml-2" v-if="isListOpen">
              <div class="text-md" v-for="list in 20" :key="list" >
                <span class="font-bold text-sm">1.</span>
                공부
              </div>
            </div>
            <div class="w-full border-r border-blue-80 hover:bg-gray-50">
              <div class="text-right font-bold mr-2">2</div>
              <div class="flex flex-col">
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
              </div>
            </div>
            <div class="w-full border-r border-blue-80">
              <div class="text-right font-bold mr-2">3</div>
              <div class="flex flex-col">
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
              </div>
            </div>
            <div class="w-full border-r border-blue-80">
              <div class="text-right font-bold mr-2">4</div>
            </div>
            <div class="w-full border-r border-blue-80">
              <div class="text-right font-bold mr-2">5</div>
              <div class="flex flex-col">
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
              </div>
            </div>
            <div class="w-full border-r border-blue-80">
              <div class="text-right font-bold mr-2">6</div>
              <div class="flex flex-col">
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
              </div>
            </div>
            <div class="w-full border-r border-blue-80">
              <div class="text-right font-bold mr-2">7</div>
              <div class="flex flex-col">
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
              </div>
            </div>
         </div>
       </div>
       
       
      
    
    <!-- <div class="border-b border-gray-300 w-full mt-9">
      <span class="text-2xl font-bold ml-3">P.L.A.N</span>
    </div> -->
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const isListOpen = ref(false)

    return {
      isListOpen
    }
  }
}
</script>

<style>

</style>