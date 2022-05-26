import * as React from 'react';
import { Props } from 'framer-motion/types/types';
import {
    Box,
    Text,
  } from '@chakra-ui/react';
  import BarWithTitle from './BarWithTitle';
  import ProgressBar from './ProgressBar';

const StatCard: React.FC<Props> = (props: Props) => {
    return (
      <Box flexBasis={{base:'100%', md: '48%', lg: '32%'}} mb='6' boxShadow='md' py='4' px='6' pb='10'>
        <Text size='5xl'>
          {props.mainAmount}
          <Box as='sup' color='brand.primary'>
            $
          </Box>
        </Text>
        <Text size='md'>Total Value of Disbursement</Text>
        <BarWithTitle type='Policy' amount={props.policyAmount}>
          <ProgressBar
            percentage={props.policyPercent}
            firstColor='brand.secondary'
            secondColor='#50EDB8'
          />
        </BarWithTitle>
  
        <BarWithTitle type='Claim' amount={props.claimAmount}>
          <ProgressBar
            percentage={props.claimPercent}
            firstColor='#713BDB'
            secondColor='#A886E9'
          />
        </BarWithTitle>
      </Box>
    );
  };


  export default StatCard;