import axios from 'axios'

export default {
  addUser: (context, payload) => {
    console.log('Axios post')
    axios.post('api/users/create', payload)
      .then(res => {
        context.commit('showSnackbar', { text: 'New user has been added' })
        context.dispatch('fetchUsers')
      }
      )
      .catch(err => {
        console.log(err, 'user addition failed')
      }
      )
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
        // console.log('fetchedUsers', fetchedUsers);
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
