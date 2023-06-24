const  { Schema, model }=require('mongoose');

const pokemonSchema = new Schema({
    name:{
        type:String

    },
  breed: {
    type: String,
    // required: true,
  },
  age: {
    type: Number,
    // required: true,
  },
  healthStatus: {
    type: String,
    enum: ['Healthy', 'Unhealthy'],
    default: 'Healthy',
  },
  lastFedAt: {
    type: Date,
    default: Date.now,
  },
});

const Pokemon = model('Pokemon', pokemonSchema);

module.exports=Pokemon;