/* eslint-disable  */

import { localize, ValidationObserver, ValidationProvider, extend, setInteractionMode } from 'vee-validate'
import{ alpha, confirmed, email, length, max, max_value, min, min_value, numeric, required } from 'vee-validate/dist/rules'
import Vue from 'vue'
import br from 'vee-validate/dist/locale/pt_BR'

extend('alpha', alpha)
extend('confirmed', confirmed)
extend('email', email)
extend('length', length)
extend('max', max)
extend('max_value', max_value)
extend('min', min)
extend('min_value', min_value)
extend('numeric', numeric)
extend('required', required)

localize('pt_BR', br)
setInteractionMode('passive')

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)