const express=require("express")
const app=express();
const bodyparcer=require('body-parser');
const cors=require("cors");
const mongoconnect=require('./utils/database')





app.use(cors());
app.use(bodyparcer.json())
app.use(bodyparcer.urlencoded({extended: true}));


const UserRoutes=require("./Router/UserRoutes")
app.use('/user',UserRoutes)

app.listen(4000,(req,res)=>{
    mongoconnect();
    console.log("listening on this  port 4000 .... ")
})
