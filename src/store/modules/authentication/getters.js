export default {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  userType: state => state.userType,
  isAdmin: state => state.userType === 'administrator',
  authUserData: state => {
    return {
      userId: state.userId,
      userType: state.userType
    }
  }
}
