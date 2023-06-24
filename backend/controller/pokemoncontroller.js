// Get all available Pokemon

const Pokemon=require('../model/pokemon');
const Feed=require('../model/Feed')
const mongodb=require('mongodb')


exports.getAllPokemon=async(req, res)=> {
    console.log("getAllPokemon function")
    try {
      const pokemon = await Pokemon.find();
    //   console.log(pokemon);
      res.json(pokemon);
    } catch (error) {
      console.error('Error getting Pokemon:', error);
      res.status(500).json({ error: 'Failed to get Pokemon' });
    }
  }

  exports.postpokemon=async(req,res)=>{

    const breed= req.body.Breed;
    const name= req.body.name;
    const age= req.body.age;
    const health= req.body.health;
    // console.log(req.body)

    // console.log(breed,name,age,health)


    const resu =new Pokemon({name:name,breed:breed,age:age,health:health}) ;
    // console.log(resu);
    await resu.save(); 

  }


  exports.postPokemonFeed=async(req,res)=>{
    // console.log(req.body);
    // console.log( req.userId);
    const id=req.body._id;
    const breed= req.body.breed;
    const name= req.body.name;
    const age= req.body.age;
    const health= req.body.health;
    const userId=req.userId;

    const isValidId=await Feed.findOne({id:id });

    if(isValidId){
        res.status(201).json({msg:"You are already Adopted"})
    }else{
        const FeedPokemon=new Feed({userId,breed,age,health,name,id});
        await FeedPokemon.save();
        res.status(200).json({msg:"Adopted pokemon"});

    }




    // res.send("heyudgyqwhbk");

  }

  exports.getPokemonFeed=async(req,res)=>{
    // const userId=req.userId;
    // console.log(userId);

    try{
        const feeddata=await Feed.find();
        console.log("feeddata")
        res.status(200).json({datafeed:feeddata});

    }catch(err){
        console.log("error here ")
        throw err
    }
    // res.send("hello ")
  }
