//用来做状态管理
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        userId : 0
    },
    getters : {

    },
    mutations : {
        setUserId(state, id){
            state.userId = id;
        }
    },
    actions : {
        setUserId({commit}, id){
            commit('setUserId', id);
        }
    }
})
