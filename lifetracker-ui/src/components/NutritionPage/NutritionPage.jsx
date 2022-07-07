import * as React from "react"
import "./NutritionPage.css"


//react imports
import { useEffect } from "react"

//component imports
import NutritionOverview from "../NutritionOverview/NutritionOverview"
import AccessForbidden from "../AccessForbidden/AccessForbidden"




export default function NutritionPage(props) {



  
  const checkAccess = () => {
    if(!props.user?.email){
      return <AccessForbidden/>
    }
  }








  return (

    <div className="nutrition-page">
      {!props.user?.email ? checkAccess() :
        <div>
        <div className = "nutrition-title-container">
          <h1 className = "nutrition-title"><em>Nutrition</em></h1>
        </div>
        <div className = "nutrition-feed">
        </div>
        <NutritionOverview isLoading = {props.isLoading} nutritions = {props.nutritions} setNutritions = {props.setNutritions}/>
        </div>}
    </div>
  )
}