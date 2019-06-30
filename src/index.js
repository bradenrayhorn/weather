import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import constants from "./utils/constants";
import axios from "axios";
import {SnackbarProvider} from "notistack";
import {HashRouter} from "react-router-dom";

axios.defaults.baseURL = constants.baseUrl;

if (navigator.geolocation) {

  ReactDOM.render(
    <SnackbarProvider
      autoHideDuration={2000}
    >
      <HashRouter>
        <App/>
      </HashRouter>
    </SnackbarProvider>
    , document.getElementById('root'));

} else {

  ReactDOM.render(<span>Device does not support Geolocation.</span>, document.getElementById('root'));

}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
