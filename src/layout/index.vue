<template>
  <v-main
    :style="['Workplace', 'Detalhamento do projeto'].indexOf($router.currentRoute.name) > -1
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
            Lukas Rodrigues
          </span>
        </v-toolbar-title>
      </div>

     <v-spacer />

     <v-btn
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'"
        class="mr-2"
        color="white"
        text
        @click="openUrl('/')"
      >
        HOME
      </v-btn>
     <v-btn
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'"
        class="mx-2"
        color="white"
        text
        @click="openUrl('/habilidades')"
      >
        HABILIDADES
      </v-btn>
     <v-btn
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'"
        class="mx-2"
        color="white"
        text
        @click="openUrl('/portofolio')"
      >
        PORTIFÓLIO
      </v-btn>
     <v-btn
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'"
        class="mr-2"
        color="white"
        text
        @click="openUrl('/sobre')"
      >
        SOBRE
      </v-btn>
      <v-btn
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'"
        class="mx-2"
        color="white"
        text
        @click="openUrl('/contato')"
      >
        CONTATO
      </v-btn>
      <div
        v-if="$vuetify.breakpoint.name === 'xl' || $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'"
        style="color: white"
      >
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
            $vuetify.theme.dark
              ? 'mdi-white-balance-sunny'
              : 'mdi-weather-night'
          }}
        </v-icon>
      </v-btn>
      <v-menu
        v-if="$vuetify.breakpoint.name === 'sm' || $vuetify.breakpoint.name === 'xs'"
        offset-y
        left
      >
        <template v-slot:activator="{ on }">
          <v-tooltip
            activator="#mo-modal-tooltip"
            bottom
          >
            <span>Mais Opções</span>
          </v-tooltip>
          <v-btn
            :color="$vuetify.theme.dark ? '' : 'primary darken-3'"
            class="mx-0"
            dark
            small
            icon
            v-on="on"
            >
              <v-icon>
                mdi-menu
              </v-icon>
            </v-btn>
          </template>
          <v-list
          class="pa-0"
          dense
        >
          <v-list-item @click="openUrl('/')">
            <v-list-item-content>
              <v-list-item-title> HOME </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="openUrl('/habilidades')">
            <v-list-item-content>
              <v-list-item-title> HABILIDADES </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="openUrl('/sobre')">
            <v-list-item-content>
              <v-list-item-title> SOBRE </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="openUrl('/contato')">
            <v-list-item-content>
              <v-list-item-title> CONTATO </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        </v-menu>
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
    setTimeout(() => {
      this.atualizarData()
    }, 200)
  },

  methods: {
    alterarTema () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem(
        'portifolio/tema',
        this.$vuetify.theme.dark
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
    },
    openUrl (url) {
      const route = this.$router.resolve({ path: url })

      if (url) {
        this.$router.push(route.href)
      }
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
