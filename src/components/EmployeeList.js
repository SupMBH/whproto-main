import React, { useMemo } from 'react'; // Importation de React et des hooks useState et useEffect pour recup données et effets de bord
import { useTable, useSortBy } from 'react-table'; // Importation des hooks de react-table pour gérer les tableaux triables
import { useSelector } from 'react-redux'; // Importation du hook Redux pour accéder au store

const EmployeeList = () => {
  // Version Redux
  const employees = useSelector((state) => state.employees.list);
  // Version récupération depuis le LocalStorage
  /*
  const [employees, setEmployees] = useState([]); // État pour stocker la liste des employés
  // Utilisation de useEffect pour récupérer les données des employés depuis le localStorage
  import React, { useState, useEffect } from 'react';
  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || []; // Récupération des employés stockés
    setEmployees(savedEmployees); // Mise à jour de l'état avec les employés récupérés
  }, []); // Le tableau vide [] signifie que cet effet s'exécute une seule fois après le montage du composant
  */

  // Fonction pour formater les dates au format jj/mm/aaaa
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Définition des colonnes pour react-table
  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName'
      },
      {
        Header: 'Last Name',
        accessor: 'lastName'
      },
      {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
        Cell: ({ value }) => formatDate(value) // Formate les dates
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
        Cell: ({ value }) => formatDate(value) // Formate les dates
      },
      {
        Header: 'Department',
        accessor: 'department'
      },
      {
        Header: 'Street',
        accessor: 'street'
      },
      {
        Header: 'City',
        accessor: 'city'
      },
      {
        Header: 'State',
        accessor: 'state'
      },
      {
        Header: 'Zip Code',
        accessor: 'zipCode'
      }
    ],
    []
  );

  // Utilisation de react-table
  const tableInstance = useTable({ columns, data: employees }, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;

  // Ici notre HTML natif rend les tables de données au lieu du plugin jQuery du programme initial
  // Affiche un tableau avec la liste des employés et leurs infos
  return (
    <div>
      <h2>Current Employees</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, headerGroupIndex) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
              {headerGroup.headers.map((column) => {
                const { key, ...rest } = column.getHeaderProps(column.getSortByToggleProps());
                return (
                  <th key={column.id} {...rest}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' ▼'
                          : ' ▲'
                        : ' ◆'} {/* Flèche générique pour montrer que le tri est possible */}
                    </span>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            const { key, ...rest } = row.getRowProps();
            return (
              <tr key={rowIndex} {...rest}>
                {row.cells.map((cell) => {
                  const { key, ...rest } = cell.getCellProps();
                  return <td key={cell.column.id} {...rest}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
