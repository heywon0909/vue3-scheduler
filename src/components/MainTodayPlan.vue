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
                  <input type="text" v-model="planType" placeholder="구분 값을 설정해주세요" class="border border-blue-50"/>
                  <textarea v-model="planBody" class="focus:outline-none resize-none w-full text-lg text-gray-300 font-bold px-2" placeholder="오늘의 study 일정은?"></textarea>
                  <div class="text-right">
                    <button class="bg-blue-800 text-white rounded-full text-sm px-4 py-2 hover:opacity-80" @click="onAddPlan()">추가하기</button>
                  </div>
                  </div>
            </div>
        </div>
      <div class="flex flex-1 flex-col -mt-5 overflow-y-scroll h-screen">
          <div class="flex ml-1 px-2 border-b border-gray-100 mb-6 py-3 justify-between" v-for="todo in 20" :key="todo">
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
import { onBeforeMount } from 'vue';
import router from '../router';
import store from '../store';
import { auth, PLAN_COLLECTION } from '../firebase'
import { ref, computed } from 'vue';
import firebase from 'firebase';
export default {
  setup() {
    onBeforeMount(() => {
      createPlan();
    })
    const planBody = ref('')
    const planType = ref('')
    const currentUser = computed(() => store.state.user)
    const createPlan = async () => {
      console.log('타니');
      const today = new Date();
      const day = `${today.getFullYear()}-${today.getMonth() <10 ?`0${today.getMonth()}`: `${today.getMonth()}`}-${today.getDay()< 10 ? `0${today.getDay()}`:`${today.getDay()}`}`;
      const doc = PLAN_COLLECTION.doc(day);
      await doc.set({
        uid: currentUser.value.uid,
        todayPlans:[]
      });
    }
    const onAddPlan = async () => {
      const today = new Date();
      const day = `${today.getFullYear()}-${today.getMonth() <10 ?`0${today.getMonth()}`: `${today.getMonth()}`}-${today.getDay()< 10 ? `0${today.getDay()}`:`${today.getDay()}`}`;
      try {
        const doc = PLAN_COLLECTION.doc(day)
        const data = {
          type: planType.value,
          title: planBody.value,
          complete: ''
        }
        await doc.set({
          todayPlans: firebase.firestore.FieldValue.arrayUnion(data)
        },{merge:true});
        planType.value = "";
        planBody.value = "";
      } catch (e) {
        console.log("계획을 올리는데 문제가 발생하였습니다.", e);
      }
    }
    const onLogout = async () => {
      try {
        await auth.signOut();
        store.commit('SET_LOGOUT');
        await router.replace('/login');
        
      } catch (e) {
        alert(e.message);
      }
    }

    return {
      onLogout,onAddPlan,planBody,planType,createPlan
    }
  }
}

</script>

<style>

</style>