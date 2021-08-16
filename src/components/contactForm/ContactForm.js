import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  phoneChecking
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
      {phoneChecking}
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
      <input type='submit'/>
    </form>
  );
};
