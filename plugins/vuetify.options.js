import pt from 'vuetify/lib/locale/pt'
import theme from '~/theme.json'

export default {
  breakpoint: {},
  icons: {
    iconfont: 'mdi',
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
  rtl: false,
  theme: {
    dark: true,
    themes: {
      light: {
        primary: theme['primary-color'],
        secondary: theme['secondary-color'],
        accent: theme['accent-color'],
        error: theme['error-color'],
        info: theme['info-color'],
        success: theme['success-color'],
        warning: theme['warning-color'],
        danger: theme['danger-color'],
        light: theme['light-color'],
        dark: theme['dark-color'],
        base: theme['base-color'],
        'base-light': theme['base-light-color'],
        'gray-dark': theme['gray-dark-color'],
        gray: theme['gray-color'],
        'gray-light': theme['gray-light-color'],
        'gray-lighter': theme['gray-lighter-color'],
      },
      dark: {
        primary: theme['primary-color'],
        secondary: theme['secondary-color'],
        accent: theme['accent-color'],
        error: theme['error-color'],
        info: theme['info-color'],
        success: theme['success-color'],
        warning: theme['warning-color'],
        danger: theme['danger-color'],
        light: theme['light-color'],
        dark: theme['dark-color'],
        base: theme['base-color'],
        'base-light': theme['base-light-color'],
        'gray-dark': theme['gray-dark-color'],
        gray: theme['gray-color'],
        'gray-light': theme['gray-light-color'],
        'gray-lighter': theme['gray-lighter-color'],
      },
    },
  },
}
