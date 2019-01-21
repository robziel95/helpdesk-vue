import axios from 'axios'

export default {
  authRequest: (context, authData) => {
    return new Promise((resolve, reject) => {
      axios.post('/api/user/login', authData)
        .then(resp => {
          const user = resp.data.loggedUser
          const token = resp.data.token
          localStorage.setItem('user-id', user.id)
          localStorage.setItem('user-token', token)

          axios.defaults.headers.common['Authorization'] = token
          // const expiresIn = resp.data.expiresIn
          context.commit('authSuccess', token)
          context.commit('showSnackbar', { text: 'Successful sign in' })
          resolve(resp)
        }
        ).catch(err => {
          console.log(err)
          context.commit('authError', err)
          localStorage.removeItem('user-token')
          localStorage.removeItem('user-id')
          context.commit('showSnackbar', { text: 'Login failed' })
          reject(err)
        }
        )
    }
    )
  },
  authLogout: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit('authUserLogout')
      commit('showSnackbar', { text: 'You are now logged out' })
      localStorage.removeItem('user-token') // clear your user's token from localstorage
      resolve()
    })
  }
}
