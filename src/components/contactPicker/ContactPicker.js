import React from "react";

export const ContactPicker = ({ onChange, contacts }) => {
  console.log(contacts);
  return (
    <select onChange={onChange}>
      <option>No Contact</option>
      {contacts.map((value, index) => {
        return <option key={index}>{value.name}</option>
      })}
    </select>
  );
};
