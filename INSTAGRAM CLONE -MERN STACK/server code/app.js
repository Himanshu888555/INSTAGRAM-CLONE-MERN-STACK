const express = require("express")
const app=express();
const mongoose = require("mongoose")
const PORT = 5000

//calling mongouri for key that we have genrated from mongo atlas user database , 
//in key.js , we have created the object property mongouri  with key and password in it
const {MONGOURI} = require('./keys')
//InstagramClone888




mongoose.connect(MONGOURI,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeahh")
})

//if any error
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})



//user schema
require('./models/user')
//post schema
require('./models/post')


//app.use here is used for calling the middleware of the programms , i.E app = express()
// express().use(body)
app.use(express.json()) //for parsing json data 
app.use(require('./routes/auth')) //registering the route in the main file app.js
app.use(require('./routes/post'))

//-------------------------------------------------------------------------------------------------------
// const custommiddleware = (req,res,next)=> { //take incoming code it is invoked first 
//     console.log("middleware executed !!")
//     next()
// }

// // app.use(custommiddleware)


// app.get('/',(req,res)=>{

//     console.log("home")
//     res.send("hello world")
// })

// app.get('/about',custommiddleware,(req,res)=>{

//     console.log("about")
//     res.send("about page")
// })

//-------------------------------------------------------------------------------------------------------
app.listen(PORT,()=>{             // .listen for connections on the given path
    console.log("server is running on",PORT)
})


