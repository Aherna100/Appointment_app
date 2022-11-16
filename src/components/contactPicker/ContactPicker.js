import React from "react";

export const ContactPicker = ({
  contacts,
  onChange
}) => {

  return (
    <select onChange={onChange}>
      <option value={""} key={-1} defaultValue></option>
      {contacts.map((item, index) => {
        return(
          <option
            value={item.name}
            key={index}
          >{item.name}</option>
        )
        })
      }
      
    </select>
  );
};
