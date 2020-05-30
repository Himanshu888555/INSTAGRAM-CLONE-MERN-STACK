const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') //for router method to connect actual database for sign up 
const User = mongoose.model("User")   // user schema called using mongoose.model as schema will always in database
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')

// router.get('/',(req,res)=>{
//     res.send("hello")
// })


// router.get('/protected',requireLogin,(req,res)=>{
//     res.send("hello user")
// })



router.post('/signup',(req,res)=>{
    const{name,email,password}=req.body
    if(!email || !password || !name){
        res.status(422).json({error:"please add all the fields"})
    }
    User.findOne({email:email})  // findOne is the mongo db operator for finding one element in the database so here email.  then it will check email already exists or not.
    .then((saveduser)=>{
        if(saveduser){
            return res.status(422).json({error:"User is already with that email"})    //error generated if email found already in database
        }
        bcrypt.hash(password,14)
        .then(hashedpassword=>{
            const user = new User({   //create new instanse of new user with email,name,password
                email,
                password:hashedpassword,
                name
     
            })
     
              user.save()      //save the user 
              .then(user=>{
                  res.json({message:"saved successfully"})       // success msg to the user
              })
              .catch(err=>{
                  console.log(err)
              })
        })
       

    })
    .catch(err=>{console.log(err)})   
    // res.json({message:"successfully posted"})
}) 



router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(422).json({error:"please provide email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            res.status(422).json({error:"Invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"successfully signed in"})
                const token= jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,name,email}=savedUser
                res.json({token,user:{_id,name,email}})
            }
            else{
                 res.status(422).json({error:"invalid email or password"})

            }
        }).catch(err=>{
            console.log(err)   //this is for error from server site or developer site not for user errors.
        })
    })
})



module.exports = router     // exporting router code or files to other js files.