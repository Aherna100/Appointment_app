import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [dupCheck, setDupCheck] = useState(false);

  useEffect(() => {
    if (contacts.every(item => item.name !== name)) {
      setDupCheck(false);
      console.log("pass");
    } else {
      setDupCheck(true);
      console.log("failed");
    }
  }, [name, dupCheck, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!dupCheck) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          tiles={contacts}
        />
      </section>
    </div>
  );
};
