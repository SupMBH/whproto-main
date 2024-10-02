import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeListPage from './pages/EmployeeListPage';
import EmployeeFormPage from './pages/EmployeeFormPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<EmployeeFormPage />} />
          <Route path="/employees" element={<EmployeeListPage />} />
          {/* Gestion des erreurs */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;