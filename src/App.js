import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './Components/Auth/SignUp'
import Login from './Components/Auth/Login'
import Homepage from './Components/Homepage/Homepage'

const App = () => {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/Signup' component={Signup} />
          <Route exact path='/Home' component={Homepage} />
        </Switch>
      </Router>
    </div>
  )

}

export default App;