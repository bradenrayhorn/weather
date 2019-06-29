import React from 'react'
import {Route} from 'react-router-dom'
import {loggedIn} from "./user";

const PublicRoute = ({component: Component, ...rest}) => {

  const isLoggedIn = loggedIn();

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <span>You must be logged out to view this page.</span>
        ) : (
          <Component {...props} />
        )
      }
    />
  )
};

export default PublicRoute