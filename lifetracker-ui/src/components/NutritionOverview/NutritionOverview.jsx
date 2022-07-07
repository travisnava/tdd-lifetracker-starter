import * as React from "react"
import "./NutritionOverview.css"


//react imports
import { Link } from "react-router-dom"

//component imports
import Loading from "../Loading/Loading"
import NutritionFeed from "../NutritionFeed/NutritionFeed"

export default function NutritionOverview(props) {
  return (
    <div className="nutrition-overview">
      <div className="create-nutrition-redirect">
            <h1 className = "overview-title">Overview</h1>
            <button className="record-nutrition"><Link to ="/nutrition/create" className = "record-link">Record Nutrition</Link></button>
      </div>


        
        {props.isLoading ? <Loading/> : <NutritionFeed nutritions = {props.nutritions} setNutritions = {props.setNutritions}/>}
    </div>
  )
}