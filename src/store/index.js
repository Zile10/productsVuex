import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})


// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     banks: null
//   },
//   getters: {
//     banks(state) {
//       return state.banks
//     }
//   },
//   mutations: {
//     setBanks(state, banks) {
//       state.banks = banks
//     }
//   },
//   actions: {
//     fetchAllBanks() {
//       return fetch("https://zile10.github.io/productsAPI/data.json")
//       .then(response => response.json())
//       .then(data => {
//         this.context.commit("setBanks", data.people)
//       })
//     }
//   },
//   modules: {
//   }
// })
