import { applyMiddleware, compose, createStore } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunkMiddleware from 'redux-thunk'

import monitorReducersEnhancer from './monitorEnhancer'
import loggerMiddleware from './middleware'
import rootReducer from '../reducers'


export default function configureStore(preloadedState) {
    const persistConfig = {
        key: 'root',
        storage,
    }
    
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = compose(...enhancers)

    const store = createStore(persistedReducer, preloadedState, composedEnhancers)

    return store
}