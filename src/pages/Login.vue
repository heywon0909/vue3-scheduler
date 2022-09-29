<template>
  <div class="flex h-screen">
    <div class="m-auto border border-blue-80 px-10 py-10">
      <div class="flex flex-col items-center space-y-2 mt-10">
        <i :class="`fas fa-paw text-3xl fa-fw text-blue-800 ${isLoading ? 'animate-pulse':''}`"></i>
        <span class="text-2xl font-bold">STUDY</span>
        <span class="text-xl text-gray-600">로그인하기</span>
        <input v-model="email" type="text" class="rounded w-96 px-4 py-2 border  border-blue-80 focus:ring-3 focus:outline-none focus:border-main" placeholder="이메일"/>
        <input v-model="password" type="password" class="rounded w-96 px-4 py-2 border  border-blue-80 focus:ring-3 focus:outline-none focus:border-main" placeholder="비밀번호" @keyup.enter="onLogin()"/>
        <button v-if="isLoading" class="w-96 px-4 py-2 bg-blue-800 text-white rounded opacity-80" style="cursor:default">로그인하는중입니다</button>
         <button v-else class="w-96 px-4 py-2 bg-blue-800 text-white rounded hover:opacity-80" @click="onLogin()">로그인하기</button>
        <button @click="$router.push('/register')">계정이 없으신가요? 회원가입하기</button>
      </div>
    </div>
  
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import router from '../router';
import { auth, USER_COLLECTION } from '../firebase';
import store from '../store';
export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const isLoading = ref(false)

    onMounted(() => {
      console.log(store.state.user)
    })
    const onLogin = async () => {
      if (!email.value || !password.value) return alert('이메일과 비밀번호를 다시 입력해주세요');
      try {
        isLoading.value = true;
        console.log(email.value, password.value)
        const {user} = await auth.signInWithEmailAndPassword(email.value, password.value);
        const token = await auth.currentUser?.getIdToken();
        // console.log('token', token);
        // console.log(credential);
        // const { user } = credential;
        console.log('user', user);
        const doc = await USER_COLLECTION.doc(user.uid).get()
        console.log('doc', doc.data());

        store.commit('SET_LOGIN', doc.data());
        router.replace('/');
      } catch (e) {
        switch (e.code) {
          case "auth/invalid-email": alert('잘못된 이메일 형식입니다.'); break;
          case "auth/wrong-password": alert('비밀번호가 틀립니다.'); break;
          case "auth/user-not-found": alert('등록되지 않은 이메일입니다.'); break;
          default: alert(e.message); break;
        }
      } finally {
        isLoading.value = false;
      }
      
    }
    return {
      email, password,isLoading,onLogin
    }
  }

}
</script>

<style>

</style>