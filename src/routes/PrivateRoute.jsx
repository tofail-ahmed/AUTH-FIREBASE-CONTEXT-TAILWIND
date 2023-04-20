import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
      const { user, loading } = useContext(AuthContext)
      if (loading) {
            return <progress className="progress progress-secondary w-56" value="40" max="100"></progress>
      }
      if (user) {
            return children
      }
      return (
            <Navigate to='/login' replace={true}></Navigate>
      )
};

export default PrivateRoute;