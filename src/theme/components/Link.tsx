import type { ComponentStyleConfig } from '@chakra-ui/theme';


const Link : ComponentStyleConfig = {
    baseStyle: (props) => ({
        color: 'muted',
        display: 'flex',
        alignItems: 'center',
        fontSize: {base: '16px', lg:'1.2vw'},
        letterSpacing: '0.1px',
        _hover: {
            textDecoration: 'none',
            color: 'brand.primary',
        },
       
        
    }),

    variants: {
      topLink: ({colorMode}) => ({
        fontSize: {base: '16px', lg: '1.3vw'},
        color: colorMode === 'light' && 'regular',
        marginLeft: '8',
        position: 'relative',
      }),
      activeTop: ({colorMode}) => ({
        fontSize: {base: '16px', lg: '1.3vw'},
        color: 'brand.primary',
        marginLeft: '8',
        position: 'relative',
        fontWeight:'600',
        _before: {
            content:'" "',
            width: '20px',
            height: '2px',
            bg: 'brand.primary',
            position: 'absolute',
            top: '100%',
            left: '25%'
        }
      }),
      active: {
          color: 'brand.primary',
          fontWeight:'600',

      }
    }
}


export default Link;