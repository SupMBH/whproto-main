// (Concernant le pluggin JQuery pour les tables de données on se sert de HTML natif)
import React, { useState, useEffect } from 'react'; // Importation de React et des hooks useState et useEffect pour recup données et effets de bord

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]); // État pour stocker la liste des employés
  // Utilisation de useEffect pour récupérer les données des employés depuis le localStorage
  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || []; // Récupération des employés stockés
    setEmployees(savedEmployees); // Mise à jour de l'état avec les employés récupérés
  }, []); // Le tableau vide [] signifie que cet effet s'exécute une seule fois après le montage du composant

  // Fonction pour formater les dates au format jj/mm/aaaa
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Ici notre HTML natif rend les tables de données au lieu de pluggin jQuery du programme initial
  // Affiche un tableau avec la liste des employés et leurs infos
  return (
    <div>
      <h2>Current Employees</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{formatDate(employee.dateOfBirth)}</td>
              <td>{formatDate(employee.startDate)}</td>
              <td>{employee.department}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
