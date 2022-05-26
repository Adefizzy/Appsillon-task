import React, { useState } from 'react';
import { Props } from 'framer-motion/types/types';
import {
  Box,
  Text,
  Flex,
  Image,
  Center,
  Button,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';
import logo from '../images/logo.png';
import ProfileImage from '../images/profileImage.jpeg';
import { BiPlus } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { NavProps } from '../types';
import CompanyLogo from '../images/CompanyLogo';
import UserAccount from '../images/UserAccount';
import ReportLogo from '../images/ReportLogo';
import PolicyLogo from '../images/PolicyLogo';
import HistoryLogo from '../images/HistoryLogo';
import OverviewLogo from '../images/OverviewLogo';
import SingleNav from './atoms/SingleNav';

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

const SideBar: React.FC<Props> = (props: Props) => {
  const [navState, setNavState] = useState(sideBarNav);
  const [isLargeScreen] = useMediaQuery('(min-width: 768px)');

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
        key={nav.name}
      />
    );
  });

  return (
   
    <Flex
      height='100%'
      flexDirection='column'
      width='100%'
      justifyContent='space-between'
    >
      <Flex
        flexDirection='column'
        alignItems='center'
        width={{ base: '100%', lg: '90%' }}
        m='0 auto'
      >
        <Flex py='6' alignItems='center' justifyContent='center'>
          {isLargeScreen ? (
            <Image
              src={logo}
              alt='logo'
              objectFit='contain'
              boxSize={{ sm: '16px', md: '24px', lg: '2.5vw' }}
            />
          ) : (
            <Image src={logo} alt='logo' objectFit='contain' boxSize='40px' />
          )}

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
      <Flex mt='10' pb='4' alignItems='flex-end' justifyContent='center' flex='1'>
        <Link variant ='bold'>
          <FiLogOut />
          <Box ml='2'>Logout</Box>
        </Link>
      </Flex>

    
    </Flex>
  );
};

export default SideBar;
