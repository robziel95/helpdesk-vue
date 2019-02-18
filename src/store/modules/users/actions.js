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
  getUser: ({ state }, userId) => {
    return new Promise((resolve, reject) => {
      return axios.get('http://localhost:3000/api/users/' + userId)
        .then(
          res => {
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
  updateUser ({ state }, payload) {
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
            resolve()
          }
        ).catch(
          err => {
            reject(err)
          }
        )
    })
  },
  fetchUsers: (context) => {
    axios.get('api/users/').then(
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
        }
        )
        context.commit('fetchUsers', fetchedUsers)
      }
    )
  },
  deleteUser: (context, userId) => {
    console.log(userId)
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
