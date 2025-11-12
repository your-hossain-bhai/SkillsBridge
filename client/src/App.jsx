import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';
import Learning from './pages/Learning';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/learning" component={Learning} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
        <footer className="bg-gray-800 text-white text-center p-4">
          © 2023 SkillBridge. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;