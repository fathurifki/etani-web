import React from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';

import history from './utils/browserHistory';
import AppRoutes from './view/routes';
import CustomRoute from './components/Route';
import Login from './view/Login';
import Register from './view/Register';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          {AppRoutes.map(({ path, component }, key) =>
            <CustomRoute
              exact
              path={path}
              component={component}
              key={key}
            />
          )}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="/" to={{ pathname: "/home" }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
