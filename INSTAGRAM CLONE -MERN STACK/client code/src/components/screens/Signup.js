import React, { useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'


const Signup=()=>{
    const history = useHistory()
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const PostData=()=>{
        if(! /^[a-zA-Z ]+$/.test(name)){
            M.toast({html:"Invalid name",classes:"#c62828 red darken-3"})
            return
    } else if(! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            M.toast({html:"Invalid email",classes:"#c62828 red darken-3"})
            return
        }
                fetch("/signup",{
        method:"post",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify({
        name,
        password,
        email
        })
    }).then(res=>res.json())
        .then(data=>{
            if(data.error)
            {
               M.toast({html: data.error , classes:"#c62828 red darken-3"}) 
            }
            else{
                M.toast({html: data.message , classes:"#43a047 green darken-1"})
                history.push('/Signin')
            }
        }).catch(err=>{console.log(err)})
        
      }

    return (
            <div className="mycard">
            
            <div className="card auth-card center">
                <h2>Instagram</h2>
        
        <input type = "text" placeholder="UserName" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type = "text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type = "text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button style={{borderRadius:"80px"}} className="btn  #64b5f6 blue lighten-2" 
        onClick={()=>PostData()}
        >
                        <i className="material-icons1 ">signup</i>
                    </button> 
            </div>

                <div className="card auth-card1 center ">
                Have an account?  <Link to="/Signin" >Log In</Link>
                    </div>

    
                
    
        </div>
    )
}


export default Signup