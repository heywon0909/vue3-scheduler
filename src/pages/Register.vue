<template>
  <div class="flex h-screen">
    <div class="m-auto border border-blue-80 px-10 py-10">
      <div class="flex flex-col items-center space-y-2 mt-10">
        <i :class="`fas fa-paw text-3xl fa-fw text-blue-800 ${isLoading ? 'animate-pulse':''}`"></i>
        <span class="text-2xl font-bold">STUDY</span>
        <span class="text-xl text-gray-600">회원가입하기</span>
        <input v-model="username" type="text" class="rounded w-96 px-4 py-2 border  border-blue-80 focus:ring-3 focus:outline-none focus:border-main" placeholder="이름"/>
        <input v-model="email" type="text" class="rounded w-96 px-4 py-2 border  border-blue-80 focus:ring-3 focus:outline-none focus:border-main" placeholder="이메일"/>
        <input v-model="password" type="password" class="rounded w-96 px-4 py-2 border  border-blue-80 focus:ring-3 focus:outline-none focus:border-main" placeholder="비밀번호"/>
        <button v-if="isLoading" class="w-96 px-4 py-2 bg-blue-800 text-white rounded opacity-80" style="cursor:default">회원가입중입니다</button>
        <button v-else class="w-96 px-4 py-2 bg-blue-800 text-white rounded hover:opacity-80" @click="onRegister()">회원가입하기</button>
        <button @click="$router.push('/login')">계정이 이미 있으신가요? 로그인하기</button>
      </div>
    </div>
  
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth, USER_COLLECTION } from '../firebase'
import router from '../router'
export default {
  setup() {
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const isLoading = ref(false)

    const onRegister = async () => {
      if(!username.value || !password.value || !email.value) return alert('이름,비밀번호,이메일을 정확하게 입력해주세요.')
      try {
        isLoading.value = true;
        console.log(username.value, email.value, password.value)
        const {user} = await auth.createUserWithEmailAndPassword(email.value, password.value);
       
        const doc = USER_COLLECTION.doc(user.uid);
        await doc.set({
          uid: user.uid,
          email: email.value,
          password: password.value,
          profile_image_url: '/profile.jpeg',
          username: username.value,
          created_at: Date.now()
        });
        alert('회원 가입에 성공하셨습니다. 로그인해주세요.')
        router.push('/login');
      } catch (e) {
        console.log('create user with email and password error:', e);
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
      username, email, password,isLoading,onRegister
    }
  }

}
</script>

<style>

</style>