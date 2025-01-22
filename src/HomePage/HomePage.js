import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to the Festival Manager</h1>
      <div className="nav-cards">
        <div className="nav-card">
          <Link to="/users" className="nav-card-link">
            <h2>View Users</h2>
          </Link>
        </div>
        <div className="nav-card">
          <Link to="/schedules" className="nav-card-link">
            <h2>View Schedules</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
