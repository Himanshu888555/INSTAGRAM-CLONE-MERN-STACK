import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
import {UserContext} from '../../App'


const Signin=()=>{
    const {state,dispatch}= useContext(UserContext)
    const history = useHistory()
   
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const PostData=()=>{
         if(! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            M.toast({html:"Invalid email",classes:"#c62828 red darken-3"})
            return
        }
                fetch("/signin",{
        method:"post",
        headers:{
        "Content-Type":"application/json"
       
        },
        body:JSON.stringify({
        
        password,
        email
        })
    }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error)
            {
               M.toast({html: data.error , classes:"#c62828 red darken-3"}) 
            }
            else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("jwt",JSON.stringify(data.user))
                dispatch({type:"USER",payload:data.user})
                M.toast({html: "logged in " , classes:"#43a047 green darken-1"})
                history.push('/')
            }
        }).catch(err=>{console.log(err)})
        
      }


    return (
        <div className="mycard">
           
                    <div className="card auth-card center">
                        <h2>Instagram</h2>

                        <input type = "text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <input type = "text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />

                   <button style={{borderRadius:"80px"}} className="btn  #64b5f6 blue lighten-2"
                   onClick={()=>PostData()}
                   >
                      <i className="material-icons1 ">Log In</i>
                   </button>

                </div>

               
                        
                <div className="card auth-card1 center ">
                    Don't have an account? <Link to="/Signup" >Signup</Link>
                </div>




                </div>
                

            

    )
}


export default Signin