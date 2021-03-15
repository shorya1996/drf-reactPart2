import React, { Fragment } from 'react';

const SignupPage = (props: any) => {
    return (
      <div>
      {props.isSignup ?
      <Fragment>
<form>
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="Email" id="email" required  onChange={(e) => props.handleChange("EmailAddress", e)} value={props.fields["EmailAddress"]}/>
    <label >{props.errors["EmailAddress"]}</label><br></br>
    <label><b>First Name</b></label>
    <input type="text" placeholder="First Name" name="FirstName" id="FirstName" required onChange={(e) => props.handleChange("FirstName", e)} value={props.fields["FirstName"]}/>
    <label >{props.errors["FirstName"]}</label><br></br>
    <label><b>User Name</b></label>
    <input type="text" placeholder="Enter username" name="LastName" id="UserName" required onChange={(e) => props.handleChange("LastName", e)} value={props.fields["LastName"]}/>
    <label>{props.errors["LastName"]}</label><br></br>
    <label><b>Password</b></label>
    <input name="password" type="password" onChange={(e) => props.handleChange("Password", e)} value={props.fields["Password"]} placeholder="Enter password" />
    <label >{props.errors["password"]}</label><br></br>
    <label><b>Repeat Password</b></label>
    <input name="ConfirmPassword" type="password" onChange={(e) => props.handleChange("ConfirmPassword", e)} value={props.fields["ConfirmPassword"]} placeholder="Re-enter password" required />
    <label>{props.errors["ConfirmPassword"]}</label><br></br>
    <hr />
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" className="registerbtn" onClick={(e) =>props.signupSumit(e)}>Register</button>
  </div>
  
  <div className="container signin">
    <p>Already have an account?<button type="submit" className="registerbtn" onClick = {props.handleExpired}>Sign In</button></p>
  </div>
</form>
</Fragment>:
<Fragment>
  <form>
  <div className="container signin">
    <p>Already have an account?<button type="submit" className="registerbtn" onClick = {props.handleLogin}>Sign In</button></p>
  </div>
  </form>
  </Fragment>
  }
</div>
    );
}

export default SignupPage;
