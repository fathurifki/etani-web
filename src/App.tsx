import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from './utils/browserHistory';
import Header from './components/header';
import Footer from './components/footer';
import AppRoutes from './view/routes';

function App() {
  return (
    <div className="relative h-screen m-auto max-w-md bg-gray-300">
      <div className="flex flex-col h-screen">
        <div className="flex flex-col h-screen">
          <Header />
          <div className="w-full overflow-y-auto h-screen">
            <Router history={history}>
              <Switch>
                {AppRoutes.map(({ path, component }, key) =>
                  <Route
                    exact
                    path={path}
                    component={component}
                    key={key}
                  />
                )}
                <Redirect from="/" to="/home" />
              </Switch>
            </Router>
          </div>
          <div className="absolute bottom-0 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
