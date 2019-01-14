import axios from 'axios';

const state = {
  users: []
};

const getters = {};

const mutations = {
  updateUsers: (state, payload) => {
    state.users = payload;
  }
};

const actions = {
  addUser: (context, payload) => {
    console.log('Axios post');
    axios.post('api/users/create', payload)
      .then(res => {
        context.commit('showSnackbar', { text: 'New user has been added' });
        context.dispatch('updateUsers');
      }
      )
      .catch(err => {
        console.log(err, 'user addition failed');
      }
      );
  },
  updateUsers: (context) => {
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
          };
        }
        );
        // console.log('fetchedUsers', fetchedUsers);
        context.commit('updateUsers', fetchedUsers);
      }
    );
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
