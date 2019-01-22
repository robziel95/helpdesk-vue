export default {
  authRequest: (state) => {
    state.status = 'loading'
  },
  authSuccess: (state, payload) => {
    state.status = 'success'
    state.token = payload.token
    state.userId = payload.user.id
    state.userType = payload.user.userType
  },
  authError: (state) => {
    state.status = 'error'
    state.token = ''
    state.userId = ''
    state.userType = ''
  },
  authUserLogout: (state) => {
    state.status = ''
    state.token = ''
    state.userId = ''
    state.userType = ''
  }
}
