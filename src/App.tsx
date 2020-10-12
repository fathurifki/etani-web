import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk'

import handleRouter from './view/routes';
import logger from './utils/middleware';

function App() {

  const persistConfig = {
    key: "root",
    storage
  };

  // const persistedReducer = persistReducer(persistConfig, );
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

  // const store = createStoreWithMiddleware(
  //   persistReducer,
  //   undefined,
  //   compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
  // )

  // const persistor = persistStore(store);

  return (
    <div className="h-screen m-auto max-w-md bg-gray-300">
      <div className="flex flex-col h-screen">
        <Router>
          <Switch>
            <Route path="/" component={handleRouter} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
