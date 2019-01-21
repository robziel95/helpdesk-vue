export default {
  authRequest: (state) => {
    state.status = 'loading'
  },
  authSuccess: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  authError: (state) => {
    state.status = 'error'
    state.token = ''
  },
  authUserLogout: (state) => {
    state.status = ''
    state.token = ''
  }
}
