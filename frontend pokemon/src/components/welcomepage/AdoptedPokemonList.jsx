import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AdoptedPokemonList(props) {
  const [adoptedPokemonList, setAdoptedPokemonList] = useState([]);







  return (
    <div>
      <h2>Adopted Pokemon</h2>
      {
        props.data.map((item)=>{
          return <ul>
      <li>id:{item.id} - name:{item.name} - age:{item.age} - Breed:{item.breed}</li>
   

          </ul>
       
        })
      }
     
    </div>
  );
}

export default AdoptedPokemonList;