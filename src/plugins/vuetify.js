import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    dark: true,
    themes: {
      dark: {
        primary: '#2261ef',
        background: '#000027',
        secondary: '#110951',
        accent: '#424242',
        error: '#eb2f06',
        info: '#2979FF',
        success: '#009C4D',
        warning: '#F2C037'
      }
    }
  }
})
