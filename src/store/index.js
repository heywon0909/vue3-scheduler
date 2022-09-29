import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state() {
        return {
            user: null
        }
    },
    mutations: {
        SET_LOGIN: (state, user) => {
            state.user = user;
        },
        SET_LOGOUT: (state) => {
            state.user = null;
        }
    },
    plugins: [createPersistedState()],
});

export default store;