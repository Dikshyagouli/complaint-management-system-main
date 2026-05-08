import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from '../services/api'; // Use your configured axios instance

const TrackProgress = ({ content }) => {
  const { user, isAuthenticated } = useAuth();
  const [complaints, setComplaints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      if (!isAuthenticated || !user) {
        setIsLoading(false);
        return;
      }
      
      try {
        const response = await axios.get('/api/complaints/user');
        setComplaints(response.data);
      } catch (err) {
        console.error('Failed to fetch complaints:', err);
        setError(content.errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComplaints();
  }, [isAuthenticated, user]);

  const getStatusColor = (status) => {
  switch (status) {
    case 'Resolved':
  return 'text-success';
    case 'In Progress':
  return 'text-info';
    case 'Rejected':
  return 'text-danger';
  default:
  return 'text-warning';
}};

  if (isLoading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">{content.loading}</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="container mt-5 text-center alert alert-danger">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{content.yourComplaints}</h2>
      <div className="list-group">
        {complaints.length > 0 ? (
          complaints.map((complaint) => (
            <div key={complaint._id} className="list-group-item list-group-item-action mb-3 shadow-sm rounded">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{complaint.title}</h5>
                <small className={`fw-bold ${getStatusColor(complaint.status)}`}>{complaint.status}</small>
              </div>
              <p className="mb-1">{complaint.description}</p>
            </div>
          ))
        ) : (
          <div className="text-center mt-5">
            <p className="lead">{content.noComplaints}</p>
            <a href="/public-form" className="btn btn-primary">{content.submitNewComplaint}</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackProgress;
