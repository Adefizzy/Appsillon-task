import React from 'react';
import { Props } from 'framer-motion/types/types';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import SideBar from './SideBar';


const DrawerSideBar : React.FC<Props> =  (props: Props) =>  {

  
    return (
      <>
        <Drawer
          isOpen={props.isOpen}
          placement='left'
          onClose={props.onClose}
          size='xs'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
                <SideBar/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerSideBar