import React from 'react';

const Nav = props=> {

function login(event){
    event.preventDefault();
    let user_email        = event.target.user_email.value;
    let user_pass_digest  = event.target.user_pass_digest.value;

    let Login = {
      email: user_email,
      password: user_pass_digest
    }

    console.log(Login)
    // props.createUser(userInfo)
  }

return(

  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <ul className="navbar-header">
        <a href="../" className="navbar-brand float-left">Staycation</a>
      </ul>
      <ul>

         <form className="form-inline navbar-nav navbar-right" onSubmit={login}>
          <fieldset className="form-group">
            <input type="text" className="form-control" name="user_email" placeholder="Email"/>
          </fieldset>

          <fieldset className="form-group">
            <input type="password" className="form-control" name="user_pass_digest" placeholder="Password"/>
          </fieldset>
          <button type="submit" className="btn btn-default">Login</button>
        </form>

        <a href="#" className="navbar-nav navbar-right">Signup</a>
        </ul>
    </div>
  </nav>
  )
}
export default Nav;
