// Logout.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/FirebaseConfig';
import './Logout.css';

function Logout() {
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogoutConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  const handleConfirmLogout = () => {
    setShowConfirmation(false);
    handleLogout();
  };

  return (
    <div className="logout-container">
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      <button className="logout-button" onClick={handleLogoutConfirmation}>
        Logout
      </button>
      {showConfirmation && (
        <div className="confirmation-dialog">
          <h2>Are you sure you want to logout?</h2>
          <div className="confirmation-buttons">
            <button className="confirmation-button" onClick={handleCancelLogout}>
              Not Sure
            </button>
            <button className="confirmation-button" onClick={handleConfirmLogout}>
              Sure, Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logout;
