declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vuetify/lib/locale/pt' {
  import 'vuetify/lib/locale/pt'
}

declare module 'vue-perfect-scrollbar'

declare module 'vue-avatar'

declare module 'vue-ctk-date-time-picker'

interface Validator extends Element {
  validate(): Promise<Boolean>
  reset(): Promise<void>
}
