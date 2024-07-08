import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [department, setDepartment] = useState('Sales');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const states = [
    { name: "Alabama", abbreviation: "AL" },
    // ... autres états
  ];

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

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Employee Created!</h2>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default EmployeeForm;
