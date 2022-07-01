import * as React from "react"
import "./LoginPage.css"

//component imports
import LoginForm from "./LoginForm"

export default function LoginPage(props) {
  return (
    <div className="login-page">
      <LoginForm user = {props.user} setUser = {props.setUser}/>

    </div>
  )
}