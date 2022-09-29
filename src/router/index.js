import { createRouter, createWebHistory } from 'vue-router';
import MainHome from '../pages/MainHome.vue';
import Calendar from '../pages/Calendar.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import store from '../store';

const routes = [
    {path: '/',name:'home',component: MainHome, title: '오늘의 일정', icon: 'fas fa-check-circle fa-fw text-2xl', meta: {isNav:true,layout:'DefaultLayout',requireAuth:true}},
    { path: '/calendar',name:'calendar',component: Calendar, title: '달력보기', icon: 'fas fa-calendar-alt fa-fw text-2xl',meta: {isNav:true,layout:'DefaultLayout',requireAuth:true} },
    { path: '/',name:'statistic',component: Calendar, title: '공부통계', icon: 'fas fa-signal  fa-fw text-2xl',meta: {isNav:true,layout:'DefaultLayout',requireAuth:true} },
    { path: '/',name:'profile',component: Calendar, title: '프로필', icon: 'far fa-user fa-fw text-2xl',meta: {isNav:true,layout:'DefaultLayout',requireAuth:true} },
    { path: '/',name:'plus',component: Calendar, title: '더보기', icon: 'fas fa-ellipsis-h fa-fw text-2xl', meta: { isNav: true, layout: 'DefaultLayout',requireAuth:true } },
    { path: '/register',name:'register',component: Register, meta: { isNav: false,layout:'LayoutWithoutNav' } },
    { path: '/login',name:'login',component: Login, meta: {isNav:false,layout:'LayoutWithoutNav'} },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = store.state.user;
    const isRequireAuth = to.matched.some(item => item.meta.requireAuth);
    if (!currentUser && isRequireAuth) next('/login');
    else next();
   
})

export default router