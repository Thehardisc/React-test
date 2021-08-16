import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
const [contact, setContact] = useState([]);

const contactConnect = (name, number, email) => {
  const contactCreator = {
    name,
    number,
    email,
  };
  setContact((prev) => {
    return [contactCreator, ...prev];
  });
};
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

const [appointment, setAppointment] = useState([]);

const createAppointment = (title, contact, date, time) => {
  const appointmentObject = {
    title,
    contact,
    date,
    time,
  };
  setAppointment((prev) => {
    return [appointmentObject, ...prev];
  });
};

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
            <ContactsPage contact={contact} contactConnect={contactConnect}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointment={appointment} createAppointment={createAppointment} contact={contact}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
