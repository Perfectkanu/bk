import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
      <Outlet
          {...rest}
          render={(props) => (
              isAuthenticated ? (
                  <Component {...props} />
              ) : (
                  <Navigate to="/login" />
              )
          )}
      />
  );
};

export default ProtectedRoute;
