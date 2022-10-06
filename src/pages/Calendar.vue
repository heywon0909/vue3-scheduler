<template>
  <div class="flex-1 flex relative">
       <div class="flex-1 w-full border-r border-blue-80">
        <div class="flex flex-col mt-5">
          <div class="w-full">
            <div class="text-2xl border-b border-blue-80 px-2 py-2 h-19">calendar</div>
          </div>
        </div>
         <div class="flex items-center justify-center mt-4">
          <div class="text-gray-500 mr-2" @click="prevMonth()"> prev </div>
          <div class="font-bold text-xl">{{year}}.{{month}}</div>
          <div class="text-gray-500 ml-2" @click="nextMonth()"> next </div>
         </div>
         <div class="flex items-center justify-center flex-1 border-b border-gray-80">
           <div class="flex-1 flex justify-between mr-3 ml-3 p-3">
            <div v-for="(week,index) in weekNames" class="flex ml-3" :key="index">{{week}}</div>
           </div>
         </div>
         <!-- v-for="week in 4" :key="week" -->
         <div class="flex justify-between  border-b border-blue-80 w-full" v-for="(week,index) in monthOfDay()" :key="index+`123`">
            <div class="w-full border-r border-blue-80 hover:bg-gray-50" v-for="(day,index) in week" :key="index+`44`">
              <div class="flex flex-1">
              <div :class="`flex font-bold mr-2 hover:bg-blue-50 rounded-full w-8 h-8 justify-center items-center ${day.type==='prev' || day.type==='next' ? 'text-gray-400':''}`">{{day.value}}</div>
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
            <!-- <div class="absolute mt-7 bg-white shadow w-44 ml-2" v-if="isListOpen">
              <div class="text-md" v-for="list in 20" :key="list" >
                <span class="font-bold text-sm">1.</span>
                공부
              </div>
            </div> -->
            <!-- <div class="w-full border-r border-blue-80 hover:bg-gray-50">
              <div class="text-right font-bold mr-2">2</div>
              <div class="flex flex-col">
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
                <div class="text-md">공부</div>
              </div>
            </div> -->
            <!-- <div class="w-full border-r border-blue-80">
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
            </div> -->
         </div>
       </div>
       
       
      
    
    <!-- <div class="border-b border-gray-300 w-full mt-9">
      <span class="text-2xl font-bold ml-3">P.L.A.N</span>
    </div> -->
  </div>
</template>

<script>
import { ref,onBeforeMount,computed,watchEffect } from 'vue';
export default {
  setup() {
    const isListOpen = ref(false)
    const weekNames = ref(['월요일','화요일','수요일','목요일','금요일','토요일','일요일'])
    const date = new Date();
    let year = ref(date.getFullYear()); 
    let month = ref(date.getMonth()+1);
  
    const firstDay = computed(() => {
      return new Date(year.value, month.value - 1, 1).getDay();
    }) 



    const lastDay = computed(() => { return new Date(year.value, month.value, 0).getDate() });
    const prevMonth = () => {
      console.log('클릭');
      if (month.value === 1) { month.value = 12; year.value -= 1; 
      } else { month.value = month.value - 1; }
      console.log('month', month);
    }
    const nextMonth = () => {
      console.log('클릭');
      if (month.value === 12) { month.value = 1; year.value += 1; 
      } else { month.value = month.value + 1; }
      console.log('month', month);
    }
    const getPrevMonthDay = () => {
      let prevMonth=0,prevYear=0;
      if (month.value  === 1) { prevMonth = 12; prevYear = year.value - 1; }
      else { prevMonth = month.value  - 1; }
      const prevLastDay = new Date(prevYear, prevMonth, 0).getDate();
      return prevLastDay
    }
    const countOfWeek = computed(()=>{return parseInt(((firstDay.value - 1)+lastDay.value) / 7)+ 1})

    const monthOfDay =() => {
      let day = 1;
      console.log('get', typeof getPrevMonthDay())
      console.log('first',typeof firstDay.value);
      let prevDay = getPrevMonthDay() - firstDay.value+1;
      let dayOfWeek = [];
      let dates = [];
      
      let nextDay = 1;
       
      for (let j = 0; j < countOfWeek.value; j++){
        for (let i = 0; i < weekNames.value.length; i++){
          
            if(prevDay <= getPrevMonthDay()) {
              dayOfWeek[i] = { value: prevDay, type: 'prev' };
            prevDay++;
            } else {
              if (day <= lastDay.value) {
                dayOfWeek[i] = { value: day, type: 'current' };
                day++;
              } else {
               
                console.log('i', i);
                dayOfWeek[i] = { value: nextDay, type: 'next' };
                nextDay++;
              }
             
          }
        }
        dates.push(dayOfWeek);
        dayOfWeek = [];
          
          
        }
      console.log('dates', dates);
      return dates;
    }
    
    onBeforeMount(()=>{
     
      console.log('countOfWEEK', countOfWeek);
      console.log('get', getPrevMonthDay());
      console.log('prevDay', monthOfDay());
    })

    return {
      isListOpen, weekNames, onBeforeMount, getPrevMonthDay,monthOfDay,countOfWeek,year,month,prevMonth,nextMonth
    }
  }
}
</script>

<style>

</style>