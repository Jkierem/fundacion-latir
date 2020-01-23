import React from 'react'
import { Dummy } from './views';
import { AppContainer } from './components';
import { Route, Switch } from 'react-router-dom'

// This component should handle the routes

const App = () => {
  return(
    <AppContainer>
      <Switch>
        <Route path="/">
          <Dummy what="Webpage" />
        </Route>
      </Switch>
    </AppContainer>
  )
}

export default App;