
const getDefaultState = () => {
  return {
    token: localStorage.getItem("token"),
    userInfo: JSON.parse(localStorage.getItem("userInfo")),
    
  }
}
const state = getDefaultState()

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  userInfo: (state, name) => {
    state.userInfo = name
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

