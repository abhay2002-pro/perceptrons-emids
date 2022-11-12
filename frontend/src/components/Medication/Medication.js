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
  import React, {useState} from 'react';
  import Audio from "../Audio"

  function Request() {
    const [generic, setGeneric] = useState("");
    const [rxnorm, setRxnorm] = useState("");
    const [brand, setBrand] = useState("");
    const [dosage, setDosage] = useState("");
    const [route, setRoute] = useState("");
    const [frequency, setFrequency] = useState("");
    const [addinfo, setAddinfo] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault()
    }
    return (
      <Container minH={'95vh'} maxW="container.lg" paddingY="8">
        <VStack h="full" justifyContent="center" spacing="16">
          <Heading children="Add New Prescription" m={'8'} />
          <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <FormControl my="4">
              <FormLabel htmlFor="rxnorm">
              RxNorm Code
              <Audio setData={setRxnorm}/>
              </FormLabel>
              <Input
                id="rxnorm"
                placeholder="parac"
                type="text"
                value={rxnorm}
                onChange={(e)=>{
                  setRxnorm(e.target.value)
                }}
                focusBorderColor="#16a085"
              />
              <FormErrorMessage>RxNorm code is required.</FormErrorMessage>
            </FormControl>
            <FormControl my="4">
              <FormLabel htmlFor="generic">
              Generic Name
              <Audio setData={setGeneric}/>
              </FormLabel>
              <Input
                id="generic"
                placeholder="paracetamol"
                type="text"
                value={generic}
                onChange={(e)=>{
                  setGeneric(e.target.value)
                }}
                focusBorderColor="#16a085"
              />
              <FormErrorMessage>Generic name is required.</FormErrorMessage>
            </FormControl>
            <FormControl my="4">
              <FormLabel htmlFor="brand">
              Brand Name
              <Audio setData={setBrand}/>
              </FormLabel>
              <Input
                id="brand"
                placeholder="Dolo"
                type="text"
                value={brand}
                onChange={(e)=>{
                  setBrand(e.target.value)
                }}
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
                value={dosage}
                onChange={(e)=>{
                  setDosage(e.target.value)
                }}
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
                value={route}
                onChange={(e)=>{
                  setRoute(e.target.value)
                }}
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
                value={frequency}
                onChange={(e)=>{
                  setFrequency(e.target.value)
                }}
                focusBorderColor="#16a085"
              />
              <FormErrorMessage>Route is required.</FormErrorMessage>
            </FormControl>
            <FormControl my="4">
              <FormLabel htmlFor="additional"> 
              Additional information
              <Audio setData={setAddinfo}/>
              </FormLabel>
              <Input
                id="additional"
                type="text"
                value={addinfo}
                onChange={(e)=>{
                  setAddinfo(e.target.value)
                }}
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
  