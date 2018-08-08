import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        test: ''
    },
    actions: {
        
    },
    mutations: {
        setTest(state, param) {
            state.test = param
        },
    },
    getters: {
        getTest() {
            return state.test
        },
    },
    modules: {

    }
})
export default store
