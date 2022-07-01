import * as React from "react"
import "./NutritionNew.css"


//component imports
import NutritionForm from "../NutritionForm/NutritionForm"



export default function NutritionNew(props) {
  return (
    <div className="nutrition-new">
      <NutritionForm nutritions = {props.nutritions} setNutritions = {props.setNutritions}/>
    </div>
  )
}