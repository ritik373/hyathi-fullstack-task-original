const express=require('express');
const router=express.Router();
const {Registration,LogIn} =require('../controller/user')
const {getAllPokemon,postpokemon,postPokemonFeed,getPokemonFeed} =require('../controller/pokemoncontroller')
const authenticateToken =require('../middleware/auth')

router.post('/registration',Registration);
router.post('/login',LogIn);
router.get('/pokemon',getAllPokemon)
router.post('/pokemon',authenticateToken,postpokemon)

router.post('/adopted',authenticateToken,postPokemonFeed)
router.get('/adopted',getPokemonFeed);




module.exports=router;