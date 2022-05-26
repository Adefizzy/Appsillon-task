import React, { useState } from 'react';
import { Props } from 'framer-motion/types/types';
import {
  ParentBox,
  StyledTextBox,
  InnerBox,
  UpperBox,
  SmallBox,
  SmallBoxCover,
} from './style';
import {
  Box,
  Text,
  Flex,
  Button,
  Input,
  useMediaQuery,
} from '@chakra-ui/react';

const Banner: React.FC<Props> = (props: Props) => {
  const [isLargeScreen] = useMediaQuery('(min-width: 768px)');
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText('NEWBIE20');
   const  timer = setTimeout(() => {
       setIsCopied(false);
        clearTimeout(timer);
    }, 3000);
  };

  return isLargeScreen ? (
    <ParentBox width='95%' mx='auto' mt='7' boxShadow='md' height='45vh'>
      <InnerBox islarge={`${isLargeScreen}`} width='100%' height='100%'>
        <StyledTextBox>
          <Box>
            <Text color='regular' mr='10' size='4xl' variant='normalBold'>
              20% Safe On Your First Account
            </Text>
            <Flex alignItems='center' justifyContent='center'>
              <Box alignItems='center' flexBasis='30%'>
                <Input
                  color='regular'
                  size='lg'
                  border='1px dashed red'
                  borderColor='#000'
                  placeholder='Basic usage'
                  value='NEWBIE20'
                  readOnly
                />
              </Box>

              <Button flexBasis='30%'  onClick={onCopy} variant='ghost' ml='4'>
                <Text color='regular' size='2xl' variant='normalBold'>
                  {isCopied ? 'Copied!' : 'Copy Code'}
                </Text>
              </Button>
            </Flex>
          </Box>
        </StyledTextBox>
        <UpperBox width='100%' height='100%'></UpperBox>
      </InnerBox>
    </ParentBox>
  ) : (
    <SmallBox width='95%' mx='auto' mt='7' boxShadow='md' height='45vh'>
      <SmallBoxCover>
        <Text
          textAlign='center'
          color='regular'
          size='4xl'
          variant='normalBold'
        >
          20% Safe On Your First Account
        </Text>
        <Flex mt='4' alignItems='center' justifyContent='center'>
          <Box alignItems='center' flexBasis='40%'>
            <Input
              color='regular'
              size='lg'
              border='1px dashed red'
              borderColor='#000'
              placeholder='Basic usage'
              value='NEWBIE20'
              readOnly
            />
          </Box>
          <Button flexBasis='40%' onClick={onCopy} variant='ghost' ml='2'>
            <Text color='regular' size='2xl' variant='normalBold'>
            {isCopied ? 'Copied!' : 'Copy Code'}
            </Text>
          </Button>
        </Flex>
      </SmallBoxCover>
    </SmallBox>
  );
};

export default Banner;
