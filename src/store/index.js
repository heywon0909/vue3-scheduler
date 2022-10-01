import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state() {
        return {
            user: null,
            todoList: [],
            isTodayStudyStart: false
        }
    },
    mutations: {
        SET_LOGIN: (state, user) => {
            state.user = user;
        },
        SET_LOGOUT: (state) => {
            state.user = null;
        },
        SET_FLAG: (state,flag) => {
            state.isTodayStudyStart = flag;
        },
        SET_TODAY: (state, list) => {
            console.log('list', list);
            // state.todoList = [];
            if (!state.todoList) state.todoList.push(list);
            else state.todoList.unshift(list);
        }   
    },
    plugins: [createPersistedState()],
});

export default store;