import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';

import {persistStore, persistReducer} from 'redux-persist';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
let middleware;
if (__DEV__) {
  middleware = applyMiddleware(sagaMiddleware, createLogger(), ReduxThunk);
} else {
  middleware = applyMiddleware(sagaMiddleware, ReduxThunk);
}

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['toggle'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducer);
// Redux: Store
const store = createStore(persistedReducer, middleware);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {store, persistor};
