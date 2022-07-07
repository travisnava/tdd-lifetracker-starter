import * as React from "react"
import "./ActivityPage.css"


//component imports
import ActivityFeed from "../ActivityFeed/ActivityFeed"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import Loading from "../Loading/Loading"


export default function ActivityPage(props) {
  return (
    <div className="activity-page">
      {!props.user?.email ? <AccessForbidden/> : props.isLoading ?  <Loading/> : <ActivityFeed user = {props.user}/>}
    </div>
  )
}