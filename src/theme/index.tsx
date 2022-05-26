import { extendTheme,  type ThemeConfig  } from "@chakra-ui/react";
import Text from './components/Text';
import Button from './components/Button';
import Link from './components/Link';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { Dict } from "@chakra-ui/utils";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
    config,
    fonts: {
        heading:  `'Segoe Body',  sans-serif`,
        body:  `'Segoe Body',  sans-serif`,
      },
    colors: {
      brand: {
        100: '#888CB7',
        primary: "#713BDB",
        secondary: "#33D69F",
      },
      darkGreen: '#0B6666',
      muted: '#A2A4B9',
      regular:'#42474A',
      bgColor: '#F4F5F9'
    },
    components: {
        Text,
        Button,
        Link,
    },
    layerStyles: (props: StyleFunctionProps) => ({
      muted: {
        color: props.colorMode === 'dark' ? 'white' : '#64748b',
      },
      dark: {
        color: props.colorMode === 'dark'? 'white': 'black',
      },
      backLayer: {
        bg: props.colorMode === "light" ? "bgColor" : 'red'
      },
      foreground: {
        bg: props.colorMode === "light"? "white": 'red'
      },
      base: {
        bg: "gray.50",
        border: "2px solid",
        borderColor: "gray.500",
      }
    }),
    styles: {
        global: (props: Dict<any> | StyleFunctionProps) => ({
            fontFamily: `'Segoe Body',  sans-serif`,
        })
    },
})

export default theme;