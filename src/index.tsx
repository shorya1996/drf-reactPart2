import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import initializeStore from "./store/configureStore";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

var initialState:any;
const store = initializeStore(initialState);
const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
