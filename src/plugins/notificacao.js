import Vue from 'vue'
import store from '../store'

const notificacao = (mensagem, tipo, critico = false) => {
  store.commit('app/setNotificacao', {
    ativo: false,
    cor: '',
    icone: '',
    mensagem: '',
    tempo: -1
  })

  let cor = ''
  let icone = ''
  let tempo = 3000

  switch (tipo) {
    case undefined:
      cor = 'success'
      icone = 'mdi-check-circle-outline'
      tempo = 500
      break
    case 'informacao':
      cor = 'info'
      icone = 'mdi-information'
      tempo = 3000
      break
    case 'atencao':
      cor = 'warning'
      icone = 'mdi-alert'
      tempo = 4000
      break
    case 'erro':
      cor = 'error'
      icone = 'mdi-alert-circle'
      tempo = 4000

      if (critico) tempo = -1
      break
  }

  setTimeout(() => {
    store.commit('app/setNotificacao', {
      ativo: true,
      cor,
      icone,
      mensagem,
      tempo
    })
  }, 500)
}

Vue.prototype.$notificacao = notificacao
