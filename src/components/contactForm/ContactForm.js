import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Name">
      </input>
      <input
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        //pattern={'/^[0-9()-]+$/'}
        type="tel"
        placeholder="Phone">
      </input>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Email">
      </input>
      <input
        type="submit" value="Add Contact" />
    </form>
  );
};
