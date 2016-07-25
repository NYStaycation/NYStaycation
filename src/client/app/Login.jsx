import React    from 'react'

const Login=props=>{

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
      <div>
          <form className="form-inline navbar-nav navbar-right" onSubmit={login}>
          <fieldset className="form-group">
            <input type="text" className="form-control" name="user_email" placeholder="Email"/>
          </fieldset>

          <fieldset className="form-group">
            <input type="password" className="form-control" name="user_pass_digest" placeholder="Password"/>
          </fieldset>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
      </div>
      )//close return

}//close component

export default Login
