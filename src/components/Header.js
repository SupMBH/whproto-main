import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <h1>Welcome to HRNet</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/employees">Employees</Link>
      </nav>
    </header>
  );
};

export default Header;