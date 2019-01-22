export default {
  authRequest: (state) => {
    state.status = 'loading'
  },
  authSuccess: (state, token, userId) => {
    state.status = 'success'
    state.token = token
    state.userId = userId
  },
  authError: (state) => {
    state.status = 'error'
    state.token = ''
    state.userId = ''
  },
  authUserLogout: (state) => {
    state.status = ''
    state.token = ''
    state.userId = ''
  }
}
