import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Heading, Stack, Text, VStack } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import vector from '../assests/images/home.png';
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <Stack
        direction={['column', 'row']}
        height="100%"
        justifyContent={['center', 'space-between']}
        alignItems="center"
        spacing={['16', '56']}
      >
        <VStack width={'full'} alignItems={['centre', 'flex-end']} spacing="8">
          <Heading children="Get treated by experts" size={'2xl'} />
          <Text
            alignItems={['center', 'left']}
            fontSize="2xl"
            children="Find the best physicians treatment"
          />
          <Link to="/medication">
            <Button size={'lg'} style={{ color: '#16a085' }}>
              Explore now
            </Button>
          </Link>
        </VStack>
        <Image
          className="vector-graphics"
          boxSize={'md'}
          src={vector}
          objectFit="contain"
        />
      </Stack>
    </div>
  );
}

export default Home;
