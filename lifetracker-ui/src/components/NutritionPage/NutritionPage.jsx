import * as React from "react"
import "./NutritionPage.css"


//react imports


//component imports
import NutritionOverview from "../NutritionOverview/NutritionOverview"




export default function NutritionPage(props) {
  return (
    <div className="nutrition-page">
      <div className = "nutrition-title-container">
        <h1 className = "nutrition-title"><em>Nutrition</em></h1>
      </div>
      <div className = "nutrition-feed">
        
      </div>

      <NutritionOverview isLoading = {props.isLoading} nutritions = {props.nutritions}/>
    </div>
  )
}