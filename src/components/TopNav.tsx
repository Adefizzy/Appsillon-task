import React from 'react';
import { Props } from 'framer-motion/types/types';
import {
  Box,
  Flex,
  Link,
  useMediaQuery,
  Image,
  Text,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import logo from '../images/logo.png';
import { FiMenu } from 'react-icons/fi';
import DrawerSideBar from './DrawerSideBar';

const TopNav: React.FC<Props> = (props: Props) => {
  const [isLargeScreen] = useMediaQuery('(min-width: 768px)');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return isLargeScreen ? (
    <Flex
      py='6'
      alignItems='center'
      width='100%'
      boxShadow='md'
      justifyContent='space-between'
      pr='4'
    >
      <Flex alignItems='center'>
        <Box boxSize={{ md: '24px', lg: '2.5vw' }} />
        <Link variant='topLink'>Overview</Link>
        <Link variant='topLink'>Policy</Link>
        <Link variant='activeTop'>Reports</Link>
      </Flex>
      <ColorModeSwitcher size='sm' />
    </Flex>
  ) : (
    <>
      <Flex
        py='3'
        px='4'
        alignItems='center'
        width='100%'
        boxShadow='md'
        justifyContent='space-between'
        pr='4'
      >
        <Flex alignItems='center'>
          <Image src={logo} alt='logo' objectFit='contain' boxSize='40px' />
          <Text ml='2' variant='blackBold' size='md'>
            Insurance Portal
          </Text>
        </Flex>

        <Flex alignItems='center'>
        <ColorModeSwitcher size='sm' />
        <IconButton
          ml='5'
          onClick={onOpen}
          variant='ghost'
          colorScheme='blue'
          aria-label='menu'
          icon={<FiMenu />}
          size='sm'
        />
        </Flex>
        
      </Flex>
      <DrawerSideBar isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default TopNav;
