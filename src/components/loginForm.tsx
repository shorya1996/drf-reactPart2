import React, { Fragment } from 'react';
const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.loginUser}>
        <div className="container">
        <h1>Login</h1>
        <hr />
        <label><b>Username</b></label>
            <input type="text" value={props.username} placeholder="Enter username" name="username" onChange={props.handleChange}/><br></br>
            <label><b>Password</b></label>
            <input type="password" value={props.password} placeholder="Enter password" name="password" onChange={props.handleChange} />
            <button type="submit" className="registerbtn">Login</button>
        </div>

        <div className="container">
        <button type="submit" className="registerbtn" onClick = {props.handleSignup}>Sign Up</button>
        </div>
    </form>
    );
}

export default LoginForm;
