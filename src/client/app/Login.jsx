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
        <h2>Login</h2>
          <form className="form-inline" onSubmit={login}>
          <fieldset className="form-group">
            <label>Email :</label>
            <input type="text" className="form-control" name="user_email" placeholder="Another input"/>
          </fieldset>

          <fieldset className="form-group">
            <label>Password :</label>
            <input type="text" className="form-control" name="user_pass_digest" placeholder="Another input"/>
          </fieldset>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
      )//close return

}//close component

export default Login
