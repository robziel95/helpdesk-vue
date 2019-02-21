import axios from 'axios'

export default {
  authRequest: ({ commit }, authData) => {
    return new Promise((resolve, reject) => {
      commit('setLoader', true, { root: true })
      axios.post('/api/user/login', authData)
        .then(resp => {
          const user = resp.data.loggedUser
          user.id = user._id
          delete user._id
          const token = resp.data.token
          localStorage.setItem('userId', user.id)
          localStorage.setItem('token', token)

          axios.defaults.headers.common['Authorization'] = token
          // const expiresIn = resp.data.expiresIn
          commit('authSuccess', { token, user })
          commit('setLoader', false, { root: true })
          commit('showSnackbar', { text: 'Successful sign in' })
          resolve(resp)
        })
        .catch(err => {
          commit('authError', err)
          localStorage.removeItem('token')
          localStorage.removeItem('userId')
          commit('showSnackbar', { text: 'Login failed' })
          reject(err)
        })
    }
    )
  },
  authLogout: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit('authUserLogout')
      commit('showSnackbar', { text: 'You are now logged out' })
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  },
  fetchAuthUser: ({ commit }, payload) => {
    commit('setLoader', true, { root: true })
    axios.get('api/users/' + payload.userId)
      .then(
        (userData) => {
          let token = payload.token
          axios.defaults.headers.common['Authorization'] = token
          let user = userData.data
          user.id = user._id
          delete user._id
          commit('setLoader', false, { root: true })
          commit('authSuccess', { token, user })
        }
      )
      .catch(
        () => {
          commit('authUserLogout')
          localStorage.removeItem('token')
          localStorage.removeItem('userId')
          delete axios.defaults.headers.common['Authorization']
        }
      )
  }
}
