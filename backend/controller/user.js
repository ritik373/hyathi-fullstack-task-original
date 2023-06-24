const MongoConnect = require("../utils/database");
const bcrypt = require('bcryptjs');
const User = require('../model/user')
const jwt=require('jsonwebtoken');
exports.Registration = async (req, res) => {

    console.log("registration records");
    try {
        console.log(req.body);
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;


        const emailvalid = await User.findOne({ email: email });
        // console.log(emailvalid);
        if (emailvalid) {
            res.status(201).json({ msg: "User Already Exits" })

        } else {
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            // Create a new user
            const user = new User({ username: name, password: hashedPassword, email: email });

            // Save the user to the database
            await user.save();
            res.status(200).json({ msg: 'User registered successfully' });
        }
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }



}

exports.LogIn = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body

    try {
        const Uservalid = await User.findOne({ email: email })
        // console.log(Uservalid);
        if (!Uservalid) {
            return res.status(404).json({ msg: "User not found", success: false });

        } else {
            bcrypt.compare(password, Uservalid.password, (err, result) => {

                if (err) {
                    throw err;
                }
                if (result) {
                    // console.log(result)
                    const token = jwt.sign({ userId: Uservalid._id }, 'secret_key');
                    return res.status(200).json({
                        message: "User logged in successfully",
                        token:token,
                        success: true,

                    });

                } else {
                    res.status(404).json({ message: "Incorrect passowrd", success: false });

                }

            })


        }

    } catch (err) {
        console.log("error-:" + err);
    }

    // await MongoConnect().then((data)=>{
    //     data.findOne({email:email}).then(success=>{
    //         // console.log(success)
    //         if(!success){
    //             // console.log("check "+success)
    //             return res.status(404).json({ err: "User not found", success: false });

    //         }else{

    //             bcrypt.compare(password,success.password,(err,results)=>{
    //                 if(err){
    //                     throw err;
    //                 }
    //                 if(results){
    //                     return res.status(200).json({
    //                         message: "User logged in successfully",
    //                         success: true, 

    //                       });

    //                 }else{
    //                     res.status(404).json({ message: "Incorrect passowrd", success: false });

    //                 }
    //             })

    //         }
    //     })

    // })


}