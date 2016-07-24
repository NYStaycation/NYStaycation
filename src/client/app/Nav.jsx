import React from 'react';

const Nav = props=>
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <ul className="navbar-header">
        <a href="../" className="navbar-brand float-left">Staycation</a>
      </ul>
      <ul>
        <a href="#" className="navbar-nav navbar-right">Login</a>
        <a href="#" className="navbar-nav navbar-right">Signup</a>
        </ul>
    </div>
  </nav>

export default Nav;
