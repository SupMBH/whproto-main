import React, { useState } from 'react';  // Importation de React et du hook useState pour gérer l'état local
import DatePicker from 'react-datepicker';  // Importation du composant de sélection de date
import 'react-datepicker/dist/react-datepicker.css';  // Importation du fichier CSS pour le DatePicker
import Modal from 'react-modal';  // Importation du composant Modal
import Dropdown from './Dropdown.js'; // On importe ici le composant REACT crée pour le projet

import { useDispatch } from 'react-redux'; // Redux
import { addEmployee } from '../redux/employeesSlice'; // Redux - action pour ajouter un employé

Modal.setAppElement('#root'); // Définit l'élément racine de l'application pour la modal (accessibilité et erreurs console)

//Stockage des états le hook usestate va gerer les champs du formaulaire
const EmployeeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [department, setDepartment] = useState('Sales');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('AL');
  const [zipCode, setZipCode] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const dispatch = useDispatch(); // Utilisation de useDispatch pour envoyer des actions Redux

  const states = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AZ" },
    { label: "Arkansas", value: "AR" },
    { label: "California", value: "CA" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
    { label: "Delaware", value: "DE" },
    { label: "Florida", value: "FL" },
    { label: "Georgia", value: "GA" },
    { label: "Hawaii", value: "HI" },
    { label: "Idaho", value: "ID" },
    { label: "Illinois", value: "IL" },
    { label: "Indiana", value: "IN" },
    { label: "Iowa", value: "IA" },
    { label: "Kansas", value: "KS" },
    { label: "Kentucky", value: "KY" },
    { label: "Louisiana", value: "LA" },
    { label: "Maine", value: "ME" },
    { label: "Maryland", value: "MD" },
    { label: "Massachusetts", value: "MA" },
    { label: "Michigan", value: "MI" },
    { label: "Minnesota", value: "MN" },
    { label: "Mississippi", value: "MS" },
    { label: "Missouri", value: "MO" },
    { label: "Montana", value: "MT" },
    { label: "Nebraska", value: "NE" },
    { label: "Nevada", value: "NV" },
    { label: "New Hampshire", value: "NH" },
    { label: "New Jersey", value: "NJ" },
    { label: "New Mexico", value: "NM" },
    { label: "New York", value: "NY" },
    { label: "North Carolina", value: "NC" },
    { label: "North Dakota", value: "ND" },
    { label: "Ohio", value: "OH" },
    { label: "Oklahoma", value: "OK" },
    { label: "Oregon", value: "OR" },
    { label: "Pennsylvania", value: "PA" },
    { label: "Rhode Island", value: "RI" },
    { label: "South Carolina", value: "SC" },
    { label: "South Dakota", value: "SD" },
    { label: "Tennessee", value: "TN" },
    { label: "Texas", value: "TX" },
    { label: "Utah", value: "UT" },
    { label: "Vermont", value: "VT" },
    { label: "Virginia", value: "VA" },
    { label: "Washington", value: "WA" },
    { label: "West Virginia", value: "WV" },
    { label: "Wisconsin", value: "WI" },
    { label: "Wyoming", value: "WY" }
  ];

  const departments = [
    { label: "Sales", value: "Sales" },
    { label: "Marketing", value: "Marketing" },
    { label: "Engineering", value: "Engineering" },
    { label: "Human Resources", value: "Human Resources" },
    { label: "Legal", value: "Legal" }
  ];

   // Fonction pour sauvegarder les données de l'employé en un objet dans localstorage et ouvrir la modale
   const saveEmployee = () => {
    const employee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth.toISOString(), // Convertir en chaîne de caractères car la valeur est de base non serialisable dans redux et on a une erreur console
      startDate: startDate.toISOString(),      // idem
      department,
      street,
      city,
      state,
      zipCode,
    };
    //Dispatch Redux
    dispatch(addEmployee(employee)); // Envoi de l'action Redux pour ajouter un employé
    //Envoi vers local Storage
    /*
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    */
    setModalIsOpen(true);
  };

  return (
    <div>
      <h2>Create Employee</h2>
      <form>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label>Date of Birth</label>
        <DatePicker selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} />

        <label>Start Date</label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

        <fieldset>
          <legend>Address</legend>
          <label>Street</label>
          <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />

          <label>City</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

          <Dropdown
            label="State"
            options={states}
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          <label>Zip Code</label>
          <input type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </fieldset>

        <Dropdown
          label="Department"
          options={departments}
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </form>
      <button onClick={saveEmployee}>Save</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <div className="modal-content">
          <h2>Employee Created!</h2>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default EmployeeForm;
