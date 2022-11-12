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
  import React, {useState, useEffect} from 'react';
  import Audio from "../Audio"
  import axios from 'axios'
import URL from '../../BASE_URL';
  function Request() {
    const [generic, setGeneric] = useState("");
    const [fname, setFname] = useState("");
    const [rxnorm, setRxnorm] = useState("");
    const [brand, setBrand] = useState("");
    const [dosage, setDosage] = useState("");
    const [route, setRoute] = useState("");
    const [frequency, setFrequency] = useState("");
    const [addinfo, setAddinfo] = useState("");
    const [medicines, setMedicines] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
      const loadMedicines = async () => {
        const response = await axios.get("api/v1/genric");
        var arr = [];
        for( var i = 0; i<response.data.GenricName.length;i++){
          if(response.data.GenricName[i].Genric) arr.push(response.data.GenricName[i].Genric);
        }
        
        setMedicines(arr);
      }
      loadMedicines();
    }, [])

    const rxnormOnChangeHandler = (code) => {
      let matches = []
      if(code.length > 0){
        matches = medicines.filter(med => {
          const regex = new RegExp(`${code}`, "gi");
          return med.match(regex);
        })
        // console.log(code, matches);
      }
      setSuggestions(matches)
      setRxnorm(code)
    }
    
    const handleSubmit = async (name) => {
      const response = await axios.post("api/v1/getdetails",{ 
        name :name ,
         weight : 50,
          age : 40,

      });
      console.log(response.data)
      setFrequency(response.data.details.frequency);
      setAddinfo(response.data.details.Additional);
      if(parseInt(response.data.dosage) > 100){
        var num = parseInt(parseInt(response.data.dosage)/100);
        num = num*100;
        setDosage(num + " " + response.data.details.unit)
      }
      else{
        var num = parseInt(parseInt(response.data.dosage)/10);
        num = num*10;
        setDosage(num + " " + response.data.details.unit)
      }
      // setDosage((parseInt(response.data.dosage)) + response.data.details.unit);
      setBrand("Cipla");
      setFname(response.data.details.FullName)
      setGeneric(name);
      setRoute(response.data.details.route);
 
    }
    return (
      <Container minH={'95vh'} maxW="container.lg" paddingY="8">
        <VStack h="full" justifyContent="center" spacing="16">
          <Heading children="Add New Prescription" m={'2'} />
          <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <FormControl my="1">
              <FormLabel htmlFor="rxnorm">
              RxNorm Code
              <Audio setData={setRxnorm}/>
              </FormLabel>
              <Input
                id="rxnorm"
                placeholder="parac"
                type="text"
                value={rxnorm}
                onChange={e => {
                  setRxnorm(e.target.value);
                  rxnormOnChangeHandler(e.target.value);
                }}
                focusBorderColor="#16a085"
              />
              {suggestions && suggestions.map((suggestion, i) => {
                console.log(suggestions)
                return <div key={i} className="suggestions" onClick={e => {
                  setRxnorm(suggestion);
                  handleSubmit(suggestion);
                  setSuggestions([]);
                }}>
                {suggestion}
                </div>
              })}
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
              <FormLabel htmlFor="fname">
              Full Name
              <Audio setData={setFname}/>
              </FormLabel>
              <Input
                id="fname"
                placeholder="paracetamol"
                type="text"
                value={fname}
                onChange={(e)=>{
                  setFname(e.target.value)
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
                placeholder="Oral"
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
              Add Prescription
            </Button>
          </form>
        </VStack>
      </Container>
    );
  }
  
  export default Request;
  