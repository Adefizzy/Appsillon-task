import React from 'react';
import { Props } from 'framer-motion/types/types';
import {
    Box,
  } from '@chakra-ui/react';

const ProgressBar: React.FC<Props> = (props: Props) => {
    return (
      <Box width='100%' height='4px' bg='#ECECEC' rounded='sm'>
        <Box
          width={props.percentage}
          height='100%'
          rounded='sm'
          bgGradient={`linear(to-r, ${props.firstColor}, ${props.secondColor})`}
        ></Box>
      </Box>
    );
  };

  export default ProgressBar;