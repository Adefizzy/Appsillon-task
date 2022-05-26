import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Text: ComponentStyleConfig = {
    baseStyle: (props) => ({
        color: props.colorMode === 'dark'? '' : 'regular'
    }),
    sizes: {
        xs: {
            fontSize: {base: '10px', lg: '0.8vw'}
        },
        sm: {
            fontSize: {base: '14px', lg: '1.1vw'},
        },
        md: {
            fontSize: {base: '16px', lg: '1.3vw'},
        },
        lg: {
            fontSize: {base: '17px', lg: '1.4vw'},
        },
        xl: {
            fontSize: {base: '22px', lg: '1.6vw'},
        },
        '2xl': {
            fontSize: {base: '33px', lg: '1.8vw'},
        },
        '4xl': {
            fontSize: {base: '55px', lg: '2.5vw'},
        }
    },
    variants: {
        colorfulBold: {
            color: 'brand.100',
            fontWeight: '700',
        },
        primary: {
            color: 'brand.primary',
        },
        muted: {
            color: 'muted'
        },
        secondary: {
            color: 'brand.secondary'
        },
        blackBold: (props) => ({
            color: props.colorMode === 'light'? '#000000' :'',
            fontWeight: '600',
        })
    }
}

export default Text;