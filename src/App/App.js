import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import UsersPage from '../UsersPage/UsersPage';
import UserDetailsPage from '../UserDetailsPage/UserDetailsPage';
import SchedulesPage from '../SchedulesPage/SchedulesPage';
import ScheduleDetailsPage from '../ScheduleDetailsPage/ScheduleDetailsPage';
import Header from '../Header/Header';
import '../App/App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/schedules" element={<SchedulesPage />} />
        <Route path="/schedules/:id" element={<ScheduleDetailsPage />} />
        <Route
          path="*"
          element={
            <div className="error-page-container">
              <h1>Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
