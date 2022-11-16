import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  settitle,
  contact,
  setcontact,
  date,
  setdate,
  time,
  settime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const minNum = getTodayString();

  return (
    <form onSubmit={handleSubmit}>
      <input value={title}
              type="text"
              onChange={(e) => settitle(e.target.value)}
              placeholder='Title'></input>
      <input value={date}
              type="date"
              onChange={(e) => setdate(e.target.value)}
              min={minNum}
              ></input>
      <input value={time}
              type="time"
              onChange={(e) => settime(e.target.value)}
              placeholder="time"></input>
      <ContactPicker 
              contacts={contacts}
              onChange={(e) => setcontact(e.target.value)}/>
      <input type='submit'></input>
    </form>
  );
};
