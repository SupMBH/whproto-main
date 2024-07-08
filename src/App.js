import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeListPage from './pages/EmployeeListPage';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to WHproto</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/employees">View Current Employees</Link>
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={<EmployeeForm />} />
          <Route path="/employees" element={<EmployeeListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
