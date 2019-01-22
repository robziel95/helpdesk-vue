import axios from 'axios'

export default {
  addUser: (context, payload) => {
    return new Promise((resolve, reject) => {
      axios.post('api/users/create', payload)
        .then(res => {
          context.commit('showSnackbar', { text: 'New user has been added' })
          context.dispatch('fetchUsers')
          resolve()
        }
        )
        .catch(err => {
          console.log(err, 'user addition failed')
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
