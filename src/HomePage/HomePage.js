import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to the Festival Manager</h1>
      <nav>
        <ul>
          <li><Link to="/users">View Users</Link></li>
          <li><Link to="/schedules">View Schedules</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
