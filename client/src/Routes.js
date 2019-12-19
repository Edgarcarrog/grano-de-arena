import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/styled-components/Navbar'
import SignupContainer from './components/Signup/SignupContainer'
import LoginContainer from './components/Login/LoginContainer'
import Profile from './components/Profile/Profile'
import Home from './components/Home/Home'
import CreateProject from './components/CreateProject/CreateProject'
import AllProjects from './components/AllProjects/AllProjects'
import CommentInput from './components/CommentInput/CommentInput'

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/createProject" component={CreateProject} />
        <Route exact path="/allProjects" component={AllProjects} />
        <Route exact path="/commentInput" component={CommentInput} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes