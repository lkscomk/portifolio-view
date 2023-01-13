<template>
  <v-container fluid class="">
    <v-row>
      <v-col
        cols="12"
        class="d-flex justify-center ma-0 pa-0"
      >
        <div class="display-2 font-weight-bold pa-0 mt-5 whitey--text" style="font-size: 40px !important;">
          Habilidades
        </div>
      </v-col>
      <v-col
        cols="12"
        class="d-flex justify-center ma-0 pa-0"
      >
        <div>
          Meu nivel técnico
        </div>
      </v-col>
      <v-col cols="12" xl="5" md="5" sm="12" class="text-h5 d-flex justify-center">
          Desenvolvimento
      </v-col>
      <v-col
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'"
        cols="12" xl="5" md="5" class="text-h5 d-flex justify-center"
      >
          Ferramentas
      </v-col>
      <v-col cols="12" xl="6" md="6" sm="12">
        <v-row
          v-for="(hab, i) of desenvolvimento"
          :key="i"
        >
          <v-col cols="4" xl="4" md="4" sm="3" class="d-flex justify-end align-cente">
            <v-icon class="mr-2" :color="hab.cor">
            {{ `${hab.icon}` }}
            </v-icon>
            {{ hab.nome }}
          </v-col>
          <v-col cols="7" xl="6" md="4" sm="7"  class="d-flex justify-center align-center">
            <v-progress-linear
              v-model="hab.progresso"
              :color="hab.cor"
              height="20"
              >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        v-if="$vuetify.breakpoint.name === 'sm' || $vuetify.breakpoint.name === 'xs'"
        cols="12" sm="12" class="text-h5 d-flex justify-center"
      >
          Ferramentas
      </v-col>
      <v-col cols="12" xl="6" md="6" sm="12">
        <v-row
          v-for="(hab, i) of ferramentas"
          :key="i"
        >
          <v-col cols="4" xl="2" md="2" sm="3" class="d-flex justify-end align-center">
            <v-icon class="mr-2" :color="hab.cor">
            {{ `${hab.icon}` }}
            </v-icon>
            {{ hab.nome }}
          </v-col>
          <v-col cols="7" xl="6" md="6" sm="7" class="d-flex justify-center align-center">
            <v-progress-linear
              v-model="hab.progresso"
              :color="hab.cor"
              height="20"
              >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    texto: 'D',
    barra: '|',
    desenvolvimento: [
      {
        id: 1,
        nome: 'HTML',
        icon: 'mdi-language-html5',
        progresso: 60,
        cor: '#e44d26'
      },
      {
        id: 2,
        nome: 'CSS',
        icon: 'mdi-language-css3',
        progresso: 40,
        cor: '#264de4'
      },
      {
        id: 3,
        nome: 'JavaScript',
        icon: 'mdi-language-javascript',
        progresso: 70,
        cor: '#efd81d'
      },
      {
        id: 4,
        nome: 'Vue.js',
        icon: 'mdi-vuejs',
        progresso: 78,
        cor: '#3fb27f'
      },
      {
        id: 5,
        nome: 'Node.js',
        icon: 'mdi-nodejs',
        progresso: 50,
        cor: '#8bbf3d'
      },
      {
        id: 6,
        nome: 'Python',
        icon: 'mdi-language-python',
        progresso: 85,
        cor: '#f7da5c'
      },
      {
        id: 7,
        nome: 'TypeScript',
        icon: 'mdi-language-typescript',
        progresso: 5,
        cor: '#0076c6'
      }
    ],
    ferramentas: [
      {
        id: 1,
        nome: 'Vs Code',
        icon: 'mdi-microsoft-visual-studio-code',
        progresso: 85,
        cor: '#23a3eb'
      },
      {
        id: 2,
        nome: 'Git',
        icon: 'mdi-git',
        progresso: 40,
        cor: '#e84d31'
      },
      {
        id: 3,
        nome: 'GitHub',
        icon: 'mdi-github',
        progresso: 70,
        cor: '#15181d'
      }
    ]
  }),

  created () {
    this.construcaoTexto()
    // this.colarBarraProgresso()
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
    // colarBarraProgresso () {
    //   const intervalHtml = setInterval(() => {
    //     this.descricao.progresso += 0.5
    //     if (this.habilidades.html >= this.enumHabilidades.html) clearInterval(intervalHtml)
    //   }, 10)
    //   const intevalCss = setInterval(() => {
    //     this.habilidades.css += 0.5
    //     if (this.habilidades.css >= this.enumHabilidades.css) clearInterval(intevalCss)
    //   }, 5)
    //   const intevalJs = setInterval(() => {
    //     this.habilidades.js += 0.5
    //     if (this.habilidades.js >= this.enumHabilidades.js) clearInterval(intevalJs)
    //   }, 15)
    // }
  }
}
</script>
