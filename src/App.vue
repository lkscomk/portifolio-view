<template>
  <v-app>
    <notificacao />
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

  created () {
    this.$vuetify.theme.dark = Boolean(window.atob(localStorage.getItem('portifolio/tema')))
  }
}
</script>
