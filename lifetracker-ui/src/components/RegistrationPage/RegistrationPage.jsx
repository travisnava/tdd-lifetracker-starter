import * as React from "react"
import "./RegistrationPage.css"

//component imports
import RegistrationForm from "./RegistrationForm"


export default function RegistrationPage(props) {
  return (
    <div className="registration-page">
      <RegistrationForm user={props.user} setUser={props.setUser}/>
    </div>
  )
}