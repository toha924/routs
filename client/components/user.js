import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import Main from './main'
// import Header from './header'

const User = () => {
const { userName } = useParams()
  return (
    <div>
      <div id="title">Profile</div>
      <div id="username">{ userName } </div>
      <Link to="/dashboard"> Go to Dashboard</Link>
      <Link to="/dashboard/main"> Go to Main</Link>
    </div>
  )
}

User.propTypes = {}

export default React.memo(User)
