import React from 'react'
import{Link} from 'react-router-dom'

function Navbar() {
  return (
   
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Profile'>Profile</Link></li>
            <li><Link to='/Signin'>Signin</Link></li>
             <li><Link to='/Login'>Login</Link> </li>
             <li><Link to='/Orders'>Orders</Link></li>
         
        </ul>
    </nav>
    
  )
}

export default Navbar