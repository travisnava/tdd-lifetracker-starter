import * as React from "react"
import "./ActivityFeed.css"

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
                <button className ="nutrition-btn">Record Nutrition</button>
            </span>
        </div>
    </div>
  )
}