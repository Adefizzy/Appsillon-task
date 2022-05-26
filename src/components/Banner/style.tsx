import styled from 'styled-components';
import { Box, Center, Flex } from '@chakra-ui/react';
import bg1 from '../../images/pngs/Area_2.png';
import bg2 from '../../images/pngs/area3.png';
import bg3 from '../../images/pngs/insurance.png';

export const UpperBox = styled(Box)`
  background-image: url(${bg2}), url(${bg1});
  background-position: 85% 117%, 100% 65%;
  background-repeat: no-repeat, no-repeat;
  background-size: 106%, 100%;
  overflow: hidden;
  backdrop-filter: opacity(10%);
  filter: opacity(10%);
`;

export const InnerBox = styled(Box)`
  background-image: url(${bg3});
  background-size: ${(props) => (props.islarge ? '53%' : '110%')};
  background-repeat: no-repeat;
  background-color: #f8f9ff;
`;

export const StyledTextBox = styled(Flex)`
  z-index: 10;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  justify-content: flex-end;
  align-items: center;
`;

export const ParentBox = styled(Box)`
  position: relative;
`;

export const SmallBox = styled(Box)`
  background-image: url(${bg2}), url(${bg1});
  background-position: 80% 100%, left bottom ;
  background-repeat: no-repeat, no-repeat;
  background-size: 200%, 200%;
  overflow: hidden;
`;

export const SmallBoxCover = styled(Center)`
    height:100% ;
    width:100% ;
    background-color: rgba(255, 255, 255, 0.7);
    flex-direction: column ;

`
