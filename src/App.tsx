import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'

import handleRouter from './view/routes';
import history from './utils/browserHistory';
import configureStore from './utils/configureStores';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const store = configureStore()

  return (
    <div className="relative h-screen m-auto max-w-md bg-gray-300">
      <div className="flex flex-col h-full">
        <Header />
        <div className="w-full overflow-y-auto h-screen">
          <Provider store={store}>
            <Router history={history}>
              <Switch>
                <Route path="/" component={handleRouter} />
                <Redirect from="/" to="/login/" />
              </Switch>
            </Router>
          </Provider>
        </div>
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
