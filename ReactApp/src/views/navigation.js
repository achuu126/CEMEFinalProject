// links in customer page

import React from 'react';
import "./css/customerApp.css";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="navlinkbg">
          <NavLink className="navlink" to="/CustomerSearch">Customer Search</NavLink>
          <NavLink className="navlink" to="/CustomerCreate">Create Customer</NavLink>
       </div>
      
    );
}

export default Navigation;
