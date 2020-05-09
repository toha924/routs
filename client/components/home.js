import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './main'
import Header from './header'
import Dashboard from './dashboard'
import User from './user'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/dashboard" component={() => <Dashboard />} />
            <Route exact path="/dashboard/profile/:userName" component={() => <User />} />
            <Route exact path="/dashboard/main" component={() => <Main />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
