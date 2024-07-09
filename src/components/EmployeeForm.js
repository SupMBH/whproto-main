// AVEC PLUGGIN REACT POUR LES MENUS DEROULANTS (concernant le pluggin JQuery pour les tables de données on se sert de HTML natif)
import React, { useState } from 'react';  // Importation de React et du hook useState pour gérer l'état local
import DatePicker from 'react-datepicker';  // Importation du composant de sélection de date
import 'react-datepicker/dist/react-datepicker.css';  // Importation du fichier CSS pour le DatePicker
import Modal from 'react-modal';  // Importation du composant Modal
import Dropdown from './Dropdown.js'; // On importe ici le composant REACT crée pour le projet

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
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    };
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
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


// ICI CODE INITIAL SANS LE COMPOSANT REACT POUR LES MENUS DEROULANTS
/*
import React, { useState } from 'react';  // Importation de React et du hook useState pour gérer l'état local
import DatePicker from 'react-datepicker';  // Importation du composant de sélection de date
import 'react-datepicker/dist/react-datepicker.css';  // Importation du fichier CSS pour le DatePicker
import Modal from 'react-modal';  // Importation du composant Modal

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

  const states = [
    { name: "Alabama", abbreviation: "AL" },
    { name: "Alaska", abbreviation: "AK" },
    { name: "Arizona", abbreviation: "AZ" },
    { name: "Arkansas", abbreviation: "AR" },
    { name: "California", abbreviation: "CA" },
    { name: "Colorado", abbreviation: "CO" },
    { name: "Connecticut", abbreviation: "CT" },
    { name: "Delaware", abbreviation: "DE" },
    { name: "Florida", abbreviation: "FL" },
    { name: "Georgia", abbreviation: "GA" },
    { name: "Hawaii", abbreviation: "HI" },
    { name: "Idaho", abbreviation: "ID" },
    { name: "Illinois", abbreviation: "IL" },
    { name: "Indiana", abbreviation: "IN" },
    { name: "Iowa", abbreviation: "IA" },
    { name: "Kansas", abbreviation: "KS" },
    { name: "Kentucky", abbreviation: "KY" },
    { name: "Louisiana", abbreviation: "LA" },
    { name: "Maine", abbreviation: "ME" },
    { name: "Maryland", abbreviation: "MD" },
    { name: "Massachusetts", abbreviation: "MA" },
    { name: "Michigan", abbreviation: "MI" },
    { name: "Minnesota", abbreviation: "MN" },
    { name: "Mississippi", abbreviation: "MS" },
    { name: "Missouri", abbreviation: "MO" },
    { name: "Montana", abbreviation: "MT" },
    { name: "Nebraska", abbreviation: "NE" },
    { name: "Nevada", abbreviation: "NV" },
    { name: "New Hampshire", abbreviation: "NH" },
    { name: "New Jersey", abbreviation: "NJ" },
    { name: "New Mexico", abbreviation: "NM" },
    { name: "New York", abbreviation: "NY" },
    { name: "North Carolina", abbreviation: "NC" },
    { name: "North Dakota", abbreviation: "ND" },
    { name: "Ohio", abbreviation: "OH" },
    { name: "Oklahoma", abbreviation: "OK" },
    { name: "Oregon", abbreviation: "OR" },
    { name: "Pennsylvania", abbreviation: "PA" },
    { name: "Rhode Island", abbreviation: "RI" },
    { name: "South Carolina", abbreviation: "SC" },
    { name: "South Dakota", abbreviation: "SD" },
    { name: "Tennessee", abbreviation: "TN" },
    { name: "Texas", abbreviation: "TX" },
    { name: "Utah", abbreviation: "UT" },
    { name: "Vermont", abbreviation: "VT" },
    { name: "Virginia", abbreviation: "VA" },
    { name: "Washington", abbreviation: "WA" },
    { name: "West Virginia", abbreviation: "WV" },
    { name: "Wisconsin", abbreviation: "WI" },
    { name: "Wyoming", abbreviation: "WY" }
  ];

  // Fonction pour sauvegarder les données de l'employé en un objet dans localstorage et ouvrir la modale
  const saveEmployee = () => {
    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    };
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
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

          <label>State</label>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

          <label>Zip Code</label>
          <input type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </fieldset>

        <label>Department</label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
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
*/