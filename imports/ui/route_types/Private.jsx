import React from "react"
import { Route, useHistory } from 'react-router-dom';
export default function Private({ children, ...rest }) {
  const history = useHistory()
  function isAuth() {
    return true;
  }
  if (isAuth()) {
    return (
      <Route {...rest} exact>
        {children}
      </Route>
    );
  } else {
    history.push("/not-found")
  }
}

