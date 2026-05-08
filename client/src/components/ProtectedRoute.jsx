import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children , requiredRole = null }) => {
  const { isAuthenticated,user, loading } = useAuth();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
 if (requiredRole && user?.role !== requiredRole) {
    // Redirect to a different page, like an access denied page or the homepage
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute; 