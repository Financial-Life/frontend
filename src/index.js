import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../src/reducers";
import sagas from "../src/sagas";


import App from './components/App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
