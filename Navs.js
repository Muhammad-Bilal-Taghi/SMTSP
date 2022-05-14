import React from 'react'
import { Link } from 'react-router-dom'

const Navs = () => {
  return( <div>
    <div style={{display: 'flex', alignItems: 'self-end', justifyContent: 'space-between'}}/>
    <span className='logo'>SAYLANI MASS TRANING STUDENT PORTAL</span>
       <div>
          <Link className="navLink" to="/">Login</Link>
          <Link className="navLink" to="/signup">Signup</Link>
          <Link className="navLink" to="/admin">Admin</Link> 
       </div>
           
    
    </div>
  )
}
  
  export default Navs