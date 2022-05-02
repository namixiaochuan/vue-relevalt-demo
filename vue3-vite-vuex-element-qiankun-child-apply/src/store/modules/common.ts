const state = () => ({
    mainStore: null,
})
const getters = {}
const mutations = {
    SET_MAIN_STORE: async (state: any, mainStore: Object) => {
        state.mainStore = mainStore;
    },
}
const actions = {
    setMainStore({commit}, data:any){
        commit("SET_MAIN_STORE", data);
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
