import * as React from "react"
import "./NutritionCard.css"

//import for date formatting
import Moment from "moment"

//react imports
import { Link } from "react-router-dom"

export default function NutritionCard(props) {



  let linkAddress = "/nutrition/id/" + props.nutritionId





  return (
   <div className="nutrition-card">
      <div className = "card-header">
        <img className = "nutrition-image" src={props.imageURL} alt= {props.name} />
        <Link to = {linkAddress} className = "nutritionLink"><h2 className = "nutrition-name">{props.name}</h2></Link>
      </div>
      <div className = "nutrition-info-container">
        <span className = "card-calories-container">
          <h3>Calories:</h3>
          <p className = "nutrition-calories">{props.calories}</p>
        </span>
        <span className = "card-quantity-container">
          <h3>Quantity:</h3>
          <p className = "nutrition-quantity"> {props.quantity}</p>
        </span>
      </div>
      <div className = "card-footer">
        <p className = "nutrition-date">{Moment(new Date(props.createdAt)).format("MMMM Do, YYYY")}</p>
        <p className = "nutrition-category">{props.category}</p>
      </div>
    </div>
    
  )
}