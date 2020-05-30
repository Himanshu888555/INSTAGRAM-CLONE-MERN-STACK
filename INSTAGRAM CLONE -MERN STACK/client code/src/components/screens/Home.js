import React,{useState, useEffect} from 'react'


const Home=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")

            }
        }).then(res=>res.json())
        .then(result=>{
            
            setData(result.posts)
        })
    },[])
           
    
    return (
                 <div className="home">
                       {
                    data.map(item=>{
                        return(
                                 


                                 <div className="card home-card">
                                
                        <h5>mohit</h5>
                                    
                                    

                            <div className="card-image">
                                <img src="https://images.unsplash.com/photo-1581106165933-82b3164738cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" />
                            </div>
                            <div>
                                <div className="card-content">
                                     <i className="material-icons" style={{color:"red"}}>favorite</i>
                                     <h6>title</h6>
                                     <p>This is amzaing post!!</p>
                                     <input type="text" placeholder="add a comment" />
                                </div>
                            </div>
                            </div>


                        )
                    })
                }
         </div>
            
        
    )
}


export default Home