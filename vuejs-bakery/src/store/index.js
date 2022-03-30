import { createStore } from 'vuex'

export default createStore({
  state: {
    Orders: [
      {
        Name: 'Hector Fulanito',
        Email: 'algo@ejemplo.com',
        Sabores: ['Chocolate', 'Oreo'],
        Toppers: ['Edad (letras)'],
        Descripcion: 'Quiero un pastel mitad oreo y mitad chocolate para el cumpleaños de mi hijo, cumple 10 años',
      }
    ],
  },
  getters: {
    getOrders: state => {
      return state.Orders
    }
  },
  mutations: {
    addOrder(state, order) {
      state.Orders.push(order)
    },
  },
  actions: {
    addOrder({ commit }, order) {
      commit('addOrder', order)
    }
  },
  modules: {
  }
})
