import React    from 'react'

const CreateUserForm=props=>{

  function userForm(event){
    event.preventDefault();
    let user_email        = event.target.user_email.value;
    let user_name         = event.target.user_name.value;
    let user_pass_digest  = event.target.user_pass_digest.value;

    let userInfo = {
      user_email: user_email,
      user_name: user_name,
      user_password: user_pass_digest
    }

    console.log(userInfo)
    props.createUser(userInfo)
  }




    return(
      <div>
        <form className="form-inline" onSubmit={userForm}>
          <fieldset className="form-group">
            <input type="text" className="form-control" name="user_name" placeholder="User name" />
          </fieldset>

          <fieldset className="form-group">
            <input type="text" className="form-control" name="user_email" placeholder="Email"/>
          </fieldset>

          <fieldset className="form-group">
            <input type="password" className="form-control" name="user_pass_digest" placeholder="Password"/>
          </fieldset>
          <button type="submit" className="btn btn-default">Create User</button>
        </form>
      </div>
      )//close return

}//close component

export default CreateUserForm
