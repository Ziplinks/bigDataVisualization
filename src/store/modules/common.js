const state = {
    screenWidth: '',//屏幕宽度
}
const mutations = {
    changeScreenWidth: (state, value) => {
        state.screenWidth = value
    }
}
export default {
    namespaced: true,
    state,
    mutations,
}