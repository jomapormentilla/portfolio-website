import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavContainer from './components/NavContainer'
import ComingSoon from './components/ComingSoon'
import MyApps from './components/MyApps'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Login from './components/Login'

class App extends React.Component {
  state = {
    loggedIn: false,
    user: null
  }

  authenticate = () => {
    console.log('Authenticate Function')
  }

  render(){
    return (
      <div className="App">
          <Router>
            <Route component={ routeInfo => <NavContainer routeInfo={ routeInfo } />} />
            <Switch>
              <Route exact path='/' component={ routeInfo => {
                // return !this.state.loggedIn ? <ComingSoon routeInfo={ routeInfo } /> : <Redirect to="/resume" />
                return <ComingSoon />
              }} />

              <Route path='/apps' component={ routeInfo => {
                // return !!this.state.loggedIn ? <MyApps routeInfo={ routeInfo } /> : <Redirect to="/" />
                return <MyApps routeInfo={ routeInfo } />
              }} />
              
              <Route path='/resume' component={ routeInfo => {
                // return !!this.state.loggedIn ? <Resume routeInfo={ routeInfo } /> : <Redirect to="/" />
                return <Resume />
              }} />
              
              <Route path='/contact' component={ routeInfo => {
                // return !!this.state.loggedIn ? <Contact routeInfo={ routeInfo } /> : <Redirect to="/" />
                return <Contact />
              }} />
              
              <Route path='/login' component={ routeInfo => {
                // return !!this.state.loggedIn ? <Login routeInfo={ routeInfo } /> : <Redirect to="/" />
                return <Login />
              }} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
