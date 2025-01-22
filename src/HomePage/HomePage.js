import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to the Festival Manager</h1>
      <div className="nav-cards">
        <Link to="/users" className="nav-card">
          <h2>View Users</h2>
        </Link>
        <Link to="/schedules" className="nav-card">
          <h2>View Schedules</h2>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
