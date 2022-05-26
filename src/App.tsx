import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  GridItem,
  Flex,
  Image,
  Center,
  Button,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import theme from './theme';
import Fonts from './theme/Font';
import logo from './images/logo.png';
import ProfileImage from './images/profileImage.jpeg';
import { BiPlus } from 'react-icons/bi';
import { FiGrid } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { NavProps } from './types';
import { RiBug2Line } from 'react-icons/ri';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import Company from './images/company.svg';
import CompanyLogo from './images/CompanyLogo';
import UserAccount from './images/UserAccount';
import ReportLogo from './images/ReportLogo';
import PolicyLogo from './images/PolicyLogo';
import HistoryLogo from './images/HistoryLogo';
import OverviewLogo from './images/OverviewLogo';
import { Props } from 'framer-motion/types/types';

const sideBarNav: NavProps[] = [
  {
    icon: OverviewLogo,
    url: './',
    name: 'Overview',
    color: '#A2A4B9',
  },
  {
    icon: PolicyLogo,
    url: './',
    name: 'Policy',
    color: '#A2A4B9',
  },
  {
    icon: ReportLogo,
    url: './',
    name: 'Report',
    color: '#A2A4B9',
  },
  {
    icon: CompanyLogo,
    url: './',
    name: 'Company',
    color: '#A2A4B9',
  },
  {
    icon: UserAccount,
    url: './',
    name: 'User Account',
    color: '#A2A4B9',
  },
  {
    icon: HistoryLogo,
    url: './',
    name: 'History',
    color: '#A2A4B9',
  },
];

export const App = () => {
  const [navState, setNavState] = useState(sideBarNav);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleMouseOver = (name: string) => {
    let prevNavs: NavProps[] = [...navState];

    prevNavs = prevNavs.map((nav) => {
      if (nav.name === name) {
        nav.color = '#713BDB';
        return nav;
      }
      return nav;
    });

    setNavState(prevNavs);
  };

  const handleMouseLeave = (name: string) => {
    let prevNavs: NavProps[] = [...navState];

    prevNavs = prevNavs.map((nav) => {
      if (nav.name === name) {
        nav.color = '#A2A4B9';
        return nav;
      }
      return nav;
    });

    setNavState(prevNavs);
  };

  const navList = [...navState].map((nav) => {
    const Icon = nav.icon;
    return (
      <SingleNav
        onMouseOver={() => handleMouseOver(nav.name)}
        onMouseLeave={() => handleMouseLeave(nav.name)}
        icon={<Icon color={nav.color} />}
        name={nav.name}
        key={nav.url}
      />
    );
  });

  console.log({ colorMode });
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Grid
        minH='100vh'
        templateRows='repeat(12, 1fr)'
        templateColumns='repeat(10, 1fr)'
      >
        <GridItem
          rowSpan={12}
          display={{ base: 'none', md: 'inline-block' }}
          colSpan={{ base: 0, md: 2 }}
          pb='6'
          boxShadow='2xl'
          borderBottomRightRadius='xl'
        >
          <Flex
            flexDirection='column'
            alignItems='center'
            width={{ base: '100%', lg: '90%' }}
            m='0 auto'
          >
            <Flex py='6' alignItems='center' justifyContent='center'>
              <Image
                src={logo}
                alt='logo'
                objectFit='contain'
                boxSize={{ md: '24px', lg: '2.5vw' }}
              />
              <Text ml='2' variant='blackBold' size='md'>
                Insurance Portal
              </Text>
            </Flex>
            <Center
              w='13vh'
              h='13vh'
              bgGradient='linear(to-t, darkGreen, white 70%)'
              borderRadius='full'
              mt='6'
            >
              <Box
                overflow='hidden'
                w='12vh'
                h='12vh'
                borderRadius='full'
                bg='#fff'
              >
                <Image src={ProfileImage} objectFit='cover' />
              </Box>
            </Center>
            <Box textAlign='center'>
              <Text mt='2' variant='colorfulBold' size='md'>
                Hello ! Adeniji Adefisayo
              </Text>
              <Text variant='muted' size='xs'>
                Welcome Back To Your Insurance Portal
              </Text>
              <Flex justifyContent='center'>
                <Text variant='muted' size='sm'>
                  Your Plan
                </Text>
                <Text variant='muted' size='sm' mx='1'>
                  :
                </Text>
                <Text variant='secondary' size='sm'>
                  Free
                </Text>
              </Flex>
            </Box>
            <Button mt='6' mb='7' rightIcon={<BiPlus />}>
              Create new plan
            </Button>
            {navList}
          </Flex>
        </GridItem>
        <GridItem
          layerStyle='background'
          rowSpan={12}
          colSpan={{ base: 10, md: 8 }}
        >
          <Flex
            py='6'
            alignItems='center'
            width='100%'
            boxShadow='md'
            justifyContent='space-between'
            layerStyle='foreground'
          >
            <Flex alignItems='center'>
              <Box boxSize={{ md: '24px', lg: '2.5vw' }} />
              <Link variant='topLink'>Overview</Link>
              <Link variant='topLink'>Policy</Link>
              <Link variant='activeTop'>Reports</Link>
            </Flex>
            <ColorModeSwitcher size='sm' />
          </Flex>
          <Box
            backgroundImage="url('')"
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            layerStyle='foreground'
            width='90%'
            mx='auto'
            mt='7'
            boxShadow='md'
            height='40vh'
          />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

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
