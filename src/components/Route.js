import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../ctx/auth";

const PrivateRoute = ({ component: Component, role, ...rest }) => {
  const { loggedInRole } = useContext(AuthContext);
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          return loggedInRole === role ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }}
      />
    </div>
  );
};

export const AdminRoute = (props) => <PrivateRoute role="admin" {...props} />;
