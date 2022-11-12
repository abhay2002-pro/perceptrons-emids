import { Button } from '@chakra-ui/button';
import React from 'react';
import { RiMenu5Fill } from 'react-icons/ri';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { useDisclosure } from '@chakra-ui/hooks';
import { HStack, VStack } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        style={{ color: '#16a085' }}
        width="12"
        height="12"
        rounded="full"
        position="fixed"
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(2px)'} />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            display="flex"
            alignContent="center"
          >
            {' '}
            PERCEPTRONS
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing="5" alignItems="flex-start">
              <Link to="/" onClick={onClose}>
                <Button variant="ghost">Home</Button>
              </Link>
              <Link to="/medication" onClick={onClose}>
                <Button variant="ghost">New Medication</Button>
              </Link>
              <Link to="/contact" onClick={onClose}>
                <Button variant="ghost">Contact Us</Button>
              </Link>
              <Link to="/about" onClick={onClose}>
                <Button variant="ghost">About</Button>
              </Link>

              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom="2rem"
                width="80%"
              >
                <Link to="/login">
                  <Button style={{ color: '#16a085' }} onClick={onClose}>
                    Login
                  </Button>
                </Link>
                <p>OR</p>
                <Link to="/register">
                  <Button style={{ color: '#16a085' }} onClick={onClose}>
                    Sign Up
                  </Button>
                </Link>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
