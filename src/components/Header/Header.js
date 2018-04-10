import React from 'react';
import { NavLink } from 'react-router-dom';

const header = () => (
  <nav>
    <div className='navbar'>
        <ul className='nav nav-pills'>
          <li role='presentation'><NavLink to='/'>Home</NavLink></li>
          <li role='presentation'><NavLink to='/list'>Employee List</NavLink></li>
        </ul>
    </div>
  </nav>
)

export default header;



