import React from 'react';
import { Props } from 'framer-motion/types/types';
import { Link, Box } from '@chakra-ui/react';


const SingleNav: React.FC<Props> = (props: Props) => {
    return (
      <Link
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseLeave}
        width='70%'
        mt='6'
        variant={props.variant}
      >
        <Box fontSize={{ base: '20px', lg: '1.8vw' }} mr='5'>
          {props.icon}
        </Box>
        <Box>{props.name}</Box>
      </Link>
    );
};

export default SingleNav;