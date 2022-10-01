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
         <Plan  v-for="(todo,index) in planList" :key="index" :todo="todo" :index="index"/>
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
import Plan from '../components/Plan.vue'
export default {
  components:{ Plan, Plan },
  setup() {
    Array.splice
    onBeforeMount(() => {
      console.log('store',store.state.todoList)

      // store.commit('SET_FLAG', false);
      // store.commit('SET_TODAY',[]);
      if (!store.state.isTodayStudyStart) {
        createPlan();
      }
          })
    const planBody = ref('')
    const planType = ref('')
    const planList = computed(()=>store.state.todoList)
    const currentUser = computed(() => store.state.user)

    const createPlan = async () => {
      console.log('타기')
      const today = new Date();
      const day = `${today.getFullYear()}-${today.getMonth()+1 <10 ?`0${today.getMonth()+1}`: `${today.getMonth()+1}`}-${today.getDate()< 10 ? `0${today.getDate()}`:`${today.getDate()}`}`;
      const doc = PLAN_COLLECTION.doc(day);
      await doc.set({
        uid: currentUser.value.uid,
        todayPlans: [],
        year: today.getFullYear(),
        month: today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : `${today.getMonth() + 1}`,
        day: today.getDate()< 10 ? `0${today.getDate()}`:`${today.getDate()}`
      });
      store.commit('SET_FLAG',true);
    }
    const onAddPlan = async () => {
      const today = new Date();
      const day = `${today.getFullYear()}-${today.getMonth()+1 <10 ?`0${today.getMonth()+1}`: `${today.getMonth()+1}`}-${today.getDate()< 10 ? `0${today.getDate()}`:`${today.getDate()}`}`;
      try {
        const doc = PLAN_COLLECTION.doc(day)
        const data = {
          type: planType.value,
          title: planBody.value,
          created_at: Date.now(),
          complete: ''
        }
        await doc.set({
          todayPlans: firebase.firestore.FieldValue.arrayUnion(data)
        }, { merge: true });
        store.commit('SET_TODAY', data);
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
      onLogout,onAddPlan,planBody,planType,createPlan,planList
    }
  }
}

</script>

<style>

</style>