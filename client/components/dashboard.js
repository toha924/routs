import React from 'react'
import { Link } from 'react-router-dom'
// import Home from './home'
// import User from './user'

const Dashboard = () => {
  return (
    <div id="title">
      Dashboard
      <Link to="/dashboard/main"> Go to Main</Link>
      <Link to="/dashboard/profile/7e61eef1-dc58-44ce-9901-3871cce40541"> Go to Profile</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default React.memo(Dashboard)
