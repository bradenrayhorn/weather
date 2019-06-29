import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {loggedIn} from "./user";

const PrivateRoute = ({component: Component, ...rest}) => {

  const isLoggedIn = loggedIn();

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )
      }
    />
  )
}

export default PrivateRoute