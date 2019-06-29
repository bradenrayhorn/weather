import React from 'react';
import {HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import NotFound from "./pages/NotFound";
import Weather from "./pages/Weather";
import Login from "./pages/Login";
import PublicRoute from "./utils/public-route";
import PrivateRoute from "./utils/private-route";
import {withSnackbar} from "notistack";
import axios from "axios";
import {logout} from "./utils/user";

class App extends React.Component {

  constructor(props) {
    super(props);
    axios.interceptors.response.use(response => {
      if (response.data.code === 202) {
        this.props.enqueueSnackbar('Session is invalid.', {
          variant: 'error'
        });
        logout();
        return;
      }
      return response;
    });
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <PrivateRoute path="/" exact component={Weather}/>
          <PublicRoute path="/login" component={Login}/>
          <Route component={NotFound}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default withSnackbar(App);
