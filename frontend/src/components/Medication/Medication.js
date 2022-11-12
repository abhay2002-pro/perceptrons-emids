import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';

  function Request() {
    return (
      <Container minH={'95vh'} maxW="container.lg" paddingY="8">
        <VStack h="full" justifyContent="center" spacing="16">
          <Heading children="Add New Medication" m={'8'} />
          <form style={{ width: '100%' }}>
            <FormControl my="4">
              <FormLabel htmlFor="rxnorm" children="RxNorm Code" />
              <Input
                id="rxnorm"
                placeholder="parac"
                type="text"
                focusBorderColor="#16a085"
              />
              <FormErrorMessage>RxNorm code is required.</FormErrorMessage>
            </FormControl>
            <FormControl my="4">
              <FormLabel htmlFor="generic" children="Generic Name" />
              <Input
                id="generic"
                placeholder="paracetamol"
                type="text"
                focusBorderColor="#16a085"
              />
              <FormErrorMessage>Generic name is required.</FormErrorMessage>
            </FormControl>
            <FormControl my="4">
              <FormLabel htmlFor="brand" children="Brand Name" />
              <Input
                id="brand"
                placeholder="Dolo"
                type="text"
                focusBorderColor="#16a085"
              />
              <FormErrorMessage>Brand name is required.</FormErrorMessage>
            </FormControl>
            <FormControl my="4">
              <FormLabel htmlFor="dosage" children="Dosage(MAEN)" />
              <Input
                id="dosage"
                placeholder="1010"
                type="text"
                focusBorderColor='#16a085'
              />
              <FormErrorMessage>Dosage is required.</FormErrorMessage>
            </FormControl>
            <FormControl my="4">
              <FormLabel htmlFor="route" children="Route" />
              <Input
                id="route"
                placeholder="1010"
                type="text"
                focusBorderColor="#16a085"
              />
              <FormErrorMessage>Route is required.</FormErrorMessage>
            </FormControl>
            <FormControl my="4">
              <FormLabel htmlFor="Frequency" children="Frequency(day)" />
              <Input
                id="frequency"
                placeholder="3"
                type="text"
                focusBorderColor="#16a085"
              />
              <FormErrorMessage>Route is required.</FormErrorMessage>
            </FormControl>
            <FormControl my="4">
              <FormLabel htmlFor="additional" children="Additional information" />
              <Input
                id="additional"
                type="text"
                focusBorderColor="#16a085"
              />
            </FormControl>
            <Button my="4" style={{ color: '#16a085' }} type="submit">
              Add 
            </Button>
          </form>
        </VStack>
      </Container>
    );
  }
  
  export default Request;
  