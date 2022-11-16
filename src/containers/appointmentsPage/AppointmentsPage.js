import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ addContact, addAppointment, contacts, appointment }) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, settitle] = useState('');
  const [contact, setcontact] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if (!title) {
      console.log("failed");
      return
    }
    addAppointment(title, contact, date, time);
    settitle('');
    setcontact('');
    setdate('');
    settime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          contact={contact}
          date={date}
          time={time}
          settitle={settitle}
          setcontact={setcontact}
          setdate={setdate}
          settime={settime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          tiles={appointment}
        />
      </section>
    </div>
  );
};
