const mongoose = require('mongoose')
const{ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    title:{                         //title for the post
        type:String,
        required:true
    },
    body:{                             //body of the post 
        type:String,
        required:true
    },
    photo:{                             //photo for the post 
        type:String,
        required:true
        
    },
    postedBy:{
        type:ObjectId,       //user obbjectId will be here
        ref:"User"           // reference from user.js as we have given ref name in module.model("User",userSchema)
    }
})


mongoose.model("Post",postSchema)