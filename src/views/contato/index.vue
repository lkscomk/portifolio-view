<template>
  <v-container fluid class="">
    <loading :value="loading" />
    <v-row>
      <v-col
        cols="12"
        class="d-flex justify-center ma-0 pa-0"
      >
        <div class="display-2 font-weight-bold pa-0 mt-5 whitey--text" style="font-size: 40px !important;">
          Me contate
        </div>
      </v-col>
      <v-col
        cols="12"
        class="d-flex justify-center ma-0 pa-0"
      >
        <div>
          Entre em contato
        </div>
      </v-col>
    </v-row>
    <validation-observer
      ref="observer"
    >
    <v-row class="d-flex justify-center pt-5">
      <v-col
        cols="12" xl="4" md="4" sm="4"
      >
      <v-col
        cols="12" xl="12" md="12" sm="12"
        class="d-flex justify-center"
      >
        <div class="display-2 font-weight-bold pa-0 ma-0 whitey--text" style="font-size: 20px !important;">
          Links Clicaveis
        </div>
      </v-col>
      <v-col
        cols="12" xl="12" md="12" sm="12"
        class="d-flex justify-center"
      >
      <v-btn
      class="mx-3 elevation-1"
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
      </v-col>
      <v-col
        cols="12" xl="4" md="6" sm="8"
      >
      <v-col
        cols="12"
      >
        <validation-provider
          v-slot="{ errors }"
          name="Nome"
          rules="required"
          vid="nome"
        >
          <v-text-field
            v-model="formulario.nome"
            :error-messages="errors"
            :hide-details="!errors.length"
            label="Nome*"
            outlined
          />
        </validation-provider>
      </v-col>
      <v-col
        cols="12"
      >
        <validation-provider
          v-slot="{ errors }"
          name="Email"
          rules="required|email"
          vid="email"
        >
          <v-text-field
            v-model="formulario.email"
            :error-messages="errors"
            :hide-details="!errors.length"
            label="Email*"
            outlined
          />
        </validation-provider>
      </v-col>
      <v-col
        cols="12"
      >
       <validation-provider
          v-slot="{ errors }"
          name="Conteúdo"
          vid="conteudo"
        >
        <v-textarea
          v-model="formulario.conteudo"
          :error-messages="errors"
          :hide-details="!errors.length"
          label="Conteúdo*"
          outlined
          @keydown.enter="enviarMensagem()"
        />
      </validation-provider>
      </v-col>
      <v-col
        cols="12"
      >
        <v-btn
          color="primary"
          block
          @click="enviarMensagem()"
        >
        ENVIAR
        </v-btn>
      </v-col>
      </v-col>
    </v-row>
    </validation-observer>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',

  data: () => ({
    loading: false,
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
    ],
    formulario: {
      nome: null,
      email: null,
      conteudo: null
    }
  }),

  created () {
    this.construcaoTexto()
    // this.colarBarraProgresso()
  },

  methods: {
    ...mapActions('contato', [
      'enviarEmail'
    ]),
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
    },
    async enviarMensagem () {
      if (await this.$refs.observer.validate()) {
        this.loading = true
        const res = await this.enviarEmail({
          mensagem: this.formulario.conteudo,
          email: 'lukasrocharodregues@gmail.com',
          titulo: `Mensagem Enviado por ${this.formulario.email} - ${this.formulario.nome}`
        })
        if (res) {
          this.formulario = {
            nome: null,
            email: null,
            conteudo: null
          }
        }
        this.loading = false
      }
    }
  }
}
</script>
