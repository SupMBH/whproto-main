//COMPOSANT REACT DEMANDE DANS L'ENNONCE

import React from 'react';

// Déclaration du composant Dropdown qui reçoit des propriétés (props) : label, options, value, et onChange.
const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div>
      {/* Affichage du label du menu déroulant */}
      <label>{label}</label>
      {/* Création de l'élément <select> qui représente le menu déroulant */}
      <select value={value} onChange={onChange}>
        {/* Boucle à travers les options pour créer un élément <option> pour chaque option */}
        {options.map((option, index) => (
          // Chaque option reçoit une clé unique basée sur son index et affiche son label
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Export du composant Dropdown pour qu'il puisse être importé et utilisé dans d'autres fichiers
export default Dropdown;
