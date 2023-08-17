import Vue from 'vue'
import axios from 'axios'
import store from '../store'

const BASE_URL = 'https://EnvioEmail.lukasrocha.repl.co'

const Axios = axios.create({
  baseURL: BASE_URL
})

Axios.interceptors.response.use((response) => {
  store.commit('app/setNotificacao', {
    ativo: true,
    cor: 'erro',
    icone: '',
    mensagem: response.data.mensagem,
    tempo: 3000
  })
  return response
}, function (error) {
  store.commit('app/setNotificacao', {
    ativo: true,
    cor: 'success',
    icone: '',
    mensagem: 'Infelizmente seu email não foi enviado, tente novamente mais tarde!',
    tempo: 3000
  })
  return Promise.reject(error)
})

Vue.prototype.$axios = Axios

export default Axios
