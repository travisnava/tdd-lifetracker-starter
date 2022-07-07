import * as React from "react"
import "./RegistrationPage.css"

//component imports
import RegistrationForm from "./RegistrationForm"

//react imports
import { useNavigate } from "react-router-dom"

export default function RegistrationPage(props) {

  const navigate = useNavigate()

  return (
    <div className="registration-page">
      {!props.user?.email ? <RegistrationForm user={props.user} setUser={props.setUser}/> : navigate("/activity")}
      
    </div>
  )
}