<template>
  <v-container fluid class="">
    <v-row>
      <v-col cols="12" xl="3" lg="3" md="3" sm="12" class="color "></v-col>
      <v-col cols="12" xl="8" lg="8" md="8" sm="12"
        class="d-flex justify-start ma-0 pl-5 color "
      >
        <div class="display-2 font-weight-bold pa-0 ma-0 whitey--text" style="font-size: 40px !important;">
          Sobre Mim
        </div>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="3" sm="12"
        class="d-flex justify-start ma-0 pl-5 color "
      >
        <img class="perfil" src="@/assets/me.jpeg" alt="imagem do autor">
      </v-col>
      <v-col
        cols="12" xl="8" lg="8" md="8" sm="10"
        class="d-flex justify-start ma-0 pl-5 pt-2 color "
      >
        <p align="justify">Hi, my name is Lukas. I'm have 19 years old. I'm from Porto Velho, Rondônia.<br/><br/>I started in the world of development in 2019 when I entered the Federal Institute of Rondônia, there I did high school integrated with the technical course. In 2022 I entered college (also in IFRO), in the internet systems course. <br/><br/>I started to work in the development area in 2022 at the Irmãos Gonçalves supermarket. There I learned Node Js, JavaScript, Vuejs, MySql and a little bit of typescript (not much). <br/><br/>Also, I understand HTML, CSS and Python (I love python because it was the first language I learned). I also love cats and coffee. <br/><br/>Finally, I confess that I don't know English very well, I understand many things but I still have difficulty, I can read a text but I can't understand someone speaking. But, I try very hard every day to learn new things. good morning thank you.
        </p>
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

<style>
.perfil {
  max-width: 320px;
  max-height: 320px;
  width: auto;
  height: auto;
  box-shadow:
    1px 1px #4626d0,
    2px 2px #4626d0,
    3px 3px #4626d0;
}
</style>
