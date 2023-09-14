export const state = () => ({
  focusHeader: null,
})

export const getters = {
  getFocusHeader: state => state.focusHeader,
}

export const mutations = {
  setFocusHeader(state, res) {
    state.focusHeader = res
  },
}
