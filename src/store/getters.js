const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  service: state => state.service.service,
  screenWidth: state => state.common.screenWidth,
}
export default getters
