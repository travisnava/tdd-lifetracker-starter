import * as React from "react"
import "./NutritionCard.css"

//import for date formatting
import Moment from "moment"

export default function NutritionCard(props) {
  return (
    <div className="nutrition-card">
      <div className = "card-header">
        <img className = "card-img" src={props.imageURL} alt= {props.name} />
        <h2 className = "card-title">{props.name}</h2>
      </div>
      <div className = "nutrition-info-container">
        <span className = "card-calories-container">
          <h3>Calories:</h3>
          <p>{props.calories}</p>
        </span>
        <span className = "card-quantity-container">
          <h3>Quantity:</h3>
          <p> {props.quantity}</p>
        </span>
      </div>
      <div className = "card-footer">
        <p className = "createdAt">{Moment(new Date(props.createdAt)).format("MMMM Do, YYYY")}</p>
        <p className = "category">{props.category}</p>
      </div>
    </div>
  )
}