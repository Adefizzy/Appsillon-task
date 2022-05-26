import type { ComponentStyleConfig } from '@chakra-ui/theme';


const Button: ComponentStyleConfig = {
    baseStyle: (props) => ({
        fontWeight: '700',
        borderRadius: 'md',
        textTransform: 'capitalize',
    }),
    variants: {
        solid: {
          bg: 'brand.primary',
          color: '#fff',
          _hover: {
            bg:  'purple.500',
          },
          _active: {
            bg:  'purple.500',
          }
        }
    },
    defaultProps: {
        variant: 'solid',
    },
}

export default Button;