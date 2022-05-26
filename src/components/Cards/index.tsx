import  React from 'react';
import { Props } from 'framer-motion/types/types';
import { Flex } from '@chakra-ui/react';
import StatCard from '../atoms/StatCard';


const Index:React.FC<Props> = (props: Props) => {
    return (
        <Flex width='95%' mx='auto' py='5' justifyContent='space-between' flexWrap='wrap'>
            <StatCard
              mainAmount='1000'
              policyAmount='400'
              claimAmount='800'
              policyPercent='30%'
              claimPercent='80%'
            />
            <StatCard
              mainAmount='2500'
              policyAmount='1100'
              claimAmount='1400'
              policyPercent='60%'
              claimPercent='70%'
            />
            <StatCard
              mainAmount='2500'
              policyAmount='1100'
              claimAmount='1400'
              policyPercent='60%'
              claimPercent='70%'
            />
          </Flex>
    );
};

export default Index;