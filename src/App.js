import React from 'react';
import {Route, Switch, withRouter} from "react-router";
import NotFound from "./pages/NotFound";
import Weather from "./pages/Weather";
import Login from "./pages/Login";
import PublicRoute from "./utils/public-route";
import PrivateRoute from "./utils/private-route";
import {withSnackbar} from "notistack";
import axios from "axios";
import {logout} from "./utils/user";
import Locations from "./pages/Locations";
import Settings from "./pages/Settings";

class App extends React.Component {

  constructor(props) {
    super(props);
    axios.interceptors.response.use(response => {
      if (response.data.code === 202) {
        this.props.enqueueSnackbar('Session is invalid.', {
          variant: 'error'
        });
        logout();
        this.props.history.push('/login');
        return;
      }
      return response;
    });
  }

  render() {
    return (
      <Switch>
        <PrivateRoute path="/" exact component={Weather}/>
        <PrivateRoute path="/locations" component={Locations}/>
        <PrivateRoute path="/settings" component={Settings}/>
        <PublicRoute path="/login" component={Login}/>
        <Route component={NotFound}/>
      </Switch>
    );
  }
}

export default withRouter(withSnackbar(App));
