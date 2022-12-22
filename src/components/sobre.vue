<template>
  <v-container fluid class="">
    <v-row>
      <v-col
        cols="12"
        class="d-flex justify-center font-weight-bold color primary"
        style="font-size: 20px !important;"
      >
        Sobre
      </v-col>
      <v-col>
      </v-col>
      <v-col>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    texto: 'D',
    barra: '|'
  }),

  created () {
    this.construcaoTexto()
  },

  methods: {
    construcaoTexto () {
      let conteudo = 'esenvolvedor'.split('').reverse()
      setInterval(() => {
        if (conteudo.length > 0) {
          this.texto += conteudo.pop()
        } else {
          conteudo = 'esenvolvedor'.split('').reverse()
          this.texto = 'D'
        }
      }, 250)
      setInterval(() => {
        if (this.barra) this.barra = ''
        else this.barra = '|'
      }, 300)
    }
  }
}
</script>

<style>
img {
  border-radius: 50%;
  max-width: 90%;
  max-height: 90%;
  box-shadow:
    1px 1px #4626d0,
    2px 2px #4626d0,
    3px 3px #4626d0;
}
</style>
