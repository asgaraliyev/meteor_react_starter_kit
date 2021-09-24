import React from "react"
import { Route } from 'react-router-dom';
export default function Public({ children, ...rest }) {
  return (
    <Route {...rest} exact>
      {children}
    </Route>
  );
}