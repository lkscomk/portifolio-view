<template>
  <v-snackbar
    v-model="notificacao.ativo"
    :color="notificacao.cor"
    :timeout="notificacao.tempo"
    app
    multi-line
    top
  >
    <v-icon
      dark
      left
      size="30"
    >
      {{ notificacao.icone }}
    </v-icon>
    <span v-html="notificacao.mensagem" />

    <template v-slot:action="{ attrs }">
      <v-btn
        v-bind="attrs"
        dark
        text
        @click="setNotificacao({
          ativo: false,
          cor: null,
          icone: null,
          mensagem: null,
          tempo: null
        })"
      >
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'ComponenteNotificacao',

  computed: {
    ...mapState('app', [
      'notificacao'
    ])
  },

  methods: {
    ...mapMutations('app', [
      'setNotificacao'
    ])
  }
}
</script>
