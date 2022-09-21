import { createRouter, createWebHistory } from 'vue-router';
import MainHome from '../pages/MainHome.vue';
import Calendar from '../pages/Calendar.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

const routes = [
    {path: '/', component: MainHome, title: '오늘의 일정', icon: 'fas fa-check-circle fa-fw text-2xl', meta: {isNav:true,layout:'DefaultLayout'}},
    { path: '/calendar', component: Calendar, title: '달력보기', icon: 'fas fa-calendar-alt fa-fw text-2xl',meta: {isNav:true,layout:'DefaultLayout'} },
    { path: '/', component: Calendar, title: '공부통계', icon: 'fas fa-signal  fa-fw text-2xl',meta: {isNav:true,layout:'DefaultLayout'} },
    { path: '/', component: Calendar, title: '프로필', icon: 'far fa-user fa-fw text-2xl',meta: {isNav:true,layout:'DefaultLayout'} },
    { path: '/', component: Calendar, title: '더보기', icon: 'fas fa-ellipsis-h fa-fw text-2xl', meta: { isNav: true, layout: 'DefaultLayout' } },
    { path: '/register', component: Register, meta: { isNav: false,layout:'LayoutWithoutNav' } },
    { path: '/login', component: Login, meta: {isNav:false,layout:'LayoutWithoutNav'} },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router