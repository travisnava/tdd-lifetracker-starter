import * as React from "react"
import "./LoginPage.css"

export default function LoginForm() {
  return (
    <div className="login-form">
        <div className = "login-title-container">
            <h1 className = "login-title">Login</h1>
        </div>
        <div className ="form-input-container">
            <p className ="email-label">Email</p>
            <input name = "email" className ="form-input" type="text"   placeholder ="student@codepath.org"/>
        </div>
        <div className ="form-input-container">
            <p className ="password-label">Password</p>
            <input name = "password" className ="form-input" type="text"   placeholder ="password"/>
        </div>
        <button className = "submit-login">Login</button>
    </div>
  )
}