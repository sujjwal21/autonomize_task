import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserRepositories from './components/UserRepositories';
import UserFollowers from './components/UserFollowers';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />} />
        {user && (
          <>
            <Route path="/repos" element={<UserRepositories user={user} />} />
            <Route path="/followers" element={<UserFollowers user={user} />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
