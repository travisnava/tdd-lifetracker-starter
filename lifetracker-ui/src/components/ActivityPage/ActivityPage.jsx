import * as React from "react"
import "./ActivityPage.css"


//component imports
import ActivityFeed from "../ActivityFeed/ActivityFeed"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"


export default function ActivityPage(props) {
  return (
    <div className="activity-page">
      {!props.user?.email ? <AccessForbidden/> : <ActivityFeed user = {props.user}/>}
    </div>
  )
}