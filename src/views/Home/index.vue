<template>
  <main>
    <div style="
        height: 100%;
        width: 100%;">
      <home></home>
    </div>

  </main>
</template>

<script>
import home from '@/components/home'
// import sobre from '@/components/sobre'
// import habilidades from '@/components/habilidades'

export default {
  name: 'HelloWorld',

  components: {
    home
    // sobre,
    // habilidades
  },

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
