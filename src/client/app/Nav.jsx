import React from 'react';
import Login            from './Login.jsx'
import CreateUserForm   from './CreateUserForm.jsx'

const Nav = props=> {




return(

  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <ul className="navbar-header">
        <a href="../" className="navbar-brand float-left">Staycation</a>
      </ul>
      <ul>
        <Login />
        <a href="#" className="navbar-nav navbar-right">Signup</a>
        </ul>
    </div>
  </nav>
  )
}
export default Nav;
