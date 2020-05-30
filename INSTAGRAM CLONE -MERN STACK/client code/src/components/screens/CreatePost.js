import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import{useHistory} from 'react-router-dom'


const CreatePost = () => {
    const history =useHistory()
    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")
    const[image,setImage]=useState("")
    const[url,setUrl]=useState("")
    useEffect(()=>{
       
   if(url){ 
  fetch("/CreatePost",{
    method:"Post",
    headers:{
    "Content-Type":"application/json",
    "Authorization" :"Bearer "+localStorage.getItem("jwt")
    },
    body:JSON.stringify({
    
    title,
    body,
    pic:url
    })
}).then(res=>res.json())
    .then(data=>{
      
        if(data.error)
        {
           M.toast({html: data.error , classes:"#c62828 red darken-3"}) 
        }
        else{
            M.toast({html: "" , classes:"#43a047 green darken-1"})
            history.push('/')
        }
    }).catch(err=>{console.log(err)})
     }
    },[url])

    const postDetails=()=>{
const data =new FormData() //we are uplaoding a file so we have to use formdata
data.append("file",image)  //inside the formdata we have to append some info or data 
data.append("upload_preset","insta-clone") //these are the cloudinary  
data.append("cloud_name","df7pdatbh")   //this is the unique name of my login in the cloudinary

fetch("https://api.cloudinary.com/v1_1/df7pdatbh/image/upload",{   //netwrok request  //cpoy the url from the coludniary API app url  //append or add   /image/upload    into the string 
      method:"post",    //we will call the method body  from above const[body,setBody]
       body:data   // we will attach the data from   const data = new FormData into the post details. for sending details 
    })
    .then(res=>res.json()) // we will send the respond 

    .then(data=>{
        setUrl(data.url) ;
         //data will be displayed in console
    })
    .catch(err=>{console.log(err)})   //if some error then we catch it in error
    





}

   return(

    
       <div className="card input-filed auth-card center">
           <input type="text" placeholder="title" value={title}onChange={(e)=>setTitle(e.target.value)} />
           <input type="text" placeholder="body" value={body}onChange={(e)=>setBody(e.target.value)} />
                    <div className="file-field input-field">
                <div className="btn  #64b5f6 blue lighten-2">
                    <span>ADD</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"  />
                </div>
                </div>


                <button style={{borderRadius:"80px"}} className="btn  #64b5f6 blue lighten-2" 
                onClick={()=>postDetails()}>
                      <i   className="material-icons1 ">+</i>
                   </button>
       </div>
    

   )
}


export default CreatePost