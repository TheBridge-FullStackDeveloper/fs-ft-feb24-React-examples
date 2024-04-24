import React from "react";
import { Link } from 'react-router-dom'


const Nav = () => {
  return <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/travel'>Travel</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/staff'>Staff</Link></li>
              <li><Link to='/summercourse'>Summer Course</Link></li>
              <li><Link to='/topic'>Topic</Link></li>
            </ul>
          </nav>;
};

export default Nav;
