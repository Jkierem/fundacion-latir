import React from 'react'
import { Dummy } from './views';
import { Route, Switch } from 'react-router-dom'

// This component should handle the routes

const App = () => {
  return(
    <Switch>
      <Route path="/">
        <Dummy what="Webpage" />
      </Route>
    </Switch>
  )
}

export default App;