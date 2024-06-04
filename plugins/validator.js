import Vue from 'vue'


import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
} from 'vee-validate'

import {
  required,
  email,
  numeric,
  min_value,
  max_value,
  confirmed,
  digits,
} from 'vee-validate/dist/rules'

import en from 'vee-validate/dist/locale/en.json'
import ptBR from 'vee-validate/dist/locale/pt_BR.json'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// LANGUAGE
localize({ en, ptBR })
localize('ptBR')

// RULES
extend('email', email)
extend('minmax', {
  validate(value, { min, max }) {
    return (value.length >= min && value.length <= max) || `O campo {_field_} deve ter entre ${min} e ${max} dígitos.`;
  },
  params: ['min', 'max']
});

extend('confirm', {
  validate(value, { password }) {
    return (value === password) || `Confirmação de senha inválida.`;
  },
  params: ['password']
});
