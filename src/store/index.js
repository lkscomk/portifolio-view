import Vue from 'vue'
import Vuex from 'vuex'
import app from './app/'
import contato from '../views/contato/store'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    app,
    contato
  }
})
