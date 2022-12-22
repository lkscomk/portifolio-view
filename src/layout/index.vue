<template>
  <v-main
    :style="['Workplace', 'Detalhamento do projeto'].indexOf(this.$router.currentRoute.name) > -1
      ? 'padding-left: 0px!important;'
      : 'padding-top: 64px!important;'"
  >
    <!-- TODO: Toolbar do sistema -->
    <v-app-bar
      app
      class="elevation-0"
      color="primary"
    >
      <div class="d-flex align-center">
        <v-toolbar-title
          :class="$vuetify.theme.dark
            ? 'white--text'
            : 'white--text'"
          class="ml-0 mt-1"
          style="cursor: pointer"
          @click="irParaHome()"
        >
          <span
            :class="!$vuetify.breakpoint.mobile
              ? 'headline font-weight-bold'
              : 'title font-weight-bold'"
          >
            LUKASVERSO
          </span>
        </v-toolbar-title>
      </div>

     <v-spacer />

     <v-btn
        class="mr-2"
        color="white"
        text
        @click="alterarTema()"
      >
        HOME
      </v-btn>
     <v-btn
        class="mx-2"
        color="white"
        text
        @click="alterarTema()"
      >
        HABILIDADES
      </v-btn>
     <v-btn
        class="mr-2"
        color="white"
        text
        @click="alterarTema()"
      >
        SOBRE
      </v-btn>
     <v-btn
        class="mx-2"
        color="white"
        text
        @click="alterarTema()"
      >
        CONTATO
      </v-btn>
      <div style="color: white" >
        |
      </div>
      <v-btn
        text
        @click="alterarTema()"
      >
        <v-icon
          color="white"
        >
          {{
            this.$vuetify.theme.dark
              ? 'mdi-white-balance-sunny'
              : 'mdi-weather-night'
          }}
        </v-icon>
      </v-btn>
    </v-app-bar>

    <!-- TODO: Transição do router -->
    <v-container
      class="pa-0"
      fluid
    >
      <router-view />
    </v-container>

    <!-- TODO: Footer -->
    <v-footer
      app
      class="pa-0 color primary"
      dark
      height="20"
    >
      <v-col
        class="text-center ma-0 pa-0 caption"
        cols="12"
      >
        <span class="caption font-weight-bold mr-10">
          {{ dataAtual }}
        </span>
        <strong v-if="!$vuetify.breakpoint.mobile">
          Todos os direitos reservados LUKASVERSO
        </strong>
      </v-col>
    </v-footer>
  </v-main>
</template>

<script>
export default {
  name: 'LayoutSistema',

  data: () => ({
    dataAtual: '',
    loading: false,
    versao: '1.0.0'
  }),

  created () {
    window.console.log(window.atob(localStorage.getItem('igprojetos:tema')))
    this.$vuetify.theme.dark = window.atob(localStorage.getItem('igprojetos:tema'))
    setTimeout(() => {
      this.atualizarData()
    }, 200)
  },

  methods: {
    alterarTema () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem(
        'igprojetos:tema',
        window.btoa(this.$vuetify.theme.dark)
      )
    },
    atualizarData () {
      this.dataAtual = this.$day().format('HH:mm:ss | dddd, DD - MMMM - YYYY')

      setTimeout(() => {
        this.atualizarData()
      }, 1000)
    },
    async deslogar () {
      this.loading = true

      const res = await this.logout()
      if (!res.erro) this.$router.push('/login')

      this.loading = false
    }
  }
}
</script>

<style lang="scss">
.favoritos {
  .le {
    visibility: hidden !important;
  }
}
.favoritos:hover {
  .le {
    visibility: visible !important;
  }
}
.menu {
  .v-treeview-node__level {
    width: 10px !important;
  }
  .v-treeview-node__children > .v-treeview-node__root {
    margin-left: 10px !important;
  }
  .v-treview-node--leaf > .v-treeview-node__root,
  .v-treeview-node--click > .v-treeview-node__root {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .v-treeview-node__root {
    padding-left: 10px !important;
    height: 35px !important;
    transition: border-left 0.2s ease-in-out;
  }

  .v-treeview-node__toggle {
    width: 25px !important;
  }
  .desativa-duplo-click {
    pointer-events: none !important;
  }
}
</style>
