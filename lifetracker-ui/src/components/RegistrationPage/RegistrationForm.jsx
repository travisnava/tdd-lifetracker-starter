import * as React from "react"
import "./RegistrationPage.css"

import apiClient from "../../services/apiClient"

//react imports
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';

export default function RegistrationForm(props) {


   //global var
   let emptyForm = {email: "", username: "", firstName: "", lastName: "", password: "", passwordConfirm: ""}

  //use state variables
  const navigate = useNavigate()
  const [registerForm, setRegisterForm] = useState(emptyForm)
  const [error, setError] = useState(null)









    function handleOnInputChange (evt) {


      setRegisterForm((form) => ({ ...form, [evt.target.name]: evt.target.value }))

    }



            

  
    
    
      
  const handleOnSubmitRegisterForm = async () => {
    if (registerForm.password != registerForm.passwordConfirm){
      setError("Passwords don't match")
    }
    else {
      console.log("PASSWORDS", registerForm.password, registerForm.passwordConfirm)
      const {data, error} = await apiClient.signupUser(registerForm)
      if (error) {
        setError(error)
      }
      if(data?.user)
        console.log("data.user", data.user)
        apiClient.setToken(data.token)
        navigate("/activity")
        props.setUser(data?.user)
        console.log("user", props.user)
  
  
      setRegisterForm(emptyForm)
    
    }

  }








    return (


    <div className="registration-form">
        <div className = "register-title-container">
            <h1 className = "register-title">Register</h1>
        </div>
        <div className ="form-input-container">
            <p className ="email-label">Email</p>
            <input name = "email" className ="form-input" type="email" value = {registerForm.email} onChange = {handleOnInputChange}  placeholder ="student@codepath.org"/>
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
            <input name = "password" className ="form-input" type="password"  value = {registerForm.password} onChange = {handleOnInputChange} placeholder ="Enter a secure password"/>
        </div>
        <div className ="form-input-container">
            <p className ="confirm-password-label">Confirm Password</p>
            <input name = "passwordConfirm" className ="form-input" type="password" value = {registerForm.passwordConfirm} onChange = {handleOnInputChange}  placeholder ="Confirm your password"/>
        </div>
        <button className = "submit-registration" onClick={handleOnSubmitRegisterForm}>Create Account</button>
        {error? <p className ="register-error">{error}</p>: null}


        <div className="login-redirect">
            <p>Already have an account? Login <Link to ="/login">here</Link></p>
        </div>
    </div>
  )
}