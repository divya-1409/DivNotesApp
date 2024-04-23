// // ProtectedRoute.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// function ProtectedRoute({ path, element }) {
//   const isLoggedIn = localStorage.getItem('isLoggedIn');
//   return isLoggedIn ? (
//     <Route path={path} element={element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// }

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = (Component) => {
  const AuthenticatedComponent = (props) => {

    const isLoggedIn = localStorage.getItem('isLoggedIn')
   
    if (!isLoggedIn) {
      // Redirect to login if user is not authenticated
      return <Navigate to="/login" replace />;
    }

    // Render the protected component if user is authenticated
    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default ProtectedRoute;


