import { extendTheme } from '@chakra-ui/react'
import { theme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

import '@fontsource/inter/variable.css'

const styles = {
  global: (props: any) => ({
    body: {
      color: '#1a1d21',
      bg: 'white',
      fontSize: 'lg',
      _dark: {
        color: 'white',
        bg: '#1a1d21',
      },
    },
  }),
}

export default extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles,
    fontSizes,
    components,
  },
  theme
)
