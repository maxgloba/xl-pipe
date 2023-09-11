export const state = () => ({
  loader: false,
  alert: false,
  modal: false,
})

export const getters = {
  getLoader: state => state.loader,
  getAlert: state => state.alert,
  getModal: state => state.modal,
}

export const mutations = {
  setLoader(state, res) {
    state.loader = res
  },
  setAlert(state, res) {
    state.alert = res
  },
  setMdal(state, res) {
    state.modal = res
  },
}
export const actions = {

}
