export default {
  showSnackbar: (state, payload) => {
    console.log(payload)
    state.text = payload.text
    // eslint-disable-next-line no-unneeded-ternary
    state.multiline = (payload.text.length > 50) ? true : false

    if (payload.multiline) {
      state.multiline = payload.multiline
    }

    if (payload.timeout) {
      state.timeout = payload.timeout
    }
    state.visible = true
  },
  closeSnackbar: (state) => {
    state.visible = false
    state.multiline = false
    state.timeout = 3000
    state.text = null
  }
}
