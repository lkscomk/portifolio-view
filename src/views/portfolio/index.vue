<template>
  <v-container fluid class="">
    <v-row>
      <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="d-flex justify-center">
        <div class="display-2 font-weight-bold pa-0 ma-0 whitey--text" style="font-size: 40px !important;">
          Portfolio
        </div>
      </v-col>
      <v-col
        v-for="(hab, i) of projetos"
        :key="i"
        cols="12" xl="4" lg="4" md="4" sm="12" class=""
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="white--text align-end"
            height="150px"
            :src="hab.imagem"
          >
            <v-card-title>{{ hab.titulo }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">
            {{ hab.tecnologias }}
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{ hab.descricao }}</div>
            <v-progress-linear
              v-model="hab.progresso"
              :color="hab.cor"
              height="20"
              style="pointer-events: none; cursor: default;"
              class="mt-2"
              >
              <template v-slot:default="{ value }">
                Concluído&nbsp;
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="abrirJanela(hab.linkSite, '_blank')"
            >
              <v-icon class="pr-2">
                mdi-web
              </v-icon>
              Site
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="abrirJanela(hab.linkGitHub, '_blank')"
            >
              <v-icon class="pr-2">
                mdi-github
              </v-icon>
              Repostitório
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    projetos: [
      {
        id: 1,
        titulo: 'Clone Netflix',
        tecnologias: 'Vue.Js • JavaScript',
        descricao: 'Esse projeto tem como objetivo construir um clone básico da Netflix.',
        progresso: 80,
        cor: '#e44d26',
        linkGitHub: 'https://github.com/lkscomk/netflix_clone',
        linkSite: 'https://netflixvue.lukasrocha.repl.co/',
        imagem: require('@/assets/netflix.png')
      },
      {
        id: 2,
        titulo: 'WebSocket Jogo da Velha',
        tecnologias: 'Vue.Js • Python • Flask • WebSocket',
        descricao: 'Com websocket, Flask e Vue. Um jogo da velha com o objetivo de colocar meus conhecimentos em prática.',
        progresso: 95,
        cor: '#264de4',
        linkGitHub: 'https://github.com/lkscomk/jogovelha-view',
        linkSite: 'https://jogovelha.lukasrocha.repl.co/',
        imagem: require('@/assets/jogoVelha.png')
      },
      {
        id: 3,
        titulo: 'Tocador de Música',
        tecnologias: 'Vue.Js • Node.Js • RestFull',
        descricao: 'O play music é um projeto desenvolvido usando VUEjs (front) e NODEjs (back) para estudo.',
        progresso: 90,
        cor: '#efd81d',
        linkGitHub: 'https://github.com/lkscomk/sistema_player_music',
        linkSite: 'https://play-music.lukasrocha.repl.co/',
        imagem: require('@/assets/playMusic.jpg')
      }
    ]
  }),

  created () {},

  methods: {
    abrirJanela (site, lugar) {
      window.open(site, lugar)
    }
  }
}
</script>
