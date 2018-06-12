import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import Router from './Router';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);
export const { dispatch } = store;

sagaMiddleware.run(rootSaga);

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
