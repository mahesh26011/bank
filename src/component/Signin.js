import React from 'react'
import Header from './Header'
import Navbar from './Navbar'



function Signin() {
  return (
    <div>
    <Header/>
    <Navbar/>
    
        
            <form >
            <fieldset>
                <legend>Signin:</legend>
                <label>Email:</label><br/>
                <input type='email' /><br/>
                <label>Password:</label><br/>
                <input type= 'password'/><br/>
                <input type='submit' value='Signin'/ >
                </fieldset>
            </form>

       
    

        
     </div>
  )
}

export default Signin