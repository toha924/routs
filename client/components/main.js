import React from 'react'
import { Link } from 'react-router-dom'
// import Home from './home'
// import User from './user'

const Main = () => {
  return (
    <div id="title">Main
      <Link to="/dashboard"> Go to Dashboard</Link>
      <Link to="/dashboard/profile/7e61eef1-dc58-44ce-9901-3871cce40541"> Go to Profile</Link>
    </div>    
  )
}

Main.propTypes = {}

export default React.memo(Main)
