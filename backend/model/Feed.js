const  { Schema, model }=require('mongoose');


const feedPokemom=new Schema({
    userId:{
        type:String
    },
    id:{

        type:String
    },
    breed:{
        type:String
    },
    age:{
        type:String
    },
    healthStatus:{
        type:String,
        default: 'Healthy'
    },
    lastFedAt: {
        type: Date,
        default: Date.now,
      },
})

const pokemonFeed=model('feedPokemon',feedPokemom);

module.exports=pokemonFeed;