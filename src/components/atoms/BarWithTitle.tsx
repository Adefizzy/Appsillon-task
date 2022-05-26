import * as React from 'react';
import { Props } from 'framer-motion/types/types';
import {
  Box,
  Text,
  Flex,
} from '@chakra-ui/react';

const BarWithTitle: React.FC<Props> = (props: Props) => {
  return (
    <Box mt='10'>
      <Flex alignItems='center' justifyContent='space-between'>
        <Text size='md'>{props.type}</Text>
        <Text size='lg' variant='500'>
          {props.amount}
          <Box as='sup'>$</Box>
        </Text>
      </Flex>
      {props.children}
    </Box>
  );
};

export default BarWithTitle;
