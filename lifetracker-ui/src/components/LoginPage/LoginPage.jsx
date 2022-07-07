import * as React from "react"
import "./LoginPage.css"

//component imports
import LoginForm from "./LoginForm"

//react imports
import { useNavigate } from "react-router-dom"

export default function LoginPage(props) {

  const navigate = useNavigate()




  return (
    <div className="login-page">
      {!props.user?.email ? <LoginForm user = {props.user} setUser = {props.setUser}/> : navigate("/activity")}

    </div>
  )
}