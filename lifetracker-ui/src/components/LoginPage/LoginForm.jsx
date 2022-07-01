import * as React from "react"
import "./LoginPage.css"
import apiClient from "../../services/apiClient"

//react imports
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react"




export default function LoginForm(props) {



  //global variables
  let emptyLoginForm = {email: "", password: ""}

  //state variables
  const navigate = useNavigate()
  const [userLoginForm, setUserLoginForm] = useState(emptyLoginForm)
  const [error, setError] = useState(null)


  function handleOnInputChange (evt) {

    // add error handling error or in submit handler


    setUserLoginForm((form) => ({ ...form, [evt.target.name]: evt.target.value }))

}




async function  handleOnSubmitLogin(setActiveUser){
       
  

  const {data, error} = await apiClient.loginUser(registerForm)
  if (error) {
    setError(error)
  }
  if(data?.user)
  apiClient.setToken(data.token)


  // try {
  //   const response = await axios.post("http://localhost:3001/auth/login", userLoginForm)
  //   if (response.data) {
  //     console.log("response data is:", response.data)

  //     setUserLoginForm(emptyLoginForm)
  //     navigate("/activity")
  //     setError(null)

 
  //   } else {
  //     setError("Error logging in")


  //   }
  // } catch (err) {
  //   setError(err.response.data.error.message)
  //   console.log(error)
  // } 


}










  return (
    <div className="login-form">
        <div className = "login-title-container">
            <h1 className = "login-title">Login</h1>
        </div>
        <div className ="form-input-container">
            <p className ="email-label">Email</p>
            <input name = "email" className ="form-input" type="email" value = {userLoginForm.email} onChange={handleOnInputChange} placeholder ="student@codepath.org"/>
        </div>
        <div className ="form-input-container">
            <p className ="password-label">Password</p>
            <input name = "password" className ="form-input" type="password" value = {userLoginForm.password} onChange={handleOnInputChange}  placeholder ="password"/>
        </div>
        <button className = "submit-login" onClick = {handleOnSubmitLogin}>Login</button>
        {error? <p className ="login-error">{error}</p>: null}
        <div className="register-redirect">
            <p>Don't have an account? Register <Link to ="/register">here</Link></p>
      </div>
    </div>
  )
}