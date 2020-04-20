import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// default options
let options = ['DE000BASF111', 'DE000BASF112', 'DE000BASF113']

// read enviroment options
if (process.env.VUE_APP_ISINS) {
  options = process.env.VUE_APP_ISINS.split(',')
}

export default new Vuex.Store({
  state: {
    connected: false,
    error: false,
    connecting: true,
    stocks: [],
    options: options,
    prices: {}
  },
  mutations: {
    SOCKET_ONOPEN(state, event) {
      Vue.prototype.$socket = event.currentTarget
      state.connected = true
      state.connecting = false
    },
    SOCKET_ONCLOSE(state) {
      state.connected = false
      state.connecting = true
      state.error = false
    },
    SOCKET_ONERROR(state, event) {
      state.error = true
      console.error(state, event)
    },
    // updated received ISIN prices
    SOCKET_ONMESSAGE(state, message) {
      state.prices = {
        ...state.prices,
        [message.isin]: {
          ...message,
          timestamp: new Date(),
        },
      }
    },
    SOCKET_RECONNECT(state, count) {
      state.connecting = true
      console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.connecting = false
      state.error = true
    },
    // Add Selected Stock into the list
    ADD_STOCK(state, stock) {
      state.stocks = [...state.stocks, stock];
    },
    // Removed Selected Stock from the list
    REMOVE_STOCK(state, stock) {
      state.stocks = state.stocks.filter(st => st !== stock)
    },
    // Add Search Stock into the list
    ADD_NEW_STOCK(state, stock) {
      // state.options = [...state.options, stock] // enable if you want to add search stock into options 
      state.stocks = [...state.stocks, stock]
    }
  },
  actions: {
    // stock subscribe event on stock select
    addStock(context, data) {
      Vue.prototype.$socket.send(JSON.stringify({ subscribe: data }))
      context.commit('ADD_STOCK', data)
    },
    // stock un subscribe event on stock removed
    removeStock(context, data) {
      Vue.prototype.$socket.send(JSON.stringify({ unsubscribe: data }))
      context.commit('REMOVE_STOCK', data)
    },
    // stock subscribe event on stock search
    addNewStock(context, data) {
      Vue.prototype.$socket.send(JSON.stringify({ subscribe: data }))
      context.commit('ADD_NEW_STOCK', data)
    },
  },
})
