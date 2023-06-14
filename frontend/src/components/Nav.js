//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/log">Patients</Link>
        <Link to="/topics">Topics</Link>
        <Link to="../gallery">Gallery</Link>
        <Link to="../staff">Staff</Link>
        <Link to="../order">Order</Link>
        {/* <Link to="../contact">Contact</Link> */}
    </nav>
  );
}

export default Nav;
