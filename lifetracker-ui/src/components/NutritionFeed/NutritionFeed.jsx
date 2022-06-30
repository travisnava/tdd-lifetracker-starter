import * as React from "react"
import "./NutritionFeed.css"


//component imports
import NutritionCard from "../NutritionCard/NutritionCard"



export default function NutritionFeed(props) {


  return (
    <div className="nutrition-feed">
      {props.nutritions.length != 0 ? props.nutritions.map((nutrition => 
      <NutritionCard/>)) : <h1 className ="empty-message">Nothing here yet</h1>}
      {/* pass in correct props to nutritioncard in the above map later */}
    </div>
  )
}