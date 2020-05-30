import React,{useContext} from 'react'

import {Link} from 'react-router-dom'
import {UserContext} from '../App'
const NavBar = () =>{

  const {state,dispatch} = useContext(UserContext)
  const renderList =()=>{
    if(state){
      return[
        <li><Link to="/Profile">Profile</Link></li>,
        <li><Link to="/CreatePost">Add</Link></li>

      ]
    }else {
      return[
        <li><Link to="/Signin">Login</Link></li>,
        <li><Link to="/Signup">Signup</Link></li>

      ]
    }
  }
    return(
        <nav >
    <div className="nav-wrapper white">
      <Link to={state?"/":"/Signin"} className="brand-logo left">Instagram</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {renderList()}
      </ul>
    </div>
  </nav>
  
        
    )
}

export default NavBar