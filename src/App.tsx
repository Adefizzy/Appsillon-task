import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import theme from './theme';
import SideBar from './components/SideBar';
import TopNav from './components/TopNav';
import Cards from './components/Cards/index';
import Banner from './components/Banner/Index';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
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
          height='100%'
        >
          <SideBar />
        </GridItem>
        <GridItem rowSpan={12} colSpan={{ base: 10, md: 8 }}>
          <TopNav />
          <Banner />
          <Cards />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};
