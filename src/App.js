import React from 'react';
import { AppContainer } from './components';
import { Route, Switch } from 'react-router-dom';

// This component should handle the routes

const App = () => {
  return(
    <AppContainer>
      <Switch>
        <Route path="/">
        </Route>
      </Switch>
    </AppContainer>
  )
}

export default App;