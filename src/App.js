import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmployeeListPage from './pages/EmployeeListPage';
import EmployeeFormPage from './pages/EmployeeFormPage';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to HRNet</h1>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/employees">Employees</Link>
          </nav>
        </header>
        <Routes>
          <Route exact path="/home" element={<EmployeeFormPage />} />
          <Route path="/employees" element={<EmployeeListPage />} />
          {/* Gestion des erreurs */}
          <Route path="*" element={<EmployeeFormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

