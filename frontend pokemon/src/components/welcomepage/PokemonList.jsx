import React, { useState, useEffect } from 'react';
import './pokemon-list.css'
import axios from 'axios';
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react';
  import AdoptedPokemonList from './AdoptedPokemonList';








function PokemonList() {
    const [show,setshow]=useState(false)
  const [pokemonList, setPokemonList] = useState([]);
  const [name,setname]=useState("");
  const [Breed,setBreed]=useState("");
  const [data ,setdata]=useState([])

const [age,setage]=useState("");

const [health,sethealth]=useState("");

useEffect(async()=>{
    const token=localStorage.getItem("token")
    console.log(token)

    const res = await  axios.get("http://localhost:4000/user/pokemon",{
        headers:{
            'Authorization':localStorage.getItem('token')
        }
    })
  
    console.log(res);
  
    if(res.status==200){
      setPokemonList(res.data)
    }
  
  },[])
 

// getdata();
  const obj={name,Breed,age,health};
  console.log(obj);

  const onSubmithandler=async(e)=>{
    e.preventDefault()
    const token =localStorage.getItem('token')
    console.log(token)
    // getdata();
  const res = await axios.post("http://localhost:4000/user/pokemon",obj,{
    headers:{
        "Authorization":token,
    }
  })
  }

  const adoptHandler=async(objAdopt)=>{
    const token =localStorage.getItem("token");
    // console.log(token)


    const res =await axios.post("http://localhost:4000/user/adopted",objAdopt,{
        headers:{
            "Authorization":token
        }
    })
    if(res.status==200){
        alert(res.data.msg);
    }else{
        alert(res.data.msg);
    }

  }
  const adoptedpokeman =async(e)=>{
    e.preventDefault();
    console.log("clicked")

    const res=await axios.get('http://localhost:4000/user/adopted')

        console.log( res)
        setdata(res.data.datafeed);

  }



  return (
    <>
    <div>

        {/* form.........................../. */}



        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Virtual Pokemon Adoption App
      </Heading>

      <Button onClick={adoptedpokeman}>Adopted pokemon</Button>
      <AdoptedPokemonList data={data}/>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            NAME
          </FormLabel>
          <Input id="first-name" placeholder=" name" onChange={(event)=>setname(event.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Breed
          </FormLabel>
          <Input id="last-name" placeholder="Breed" onChange={(event)=>setBreed(event.target.value)}/>
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
       AGE
        </FormLabel>
        <Input id="email" type="text" onChange={(event)=>setage(event.target.value)} />
      
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Health
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type='text'
            placeholder="Health"
            onChange={(event)=>sethealth(event.target.value)}
          />
          <InputRightElement width="4.5rem">
           

            <Button onClick={onSubmithandler} style={{background:"blue"}}>Submit </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <h2>Pokemon List</h2>
      <div className="pokemon-list">
        {pokemonList.map(pokemon => (
          <div className="pokemon-card" key={pokemon._id}>
             <h3>{pokemon.name}</h3> 
             <p>Breed: {pokemon.breed}</p>
            <p>Age: {pokemon.age}</p>
            <p>Health Status: {pokemon.healthStatus}</p>

            <Button style={{background:"blue"}} onClick={adoptHandler.bind('null',pokemon)}> Adopt</Button>
          </div> 
         ))} 
      </div>
    </div>
    </>
  );
}

export default PokemonList;