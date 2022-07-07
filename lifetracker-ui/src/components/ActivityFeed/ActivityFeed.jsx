import * as React from "react"
import "./ActivityFeed.css"

//react imports
import { Link } from "react-router-dom"

export default function ActivityFeed() {
  return (
    <div className="activity-feed">
        <div className = "feed-header">
            <span className="feed-title-container">
                <h1 className ="feed-title">Activity Feed</h1>
            </span>
            <span className = "feed-button-container">
                <button className ="exercise-btn">Add Exercise</button>
                <button className = "sleep-btn">Log Sleep</button>
                <Link to ="/nutrition/create"><button className ="nutrition-btn">Record Nutrition</button></Link>
            </span>
        </div>
        <div className = "per-category">
          <h4>Average Calories Per Category</h4>
        </div>
        <div className = "per-day">
          <h4>Total Calories Per Day</h4>
        </div>

    </div>
  )
}