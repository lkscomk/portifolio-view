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
    cor: 'success',
    icone: '',
    mensagem: response.data,
    tempo: 3000
  })
  return response
}, function (error) {
  // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
  // Faz alguma coisa com o erro da resposta
  return Promise.reject(error)
})

Vue.prototype.$axios = Axios

export default Axios
