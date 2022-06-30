import * as React from "react"
import "./RegistrationPage.css"



//react imports
import { useState } from "react"

import {Link} from 'react-router-dom';

export default function RegistrationForm() {




  //use state variables
  const [registerForm, setRegisterForm] = useState({email: "", username: "", firstName: "", lastName: "", password: "", passwordConfirm: ""})











    function handleOnInputChange (evt) {

        


        setRegisterForm((form) => ({ ...form, [evt.target.name]: evt.target.value }))

    }












    return (


    <div className="registration-form">
        <div className = "register-title-container">
            <h1 className = "register-title">Register</h1>
        </div>
        <div className ="form-input-container">
            <p className ="email-label">Email</p>
            <input name = "email" className ="form-input" type="text" value = {registerForm.email} onChange = {handleOnInputChange}  placeholder ="student@codepath.org"/>
        </div>
        <div className ="form-input-container">
            <p className ="username-label">Username</p>
            <input name = "username" className ="form-input" type="text" value = {registerForm.username} onChange = {handleOnInputChange} placeholder ="Username"/>
        </div>
        <div className ="form-input-container">
            <span className ="first-name-container"><input name = "firstName" className ="form-input" type="text" value = {registerForm.firstName} onChange = {handleOnInputChange}  placeholder ="First Name"/></span>
            <span className ="last-name-container"><input name = "lastName" className ="form-input" type="text" value = {registerForm.lastName} onChange = {handleOnInputChange}  placeholder ="Last Name"/></span>
        </div>
        <div className ="form-input-container">
            <p className ="password-label">Password</p>
            <input name = "password" className ="form-input" type="text"  value = {registerForm.password} onChange = {handleOnInputChange} placeholder ="Enter a secure password"/>
        </div>
        <div className ="form-input-container">
            <p className ="confirm-password-label">Confirm Password</p>
            <input name = "passwordConfirm" className ="form-input" type="text" value = {registerForm.passwordConfirm} onChange = {handleOnInputChange}  placeholder ="Confirm your password"/>
        </div>
        <button className = "submit-registration">Create Account</button>


        <div className="login-redirect">
            <p>Already have an account? Login <Link to ="/login">here</Link></p>
        </div>
    </div>
  )
}