import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contact, setContact] = useState([
    {
      name: "Jorge",
      email: "test@mail",
      phone: "3213213"
    },
    {
      name: "Pepe",
      email: "test1@mail",
      phone: "4322341"
    }
  ]);
  const [appointment, setAppointment] = useState([
    {
      title: "test",
      contact: "contact",
      date: "today",
      time: "night"
    },
    {
      title: "Prueba",
      contact: "Contacto",
      date: "Tomorrow",
      time: "morning"
    }
  ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phone, email) => {
    setContact((prev) => 
      [
        {
          name: name,
          phone: phone,
          email: email
        },
        ...prev
      ]
    );
  }

  const addAppointment = (title, contact, date, time) => {
    setAppointment((prev) => 
      [
        {
          title: title,
          contact: contact,
          date: date,
          time: time
        },
        ...prev
      ]
    );
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
              addContact={addContact}
              contacts={contact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              addAppointment={addAppointment}
              addContact={addContact}
              contacts={contact}
              appointment={appointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
