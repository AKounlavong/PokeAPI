import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () =>  { 
    return(
     <div>
       <div>
         <Link to="/">Home</Link>
         <Link to="/pokemon">Pokemon</Link>
         <Link to="/item">Item</Link>
         <Link to="/location">Location</Link>
       </div>
     </div>
    );   
 }
 
export default Navbar;