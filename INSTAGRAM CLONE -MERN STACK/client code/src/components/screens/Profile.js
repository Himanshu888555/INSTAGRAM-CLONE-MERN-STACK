import React from 'react'



const Profile=()=>{
    return (
        <div style={{ maxWidth:"1000px",margin:"0px auto"}} >
            <div style={{ display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid "}}>
            
                <div> 
                    <img style={{width: "160px",height: "160px",borderRadius: "80px"}}
                  src="https://images.unsplash.com/photo-1543205089-425bfeaf4d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" 
                  />
                </div>
                                
                <div>   
                    <h4>himanshu888555</h4>
                
                    <div style={{display:"flex",justifyContent:"space-around",width:"108%"}}>
                       
                        <h5>40 posts</h5>
                        <h5>40 followers</h5>
                        <h5>40 following</h5>

                    </div>

                    <div> 
                        <h6>Himanshu</h6>
                    </div>

                </div>
            
            </div>
            
            
            <div className="gallery">
               <div className="container">

                <img  className="item" src="https://images.unsplash.com/photo-1545340240-c93a9ae0d759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img  className="item" src="https://images.unsplash.com/photo-1545340240-c93a9ae0d759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img  className="item" src="https://images.unsplash.com/photo-1545340240-c93a9ae0d759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                
                </div>

                <div className="container">

                <img  className="item" src="https://images.unsplash.com/photo-1545340240-c93a9ae0d759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img  className="item" src="https://images.unsplash.com/photo-1545340240-c93a9ae0d759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img  className="item" src="https://images.unsplash.com/photo-1545340240-c93a9ae0d759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                
                </div>

                <div className="container">

                <img  className="item" src="https://images.unsplash.com/photo-1545340240-c93a9ae0d759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img  className="item" src="https://images.unsplash.com/photo-1545340240-c93a9ae0d759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img  className="item" src="https://images.unsplash.com/photo-1545340240-c93a9ae0d759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>

                </div>
                
            </div>
       
        </div>
            
    )
}


export default Profile