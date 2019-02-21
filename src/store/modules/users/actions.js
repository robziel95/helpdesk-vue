import axios from 'axios'

export default {
  addUser: (context, payload) => {
    return new Promise((resolve, reject) => {
      let inputUserFormData = new FormData()
      for (var key in payload.inputUser) {
        inputUserFormData.append(key, payload.inputUser[key])
      }
      if (payload.uploadedFile) {
        inputUserFormData.set('avatar', payload.uploadedFile)
      }
      context.commit('setLoader', true, { root: true })
      axios.post('api/users/create', inputUserFormData)
        .then(res => {
          context.commit('showSnackbar', { text: 'New user has been added' })
          context.dispatch('fetchUsers')
          resolve()
        }
        )
        .catch(err => {
          context.commit('showSnackbar', { text: 'User addition failed' })
          reject(err)
        }
        )
    })
  },
  getUser: ({ commit }, userId) => {
    return new Promise((resolve, reject) => {
      commit('setLoader', true, { root: true })
      return axios.get('http://localhost:3000/api/users/' + userId)
        .then(
          res => {
            commit('setLoader', false, { root: true })
            resolve(res.data)
          }
        )
        .catch(
          err => {
            reject(err)
          }
        )
    })
  },
  updateUser ({ commit }, payload) {
    commit('setLoader', true, { root: true })
    return new Promise((resolve, reject) => {
      let inputUserFormData = new FormData()
      for (var key in payload.inputUser) {
        inputUserFormData.append(key, payload.inputUser[key])
      }
      if (payload.uploadedFile) {
        inputUserFormData.set('avatar', payload.uploadedFile)
      }
      axios.put('http://localhost:3000/api/users/' + payload.inputUser.id, inputUserFormData)
        .then(
          (response) => {
            commit('setLoader', false, { root: true })
            resolve()
          }
        ).catch(
          err => {
            reject(err)
          }
        )
    })
  },
  fetchUsers: ({ commit }) => {
    commit('setLoader', true, { root: true })
    axios.get('api/users/')
      .then(
        (userData) => {
          let fetchedUsers = userData.data.users.map(user => {
            return {
              id: user._id,
              name: user.name,
              surname: user.surname,
              email: user.email,
              password: user.password,
              userType: user.userType,
              nickname: user.nickname,
              avatarPath: user.avatarPath
            }
          })
          commit('fetchUsers', fetchedUsers)
          commit('setLoader', false, { root: true })
        }
      ).catch(
        // catch
      )
  },
  deleteUser: (context, userId) => {
    context.commit('setLoader', true, { root: true })
    axios.delete('http://localhost:3000/api/users/' + userId)
      .then(
        res => {
          context.dispatch('fetchUsers')
          context.commit('showSnackbar', { text: 'User successfully deleted' })
        }
      )
      .catch(
        res => {
          context.commit('showSnackbar', { text: 'User deletion failed' })
        }
      )
  }
}
