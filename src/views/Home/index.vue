<template>
  <v-container fluid class="">
    <v-row>
      <v-col
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name ==='lg' || $vuetify.breakpoint.name === 'md'"
        class="d-flex align-center" cols="12" lg="7" md="7" sm="12">
        <v-row>
          <v-col lg="4" md="4" sm="4"></v-col>
          <v-col class="pa-0 mb-2" lg="8" md="8" sm="8">
            <div class="d-flex flex-column" style="font-size: 20px !important;">
          Olá, meu nome é
          <div class="display-2 font-weight-bold mb-3" style="font-size: 60px !important;">
            Lukas Rodrigues
          </div>
          <div class="display-2 font-weight-bold pa-0 ma-0 primary--text" style="font-size: 40px !important;">
            eu sou {{ texto }}{{ barra }}
          </div>
        </div>
          </v-col>
          <v-col lg="4" md="4" sm="4"></v-col>
          <v-col class="pa-0 ma-0" lg="8" md="8" sm="8">
    <v-btn
      class="mr-3 elevation-1"
      fab
      small
      title="Página do Linkedin"
      @click="abrirRedes('https://www.linkedin.com/in/lkscomk/')"
    >
      <v-icon >
        mdi-linkedin
      </v-icon>
    </v-btn>
    <v-btn
      class="mx-3 elevation-1"
      fab
      small
      title="Página do GitHub"
      @click="abrirRedes('https://github.com/lkscomk?tab=repositories')"
    >
      <v-icon >
        mdi-github
      </v-icon>
    </v-btn>
    <v-btn
      class="mx-3 elevation-1"
      fab
      small
      title="Página do Instagram"
      @click="abrirRedes('https://instagram/lkscomk')"
    >
      <v-icon>
        mdi-instagram
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-3 elevation-1"
      fab
      small
      title="WhastApp"
      @click="abrirRedes('https://wa.me/5569992978587')"
    >
      <v-icon>
        mdi-whatsapp
      </v-icon>
    </v-btn>
          </v-col>
      </v-row>
      </v-col>
      <v-col
        v-else
        class="d-flex align-center" cols="12" lg="7" md="7" sm="12">
        <v-row>
          <v-col class="d-flex justify-center" cols="12">
            <div class="d-flex flex-column" style="font-size: 20px !important;">
          Olá, meu nome é
          <div class="display-2 font-weight-bold mb-3" style="font-size: 60px !important;">
            Lukas Rodrigues
          </div>
          <div class="display-2 font-weight-bold pa-0 ma-0 primary--text" style="font-size: 30px !important;">
            eu sou {{ texto }}{{ barra }}
          </div>
        </div>
          </v-col>
          <v-col lg="4" md="4" sm="4"></v-col>
          <v-col class="d-flex justify-center" cols="12">
    <v-btn
      class="mr-3 elevation-1"
      fab
      small
      title="Página do Linkedin"
      @click="abrirRedes('https://www.linkedin.com/in/lkscomk/')"
    >
      <v-icon >
        mdi-linkedin
      </v-icon>
    </v-btn>
    <v-btn
      class="mx-3 elevation-1"
      fab
      small
      title="Página do GitHub"
      @click="abrirRedes('https://github.com/lkscomk?tab=repositories')"
    >
      <v-icon >
        mdi-github
      </v-icon>
    </v-btn>
    <v-btn
      class="mx-3 elevation-1"
      fab
      small
      title="Página do Instagram"
      @click="abrirRedes('https://instagram/lkscomk')"
    >
      <v-icon>
        mdi-instagram
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-3 elevation-1"
      fab
      small
      title="WhastApp"
      @click="abrirRedes('https://wa.me/5569992978587')"
    >
      <v-icon>
        mdi-whatsapp
      </v-icon>
    </v-btn>
          </v-col>
      </v-row>
      </v-col>
      <v-col
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'"
        class="d-flex align-center" cols="12" lg="5" md="5" sm="12">
        <img class="imagem" src="@/assets/me.png" alt="imagem do autor">
      </v-col>
      <v-col v-else class="d-flex align-center justify-center" cols="12" lg="5" md="5" sm="12">
        <img  class="imagem" src="@/assets/me.png" alt="imagem do autor">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Home',

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
    },
    abrirRedes (link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style>
.imagem {
  border-radius: 50%;
  max-width: 90%;
  max-height: 90%;
  box-shadow:
    1px 1px #2261ef,
    2px 2px #2261ef,
    3px 3px #2261ef;
}
</style>
