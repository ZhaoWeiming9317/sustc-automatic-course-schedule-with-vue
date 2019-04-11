import {
  LOGIN,
  LOGOUT,
  USERNAME
} from './mutation-types.js'

export default {
  UserLogin ({ commit }, data) {
    commit(LOGIN, data)
  },
  UserLogout ({ commit }) {
    commit(LOGOUT)
  },
  UserName ({ commit }, data) {
    commit(USERNAME, data)
  }
}
