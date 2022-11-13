<template>
  <v-container fluid class="">
    <v-row>
      <v-col
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name == 'md'"
        class="d-flex align-center" cols="12" lg="7" md="7" sm="12">
        <div class="d-flex flex-column" style="font-size: 20px !important;">
          Olá, meu nome é
          <div class="display-2 font-weight-bold mb-3" style="font-size: 60px !important;">
            Lukas Rodrigues
          </div>
          <div class="display-2 font-weight-bold mb-3 primary--text" style="font-size: 40px !important;">
            eu sou {{ texto }}{{ barra }}
          </div>
        </div>
      </v-col>
      <v-col v-else class="d-flex align-center" cols="12" lg="7" md="7" sm="12">
        <div class="d-flex flex-column" style="font-size: 20px !important;">
          Meu nome é Lukas Rodrigues
          <div class="display-2 font-weight-bold mb-3 primary--text" style="font-size: 40px !important;">
            Eu sou <br />{{ texto }}{{ barra }}
          </div>
        </div>
      </v-col>
      <v-col
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name == 'md'"
        class="d-flex align-center" cols="12" lg="5" md="5" sm="12">
        <img src="@/assets/me.png" alt="imagem do autor">
      </v-col>
      <v-col v-else class="d-flex align-center justify-center" cols="12" lg="5" md="5" sm="12">
        <img src="@/assets/me.png" alt="imagem do autor">
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
