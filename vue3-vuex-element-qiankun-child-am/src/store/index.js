import { createStore } from 'vuex'
import getters from './getters'
import user from './moudles/user'
const store = createStore({
  modules: {
    user,
    // common,
    // logs,
    // tags
  },
  getters,
})


export default store