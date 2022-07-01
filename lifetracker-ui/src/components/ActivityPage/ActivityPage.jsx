import * as React from "react"
import "./ActivityPage.css"


//component imports
import ActivityFeed from "../ActivityFeed/ActivityFeed"


export default function ActivityPage() {
  return (
    <div className="activity-page">
      <ActivityFeed/>
    </div>
  )
}