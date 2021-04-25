import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { DashboardRoutes } from './DashboardRoutes';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <DashboardRoutes />
        </Switch>
      </div>
    </Router>
  );
};
