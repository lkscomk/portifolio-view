export default {
  setNotificacao (state, { ativo, cor, icone, mensagem, tempo }) {
    state.notificacao = {
      ativo,
      cor,
      icone,
      mensagem,
      tempo
    }
  },
  reset: () => {}
}
