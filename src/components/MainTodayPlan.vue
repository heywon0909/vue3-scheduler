<template>
 <div>
    <div class="flex flex-col">
          <div class="border-b border-gray-300 mt-10 font-bold text-lg px-2">
            P.L.A.N 
            <button class="bg-blue-800  px-3  rounded-full text-white text-sm" @click="onLogout()">logout</button>
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
          <div class="flex ml-1 px-2 border-b border-gray-100 mb-6 py-3 justify-between" v-for="todo in 10" :key="todo">
          <!-- <input type="checkbox"/> -->
          <div class="ml-3 font-bold text-lg">
            <span>1</span>
            <span>.</span>
            <span class="text-blue-500 ml-3 font-bold">react 공부하기</span>
          </div>
          
          <div>
            <button class="bg-green-400 rounded-md text-white px-3 py-1 text-sm">완료</button>
            <button class="bg-blue-400 rounded-md text-white px-3 py-1 text-sm ml-3">삭제</button>
          </div>
          </div>          
      </div>
 </div>
</template>

<script>
import { auth } from '../firebase';
import router from '../router';
export default {
  setup() {
    const onLogout = async () => {
      try {
        await auth.signOut().then(() => {
          router.replace('/login');
        })
        
      } catch (e) {
        alert(e.message);
      }
    }

    return {
      onLogout
    }
  }
}

</script>

<style>

</style>