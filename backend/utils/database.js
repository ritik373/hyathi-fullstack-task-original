// const mongodb = require("mongodb");
const mongose=require('mongoose');

// const MongoesClient = mongodb.MongoClient;

// let _db;
const MongoConnect = async () => {



    mongose.connect('mongodb://127.0.0.1/RegistorUsers', { useNewUrlParser: true, useUnifiedTopology: true,})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
   
    console.error('Error connecting to the database:', error);
  });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

    // try {
        
    //     const client = await MongoesClient.connect("mongodb://127.0.0.1:27017")
    //     const database = client.db('RegistorUsers');
    //     console.log("connection successfull");
    //       return  database.collection('users');

     


    // } catch (err) {
    //     console.log(err);
    // }
}




module.exports = MongoConnect;
