import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

const erorrstyle = {
  fontSize: 11,
  color: "red",
  lineHeight: 0.0005,
  marginTop: -2.5
}
export const ContactsPage = (props) => {
  const [name , setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  const [phoneChecking, setPhoneChecking] = useState('');

useEffect(() => {
  let duplicates = props.contact.find(look => {
    return look.name === name;
  });
  if (duplicates !== undefined) {
    setDuplicate(true);
    duplicates = '';
  } else {
    setDuplicate(false);
  };
},[name, props.contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneCheck = new RegExp(/^\d{10}$/, 'i');
    if (phoneCheck.test(phone)) {
    if (duplicate === false) {
      props.contactConnect(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
      setPhoneChecking('');
    }
  } else {
    setPhoneChecking(<p style={erorrstyle}>You should use a phone number with 10 numbers.</p>)
  }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} phoneChecking={phoneChecking}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tile={props.contact}/>
      </section>
    </div>
  );
};
