import * as React from "react"
import "./NutritionFeed.css"


//component imports
import NutritionCard from "../NutritionCard/NutritionCard"



export default function NutritionFeed(props) {


  return (
    <div className="nutrition-feed">
      {console.log("props.nutritions", props.nutritions)}
      {props.nutritions.length != 0 ? props.nutritions.nutritions.map((nutrition => 
      <NutritionCard name = {nutrition.name} category = {nutrition.category} calories = {nutrition.calories}/>)) : <h1 className ="empty-message">Nothing here yet</h1>}
      {/* pass in correct props to nutritioncard in the above map later */}
    </div>
  )
}